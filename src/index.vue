<template>
    <div id="vue-app-root" style="display: none;">
        <el-card class="eslint-analysis" :body-style="{padding: '10px'}" header="Eslint统计">
            <el-row style="padding-bottom: 10px;" v-if="analysis.errorCount + analysis.warningCount">
                <el-col :span="4" v-for="(item, index) in analysisList" :key="index">
                    <span class="label">{{item.label}}:</span>
                    <span class="value" v-html="analysis[item.prop]"></span>
                </el-col>
            </el-row>
            <el-row v-else>
                <el-progress type="circle" :percentage="100" status="success"></el-progress>
            </el-row>
            <el-row v-if="!!RankMessages.length">
                <el-col>
                    <el-table
                        :data="RankMessages"
                        style="width: 100%;"
                        size="mini"
                        border
                        :max-height="32 * 6 + 1"
                    >
                        <el-table-column label="rank" width="50">
                            <template slot-scope="scope">
                                <span
                                    :class="{'color-danger': scope.$index < 5}"
                                >{{scope.$index + 1}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="ruleId" width="180">
                            <template slot-scope="scope">
                                <a :href="scope.row.url" target="_blank">
                                    <el-button size="small" type="text">{{scope.row.ruleId}}</el-button>
                                </a>
                                <span v-if="scope.row.fixable" style="font-size: 12px;">🔧</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="severity" prop="severityText" width="80"></el-table-column>
                        <el-table-column label="description" prop="description"></el-table-column>
                        <el-table-column label="count" prop="count" width="60"></el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="eslint-results" :body-style="{padding: '10px'}">
            <div slot="header" style="overflow: hidden;">
                <span style="float: left;">Eslint报告</span>
                <span style="float: left; margin-left: 50px;">
                    <span style="margin-right: : 10px;">排序:</span>
                    <el-radio-group v-model="sortModel" @change="handleChangeSort" size="mini">
                        <el-radio-button :label="1">错误数</el-radio-button>
                        <el-radio-button :label="2">文件路径</el-radio-button>
                    </el-radio-group>
                </span>
                <el-button
                    @click="handleOpenCloseAll(openAll)"
                    type="primary"
                    size="mini"
                    style="float: right;"
                >{{openAll ? '全部折叠' : '全部展开'}}</el-button>
            </div>
            <el-card
                :class="['box-card', item.close ? 'close' : 'open', {'is-error': item.errorCount, 'is-warning': item.errorCount === 0 && item.warningCount, 'is-success': item.errorCount + item.warningCount === 0}]"
                :body-style="{padding: 0}"
                shadow="never"
                v-for="(item, index) in tableData"
                :key="index"
            >
                <div slot="header" @click="() => handleOpenItem(index)">
                    <span class="el-icon-check"></span>
                    <span class="el-icon-arrow-right"></span>
                    <span class="el-icon-arrow-down"></span>
                    <span class="filePath" @click.stop>{{item.filePath}}</span>
                    <el-tooltip content="复制文件路径" placement="top">
                        <span class="el-icon-document-copy" @click.stop="handleCopyFilePath(item)"></span>
                    </el-tooltip>
                    <b class="error-warning-count" style="font-size: 12px;">
                        <span>{{item.errorCount + item.warningCount}} problems</span>
                        <span v-if="item.errorCount + item.warningCount !== 0">
                            <span>(</span>
                            <span>{{item.errorCount}} errors,</span>
                            <span>{{item.warningCount}} warnings,</span>
                            <span>{{item.fixableErrorCount + item.fixableWarningCount}} fixable</span>
                            <span>)</span>
                        </span>
                    </b>
                </div>
                <el-table
                    v-show="item.messages.length"
                    :data="item.messages"
                    :show-header="false"
                    style="width: 100%"
                    size="mini"
                    :max-height="41 * 100"
                >
                    <el-table-column width="60">
                        <template
                            slot-scope="scope"
                        >{{[scope.row.line, scope.row.column].join(':')}}</template>
                    </el-table-column>
                    <el-table-column width="80">
                        <template slot-scope="scope">
                            <el-button
                                v-if="scope.row.severity === 1"
                                type="text"
                                class="color-warning"
                            >Warning</el-button>
                            <el-button
                                v-if="scope.row.severity === 2"
                                type="text"
                                class="color-danger"
                            >Error</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <div>{{scope.row.message}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="210" align="right">
                        <template slot-scope="scope">
                            <a :href="scope.row.url" target="_blank">
                                <el-button type="text" size="small">{{scope.row.ruleId}}</el-button>
                            </a>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-card>
    </div>
</template>

<script>
const { get, sortBy, sum } = _;
const { EslintResults = [], RulesMeta = [] } = window;
Vue.use(ELEMENT);
new Vue({
    el: '#vue-app-root',
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
            return get(RulesMeta[ruleId], key);
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
        handleCopyFilePath({ filePath }) {
            this.handleCopy(filePath);
            this.$message.success(`复制成功: ${filePath}`);
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
        document.querySelector('#vue-app-root').style.display = 'block';

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
            fileCount: `${fileCount} (<span class="color-danger">${fileCount - successFileCount}</span>/<span class="color-success">${successFileCount}</span>)`
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
#vue-app-root {
    padding: 10px;
}
.eslint-results {
    margin-top: 10px;
}

.box-card {
    border: 0;
    border-radius: 0;
    .el-card__header {
        padding: 5px 3px;
        user-select: none;
        .filePath {
            padding-left: 40px;
        }
        .el-icon-document-copy {
            cursor: pointer;
        }
        .error-warning-count {
            float: right;
        }
        .el-icon-check,
        .el-icon-arrow-right,
        .el-icon-arrow-down {
            display: none;
        }
    }
    &.is-success .el-icon-check {
        display: inline;
    }
    &:not(.is-success).open .el-icon-arrow-down {
        display: inline;
    }
    &:not(.is-success).close .el-icon-arrow-right {
        display: inline;
    }
    &.is-success .el-card__header {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
        cursor: default;
    }
    &.is-warning .el-card__header {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
    }
    &.is-error .el-card__header {
        background-color: #fef0f0;
        color: #f56c6c;
        border-color: #fbc4c4;
    }
    &.close .el-card__body {
        display: none;
    }
}

.el-table td {
    padding: 0;
}
.el-table .cell {
    padding: 0 3px;
    line-height: 20px;
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
