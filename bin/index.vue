<template>
    <div id="app" style="display: none;">
        <mtd-card class="eslint-analysis" title="Eslint统计">
            <mtd-row style="padding-bottom: 10px;" v-if="analysis.errorCount + analysis.warningCount">
                <mtd-col :span="4" v-for="(item, index) in analysisList" :key="index">
                    <span class="label">{{ item.label }}:</span>
                    <span class="value" v-html="analysis[item.prop]"></span>
                </mtd-col>
            </mtd-row>
            <mtd-row v-else>
                <mtd-progress type="circle" :percentage="100" status="success"></mtd-progress>
            </mtd-row>
            <mtd-row v-if="!!RankMessages.length">
                <mtd-col>
                    <mtd-table :data="RankMessages" style="width: 100%;" size="small" border>
                        <mtd-table-column label="rank" width="60">
                            <template slot-scope="scope">
                                <span :class="{ 'color-danger': scope.$index < 5 }">{{ scope.$index + 1 }}</span>
                            </template>
                        </mtd-table-column>
                        <mtd-table-column label="count" prop="count" width="70"></mtd-table-column>
                        <mtd-table-column label="severity" prop="severityText" width="80"></mtd-table-column>
                        <mtd-table-column label="ruleId" width="300">
                            <template slot-scope="scope" v-if="scope.row.ruleId">
                                <a :href="scope.row.url" target="_blank">{{ scope.row.ruleId }}</a>
                                <span v-if="scope.row.fixable" style="font-size: 12px;">🔧</span>
                            </template>
                        </mtd-table-column>
                        <mtd-table-column label="description" prop="description"></mtd-table-column>
                    </mtd-table>
                </mtd-col>
            </mtd-row>
        </mtd-card>
        <mtd-card class="eslint-results" v-if="!!RankMessages.length">
            <div slot="title" style="overflow: hidden;">
                <span style="float: left;">Eslint报告</span>
                <span style="float: left; margin-left: 50px;">
                    <span style="margin-right: : 10px;">排序:</span>
                    <mtd-radio-group v-model="sortModel" @change="handleChangeSort" size="small">
                        <mtd-radio-button :value="1">错误数</mtd-radio-button>
                        <mtd-radio-button :value="2">文件路径</mtd-radio-button>
                    </mtd-radio-group>
                </span>
                <mtd-button @click="handleOpenCloseAll(openAll)" type="primary" size="small" style="float: right;">
                    {{ openAll ? '全部折叠' : '全部展开' }}
                </mtd-button>
            </div>
            <mtd-card
                :class="[
                    'box-card',
                    item.close ? 'close' : 'open',
                    {
                        'is-error': item.errorCount,
                        'is-warning': item.errorCount === 0 && item.warningCount,
                        'is-success': item.errorCount + item.warningCount === 0
                    }
                ]"
                :body-style="{ padding: 0 }"
                shadow="never"
                v-for="(item, index) in tableData"
                :key="index"
            >
                <div slot="title" @click="() => handleOpenItem(index)">
                    <mtd-icon name="check"></mtd-icon>
                    <mtd-icon name="right"></mtd-icon>
                    <mtd-icon name="down"></mtd-icon>
                    <span class="filePath" @click.stop>{{ item.filePath }}</span>
                    <mtd-tooltip content="点击复制文件路径" placement="top">
                        <mtd-icon name="copy-o" @click.stop="handleCopyFilePath(item)" />
                    </mtd-tooltip>
                    <b class="error-warning-count" style="font-size: 12px;">
                        <span>{{ item.errorCount + item.warningCount }} problems</span>
                        <span v-if="item.errorCount + item.warningCount !== 0">
                            <span>(</span>
                            <span>{{ item.errorCount }} errors,</span>
                            <span>{{ item.warningCount }} warnings,</span>
                            <span>{{ item.fixableErrorCount + item.fixableWarningCount }} fixable</span>
                            <span>)</span>
                        </span>
                    </b>
                </div>
                <mtd-table
                    v-show="item.messages.length"
                    :data="item.messages"
                    :show-header="false"
                    style="width: 100%;"
                    size="small"
                >
                    <mtd-table-column width="70">
                        <template slot-scope="scope">
                            <mtd-tooltip content="点击复制文件路径和行号" placement="top">
                                <span class="code-line" @click="handleCopyFilePath(item, scope.row)">
                                    {{ [scope.row.line, scope.row.column].join(':') }}
                                </span>
                            </mtd-tooltip>
                        </template>
                    </mtd-table-column>
                    <mtd-table-column width="90">
                        <template slot-scope="scope">
                            <span v-if="scope.row.severity === 1" class="color-warning">Warning</span>
                            <span v-if="scope.row.severity === 2" class="color-danger">Error</span>
                        </template>
                    </mtd-table-column>
                    <mtd-table-column>
                        <template slot-scope="scope">
                            <pre style="margin: 0;">{{ scope.row.message }}</pre>
                        </template>
                    </mtd-table-column>
                    <mtd-table-column align="right">
                        <template slot-scope="scope" v-if="scope.row.ruleId">
                            <a :href="scope.row.url" target="_blank">{{ scope.row.ruleId }}</a>
                        </template>
                    </mtd-table-column>
                </mtd-table>
            </mtd-card>
        </mtd-card>
    </div>
