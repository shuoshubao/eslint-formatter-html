<template>
    <div id="vue-app-root" style="display: none;">
        <el-card class="eslint-analysis" :body-style="{padding: '10px'}" header="Eslint统计">
            <el-row>
                <el-col :span="4" v-for="(item, index) in analysisList" :key="index">
                    <span class="label">{{item.label}}:</span>
                    <span class="value" v-html="analysis[item.prop]"></span>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="eslint-results" :body-style="{padding: '10px'}">
            <div slot="header">
                <span>Eslint报告</span>
                <el-button
                    @click="handleOpenAll"
                    style="float: right; padding: 3px 0px;"
                    type="text"
                >{{openAll ? '全部折叠' : '全部展开'}}</el-button>
            </div>
            <el-card
                :class="['box-card', item.open ? 'open' : 'close', {'is-error': item.errorCount, 'is-warning': item.errorCount === 0 && item.warningCount, 'is-success': item.errorCount + item.warningCount === 0}]"
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
                    size="mini"
                    style="width: 100%"
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
                            <a :href="scope.row.ruleIdUrl" target="_blank">
                                <el-button type="text">{{scope.row.ruleId}}</el-button>
                            </a>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-card>
    </div>
</template>

<script>
Vue.use(ELEMENT);

const sum = (...args) => args.flat().reduce((a, b) => a + b, 0);

new Vue({
    el: '#vue-app-root',
    data: {
        openAll: true,
        analysis: {
            errorCount: '',
            warningCount: '',
            errorWarningCount: '',
            FixableCount: '',
            fileCount: ''
        },
        analysisList: [
            { label: 'TotalCount', prop: 'errorWarningCount' },
            { label: 'FixableCount', prop: 'fixableCount' },
            { label: 'ErrorCount', prop: 'errorCount' },
            { label: 'WarningCount', prop: 'warningCount' },
            { label: '文件数', prop: 'fileCount' }
        ],
        tableData: window.results.map(v => {
            return {
                ...v,
                open: true
            };
        })
    },
    methods: {
        handleOpenItem(index) {
            this.tableData[index].open = !this.tableData[index].open;
        },
        handleOpenAll() {
            const { openAll } = this;
            this.openAll = !openAll;
            this.tableData.forEach(v => {
                v.open = this.openAll;
            });
        }
    },
    created() {
        document.querySelector('#vue-app-root').style.display = 'block';
        const { tableData } = this;

        const errorCount = sum(
            tableData.map(v => {
                return v.errorCount;
            })
        );

        const warningCount = sum(
            tableData.map(v => {
                return v.warningCount;
            })
        );

        const fixableCount = sum(
            tableData.map(v => {
                return v.fixableErrorCount + v.fixableWarningCount;
            })
        );

        const fileCount = tableData.length;

        const successFileCount = tableData.filter(v => {
            return v.errorCount + v.warningCount === 0;
        }).length;

        Object.assign(this.analysis, {
            errorWarningCount: errorCount + warningCount,
            errorCount,
            warningCount,
            fixableCount,
            fileCount: `${fileCount} (<span class="color-danger">${fileCount - successFileCount}</span>/<span class="color-success">${successFileCount}</span>)`
        });
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
        cursor: pointer;
        .filePath {
            cursor: default;
            padding: 0 20px 0 40px;
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
    .el-table td {
        padding: 0;
    }
    .el-table .cell {
        padding: 0 3px;
        line-height: 20px;
    }
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
