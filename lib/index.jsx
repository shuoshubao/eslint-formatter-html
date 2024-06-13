import { CodeOutlined, CopyOutlined, DownOutlined, RightOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import {
    Badge,
    Button,
    Card,
    ConfigProvider,
    Dropdown,
    FloatButton,
    List,
    Modal,
    Progress,
    Space,
    Statistic,
    Table,
    Tooltip,
    Typography,
    message,
    theme
} from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import { find, first, last, map } from 'lodash';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
    EslintCreateTime,
    EslintCwd,
    FatalErrorEslintResults,
    NoProblematicEslintResults,
    ProblematicEslintResults,
    SortModeEnum,
    TableColumns,
    addListenerPrefersColorScheme,
    getEslintAnalysis,
    getEslintResults,
    getRankMessages,
    getResultsColumns,
    getRulesColumns,
    handleCopyText,
    hasNoError,
    isDark,
    showPkgInfo
} from './config';
import './index.scss';

const { Text, Title } = Typography;

const { defaultAlgorithm, darkAlgorithm } = theme;

const AllDataSourceRankMessages = getRankMessages();

const App = () => {
    const [dark, setDark] = useState(isDark());

    const [selectedRowKeys, setSelectedRowKeys] = useState(map(AllDataSourceRankMessages, 'ruleId'));

    const [dataSourceRankMessages, setDataSourceRankMessages] = useState(AllDataSourceRankMessages);

    const [sortMode, setSortMode] = useState('errors');

    const showEslintResults = getEslintResults({ sortMode, selectedRowKeys });

    const [openAll, setOpenAll] = useState(true);

    const [activeKeys, setActiveKeys] = useState(map(showEslintResults, 'filePath'));

    const [messageApi, messageContextHolder] = message.useMessage();

    const [modal, modalContextHolder] = Modal.useModal();

    const onSelectChange = newSelectedRowKeys => {
        setSelectedRowKeys(newSelectedRowKeys);
        setOpenAll(true);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const { ErrorAndWarningCount, FixableCount, ErrorCount, WarningCount, FilesCount, SuccessFileCount } = getEslintAnalysis();

    const onRankMessagesTableChange = (pagination, filters) => {
        const { severity } = filters;
        const RankMessages = getRankMessages(severity);
        setDataSourceRankMessages(RankMessages);
        setSelectedRowKeys(map(RankMessages, 'ruleId'));
    };

    const { length: AllFilesCount } = showEslintResults;

    useEffect(() => {
        addListenerPrefersColorScheme(value => {
            setDark(value);
        });
    }, [setDark]);

    return (
        <ConfigProvider
            componentSize="small"
            theme={{
                algorithm: dark ? darkAlgorithm : defaultAlgorithm
            }}
        >
            <div style={{ padding: 12, background: dark ? '#000' : '#fff' }}>
                {FatalErrorEslintResults.length !== 0 && (
                    <Card title="FatalError" extra={<Badge color="#ff4d4f" count={FatalErrorEslintResults.length} />} hoverable>
                        <List
                            rowKey="filePath"
                            dataSource={FatalErrorEslintResults}
                            renderItem={(item, index) => {
                                const { filePath, messages } = item;
                                const message = first(messages).message.replaceAll(`${EslintCwd}/`, '');
                                return (
                                    <List.Item style={{ padding: 0, marginTop: index === 0 ? 0 : 10 }}>
                                        <Card
                                            title={
                                                <Text type="danger" copyable>
                                                    {filePath}
                                                </Text>
                                            }
                                            hoverable
                                            style={{ width: '100%' }}
                                        >
                                            <pre style={{ margin: 0 }}>{message}</pre>
                                        </Card>
                                    </List.Item>
                                );
                            }}
                        />
                    </Card>
                )}

                <Card
                    title="ESLint Report"
                    extra={
                        <>
                            <Button>{last(EslintCwd.split('/'))}</Button>
                            <Button>{dayjs(EslintCreateTime).format('YYYY-MM-DD HH:mm:ss')}</Button>
                            <Button
                                onClick={() => {
                                    showPkgInfo(modal, messageApi);
                                }}
                                icon={<CodeOutlined />}
                            />
                        </>
                    }
                    hoverable
                >
                    {hasNoError && (
                        <div style={{ padding: 10 }}>
                            <Progress type="circle" percent={100} />
                        </div>
                    )}
                    {!hasNoError && (
                        <Space size={50}>
                            <Statistic
                                title="Totals"
                                formatter={() => {
                                    return `${ErrorAndWarningCount}(${FixableCount}🔧)`;
                                }}
                            />
                            <Statistic title="Errors" value={ErrorCount} />
                            <Statistic title="Warnings" value={WarningCount} />
                            <Statistic
                                title="Files"
                                formatter={() => {
                                    return (
                                        <Space size={2}>
                                            <span>{FilesCount}</span>
                                            <Badge color="#ff4d4f" count={FilesCount - SuccessFileCount} />
                                            <Badge color="#52c41a" count={SuccessFileCount} />
                                        </Space>
                                    );
                                }}
                            />
                        </Space>
                    )}
                    {dataSourceRankMessages.length !== 0 && (
                        <Table
                            rowKey="ruleId"
                            rowSelection={rowSelection}
                            columns={getRulesColumns()}
                            dataSource={dataSourceRankMessages}
                            onChange={onRankMessagesTableChange}
                            pagination={false}
                            scroll={{
                                y: 41 * 10
                            }}
                        />
                    )}
                    <FloatButton.BackTop icon={<VerticalAlignTopOutlined />} />
                </Card>

                {ProblematicEslintResults.length !== 0 && (
                    <Card
                        title="Error & Warning"
                        extra={
                            <Space>
                                <Badge color={ErrorCount ? '#ff4d4f' : '#faad14'} count={ProblematicEslintResults.length} />
                                <Dropdown
                                    menu={{
                                        items: SortModeEnum,
                                        onClick: ({ key }) => {
                                            setSortMode(key);
                                        }
                                    }}
                                >
                                    <Button style={{ width: 150 }}>{['SortBy: ', find(SortModeEnum, { key: sortMode }).label].join('')}</Button>
                                </Dropdown>
                                {!hasNoError && (
                                    <Tooltip title="Copy all file paths with errors" placement="topRight">
                                        <Button
                                            icon={<CopyOutlined />}
                                            onClick={() => {
                                                const files = showEslintResults.filter(v => v.errorCount);
                                                handleCopyText(map(files, 'filePath').join(' '), message);
                                            }}
                                        />
                                    </Tooltip>
                                )}
                                <Tooltip title="toggle open/fold all" placement="topRight">
                                    <Button
                                        disabled={!AllFilesCount}
                                        icon={openAll ? <DownOutlined /> : <RightOutlined />}
                                        onClick={() => {
                                            setActiveKeys(openAll ? [] : map(showEslintResults, 'filePath'));
                                            setOpenAll(!openAll);
                                        }}
                                    />
                                </Tooltip>
                            </Space>
                        }
                        hoverable
                        bodyStyle={{ padding: 0 }}
                    >
                        {!!AllFilesCount && (
                            <Table
                                rowKey="filePath"
                                columns={TableColumns}
                                dataSource={showEslintResults}
                                pagination={false}
                                showHeader={false}
                                style={{ marginTop: 1 }}
                                expandable={{
                                    columnWidth: 32,
                                    expandRowByClick: true,
                                    defaultExpandAllRows: true,
                                    expandedRowKeys: activeKeys,
                                    rowExpandable: record => {
                                        return record.errorCount + record.warningCount;
                                    },
                                    expandedRowRender(record) {
                                        const { messages } = record;
                                        const showMessages = messages.filter(v => {
                                            return selectedRowKeys.includes(v.ruleId);
                                        });
                                        return (
                                            <Table
                                                rowKey={record => {
                                                    const { ruleId, line, column } = record;
                                                    return [ruleId, line, column].join();
                                                }}
                                                columns={getResultsColumns(record, messageApi)}
                                                dataSource={showMessages}
                                                showHeader={false}
                                                pagination={false}
                                            />
                                        );
                                    },
                                    onExpandedRowsChange(expandedRows) {
                                        setActiveKeys(expandedRows);
                                    }
                                }}
                            />
                        )}
                    </Card>
                )}

                {Boolean(SuccessFileCount) && (
                    <Card title="No Bugs" extra={<Badge color="#52c41a" count={SuccessFileCount} />} hoverable bodyStyle={{ padding: 0 }}>
                        <List
                            dataSource={NoProblematicEslintResults}
                            renderItem={item => {
                                const { filePath } = item;
                                return (
                                    <List.Item style={{ padding: '8px 12px' }}>
                                        <Text copyable type="success">
                                            {filePath}
                                        </Text>
                                    </List.Item>
                                );
                            }}
                        />
                    </Card>
                )}
            </div>
            {messageContextHolder}
            {modalContextHolder}
        </ConfigProvider>
    );
};

createRoot(document.querySelector('#app')).render(<App />);