</template>

<script>
const { get, sortBy, sum, isString } = _;

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
            const url = get(RulesMeta[ruleId], key, '');
            // sonar
            if (!url && isString(ruleId) && ruleId.startsWith('sonar')) {
                const sonarRuleId = ruleId.split('/')[1];
                return `https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/${sonarRuleId}.md`;
            }
            return url;
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
            errorWarningCount: [
                errorCount + warningCount,
                '/(',
                fixableCount,
                '<span style="font-size: 12px;">🔧</span>)'
            ].join(''),
            errorCount,
            warningCount,
            fileCount: [
                fileCount,
                '(<span class="color-danger">',
                fileCount - successFileCount,
                '</span>/<span class="color-success">',
                successFileCount,
                '</span>)'
            ].join('')
        });

        this.handleChangeSort();
        this.getRankMessages();
    }
});
</script>

<style lang="less">
html,
body {
    margin: 0;
}
#app {
    padding: 10px;
}
a,
a:hover {
    text-decoration: none;
}
.eslint-results {
    margin-top: 10px;
}

.mtd-card-title,
.mtd-card-body {
    padding: 10px;
}

.box-card {
    border: 0;
    border-radius: 0;
    .mtd-card-title {
        padding: 5px 3px;
        user-select: none;
        .filePath {
            padding-left: 20px;
        }
        .mtdicon {
            cursor: pointer;
        }
        .error-warning-count {
            float: right;
        }
        .mtdicon-check,
        .mtdicon-right,
        .mtdicon-down {
            display: none;
        }
    }

    .mtd-card-body {
        padding: 0;
    }

    &.is-success .mtdicon-check {
        display: inline;
    }
    &:not(.is-success).open .mtdicon-down {
        display: inline;
    }
    &:not(.is-success).close .mtdicon-right {
        display: inline;
    }
    &.is-success .mtd-card-title {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
        cursor: default;
    }
    &.is-warning .mtd-card-title {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
    }
    &.is-error .mtd-card-title {
        background-color: #fef0f0;
        color: #f56c6c;
        border-color: #fbc4c4;
    }
    &.close .mtd-card-body {
        display: none;
    }
}

.mtd-table td {
    padding: 0;
}
.mtd-table-cell {
    padding: 5px 10px;
    line-height: 20px;
}

.mtd-button--text {
    user-select: text;
}

.code-line {
    cursor: pointer;
}

.color {
    &-success {
        color: #67c23a;
    }
    &-danger {
        color: #f56c6c;
    }
    &-warning {
        color: #e6a23c;
    }
}
</style>
