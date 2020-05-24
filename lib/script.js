const { get, sortBy, sum } = _;

const { EslintResults = [], RulesMeta = [] } = window;

Vue.use(MTD);

new Vue({
    el: '#app',
    data: {
        openAll: true,
        sortModel: 1,
        analysis: {
            errorCount: '',
            warningCount: '',
            errorWarningCount: '',
            fileCount: ''
        },
        analysisList: [
            { label: 'TotalCount', prop: 'errorWarningCount' },
            { label: 'ErrorCount', prop: 'errorCount' },
            { label: 'WarningCount', prop: 'warningCount' },
            { label: '文件数', prop: 'fileCount' }
        ],
        tableData: [],
        RankMessages: []
    },
    methods: {
        initEslintResults() {
            EslintResults.forEach(v => {
                v.close = false;
                v.messages.forEach(v2 => {
                    const { ruleId } = v2;
                    v2.url = this.getMeta(ruleId, 'docs.url');
                });
            });
        },
        getMeta(ruleId = '', key = '') {
            return get(RulesMeta[ruleId], key, '');
        },
        getRankMessages() {
            const Messages = [...EslintResults].map(v => v.messages).flat();

            const ruleIdList = [...new Set(Messages.map(v => v.ruleId))];

            const RankMessages = ruleIdList.map(v => {
                const sameList = Messages.filter(v2 => v2.ruleId === v);
                const { severity } = sameList[0];
                const { url, description } = this.getMeta(v, 'docs');
                const fixable = this.getMeta(v, 'fixable');
                const severityText = {
                    1: 'warning',
                    2: 'error'
                }[severity];
                const count = sameList.length;
                return {
                    ruleId: v,
                    url,
                    fixable,
                    description,
                    severityText,
                    count
                };
            });

            this.RankMessages = sortBy(RankMessages, ['count']).reverse();
        },
        handleOpenItem(index) {
            const { close, errorCount, warningCount } = this.tableData[index];
            if (errorCount + warningCount === 0) {
                return;
            }
            this.tableData[index].close = !close;
        },
        handleOpenCloseAll(openAll) {
            this.openAll = !openAll;
            this.tableData.forEach(v => {
                v.close = !this.openAll;
            });
        },
        handleCopyFilePath({ filePath }, row = {}) {
            const { line, column } = row;
            const text = [filePath, line, column].filter(Boolean).join(':');
            this.handleCopy(text);
            this.$mtd.message({ type: 'success', message: `复制成功: ${text}` });
        },
        handleCopy(text) {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', text);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        },
        handleChangeSort() {
            const { sortModel } = this;
            if (sortModel === 1) {
                this.tableData = sortBy([...EslintResults], ['errorCount', 'warningCount']).reverse();
            }
            if (sortModel === 2) {
                this.tableData = [...EslintResults];
            }
            this.handleOpenCloseAll(false);
        }
    },
    created() {
        document.querySelector('#app').style.display = 'block';

        this.initEslintResults();

        const errorCount = sum(
            EslintResults.map(v => {
                return v.errorCount;
            })
        );

        const warningCount = sum(
            EslintResults.map(v => {
                return v.warningCount;
            })
        );

        const fixableCount = sum(
            EslintResults.map(v => {
                return v.fixableErrorCount + v.fixableWarningCount;
            })
        );

        const fileCount = EslintResults.length;

        const successFileCount = EslintResults.filter(v => {
            return v.errorCount + v.warningCount === 0;
        }).length;

        Object.assign(this.analysis, {
            errorWarningCount: `${errorCount + warningCount}/(${fixableCount}<span style="font-size: 12px;">🔧</span>)`,
            errorCount,
            warningCount,
            fileCount: `${fileCount} (<span class="color-danger">${fileCount -
                successFileCount}</span>/<span class="color-success">${successFileCount}</span>)`
        });

        this.handleChangeSort();
        this.getRankMessages();
    }
});
