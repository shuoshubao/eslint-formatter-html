import { BugOutlined, EnvironmentOutlined, GithubOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Button, Divider, List, Space, Tooltip, Typography } from 'antd';
import { filter, flatten, groupBy, intersection, map, sortBy, sum, uniq } from 'lodash';
import React from 'react';
import { author, bugs, homepage, name, version } from '../package.json';

const { Text, Link } = Typography;

const copyText = (text = '') => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};

const inflateData = async data => {
    if (typeof data !== 'string') {
        return data;
    }
    const bytes = Uint8Array.from(atob(data), item => item.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return JSON.parse(await new Response(stream).text());
};

window.EslintResults = await inflateData(window.EslintResults);
window.EslintRulesMeta = await inflateData(window.EslintRulesMeta);

const { EslintResults, EslintRulesMeta, EslintCwd = name, EslintCreateTime = Date.now() } = window;

export { EslintCreateTime, EslintCwd };

export const FatalErrorEslintResults = EslintResults.filter(item => item.fatalErrorCount);

export const ProblematicEslintResults = EslintResults.filter(item => {
    return item.messages.length && item.fatalErrorCount === 0;
});

export const NoProblematicEslintResults = EslintResults.filter(item => item.messages.length === 0);

const RankMessages = flatten(ProblematicEslintResults.map(item => item.messages));

export const hasNoError = !RankMessages.some(item => item.severity === 2) && FatalErrorEslintResults.length === 0;

export const getEslintAnalysis = () => {
    const ErrorCount = sum(
        ProblematicEslintResults.map(item => {
            return item.errorCount;
        })
    );

    const WarningCount = sum(
        ProblematicEslintResults.map(item => {
            return item.warningCount;
        })
    );

    const FixableCount = sum(
        ProblematicEslintResults.map(item => {
            return item.fixableErrorCount + item.fixableWarningCount;
        })
    );

    const { length: FilesCount } = EslintResults;

    const { length: SuccessFileCount } = NoProblematicEslintResults;

    return {
        ErrorAndWarningCount: ErrorCount + WarningCount,
        ErrorCount,
        WarningCount,
        FixableCount,
        FilesCount,
        SuccessFileCount
    };
};

const SeverityEnum = [
    { value: 2, text: <Text type="danger">error</Text> },
    { value: 1, text: <Text type="warning">warning</Text> }
];

export const RulesColumns = [
    {
        title: 'Count',
        dataIndex: 'count',
        width: 60
    },
    {
        title: 'Files',
        dataIndex: 'filesCount',
        width: 55
    },
    {
        title: 'RuleId',
        dataIndex: 'ruleId',
        width: 300,
        filters: SeverityEnum,
        render: (value, record) => {
            const { severity, url, fixable } = record;
            const isError = severity === 2;
            const nodes = [
                <Link href={url} type={isError ? 'danger' : 'warning'} copyable>
                    {value}
                </Link>
            ];
            if (fixable) {
                nodes.push(<span style={{ marginLeft: 4 }}>🔧</span>);
            }
            return nodes;
        }
    },
    {
        title: 'Description',
        dataIndex: 'description'
    }
];

const AllRuleIds = uniq(map(RankMessages, 'ruleId')).filter(Boolean);

export const getRankMessages = severitys => {
    const messages = AllRuleIds.map(ruleId => {
        const sameList = filter(RankMessages, { ruleId });
        const { severity } = sameList[0];
        const {
            docs: { url, description },
            fixable
        } = EslintRulesMeta[ruleId];
        const { length: count } = sameList;
        const { length: filesCount } = ProblematicEslintResults.filter(item => {
            return map(item.messages, 'ruleId').includes(ruleId);
        });
        return {
            ruleId,
            url,
            fixable,
            description,
            severity,
            count,
            filesCount
        };
    }).filter(item => {
        return (severitys || map(SeverityEnum, 'value')).includes(item.severity);
    });
    const temp = groupBy(messages, 'severity');
    return flatten([sortBy(temp['2'], ['count']).reverse(), sortBy(temp['1'], ['count']).reverse()]);
};

export const handleCopyText = (text, message) => {
    copyText(text);
    message.success(
        <>
            <span key="Copied">Copied</span>
            <div key="text">{text}</div>
        </>
    );
};

export const TableColumns = [
    {
        render(value, record) {
            const { filePath, errorCount } = record;
            return (
                <Text copyable type={errorCount ? 'danger' : 'warning'}>
                    {filePath}
                </Text>
            );
        }
    },
    {
        width: 100,
        align: 'right',
        render(value, record) {
            const { errorCount, warningCount } = record;
            return (
                <Space size={4}>
                    {!!errorCount && <Badge color="#ff4d4f" count={errorCount} />}
                    {!!warningCount && <Badge color="#faad14" count={warningCount} />}
                </Space>
            );
        }
    }
];

export const getResultsColumns = (row, message) => {
    const { filePath } = row;
    return [
        {
            width: 70,
            render: (value, record) => {
                const { line, column } = record;
                const codePositionText = [line, column].join(':');
                return (
                    <Tooltip title="Copy">
                        <Text
                            onClick={() => {
                                const text = [filePath, line, column].join(':');
                                handleCopyText(text, message);
                            }}
                        >
                            {codePositionText}
                        </Text>
                    </Tooltip>
                );
            }
        },
        {
            width: 300,
            render: (value, record) => {
                const { ruleId, severity } = record;
                const isError = severity === 2;
                const {
                    docs: { url }
                } = EslintRulesMeta[ruleId];
                return (
                    <Link href={url} type={isError ? 'danger' : 'warning'} copyable>
                        {ruleId}
                    </Link>
                );
            }
        },
        {
            dataIndex: 'message',
            render: value => {
                return <pre>{value}</pre>;
            }
        }
    ];
};

export const SortModeEnum = [
    { key: 'errors', label: 'Errors Count' },
    { key: 'filePath', label: 'File Path' }
];

export const getEslintResults = ({ sortMode, selectedRowKeys }) => {
    const list = [];
    if (sortMode === 'errors') {
        list.push(...sortBy(ProblematicEslintResults, ['errorCount', 'warningCount']).reverse());
    } else {
        list.push(...ProblematicEslintResults);
    }
    return list.filter(item => {
        return intersection(selectedRowKeys, map(item.messages, 'ruleId')).length;
    });
};

export const isDark = () => {
    const { matchMedia } = window;
    return matchMedia('(prefers-color-scheme: dark)').matches;
};

export const addListenerPrefersColorScheme = callback => {
    const { matchMedia } = window;
    matchMedia('(prefers-color-scheme: dark)').addListener(mediaQueryList => {
        callback(mediaQueryList.matches);
    });
    matchMedia('(prefers-color-scheme: light)').addListener(mediaQueryList => {
        callback(!mediaQueryList.matches);
    });
};

export const showPkgInfo = (Modal, message) => {
    const infoList = [
        {
            icon: <GithubOutlined />,
            href: homepage,
            children: homepage
        },
        {
            icon: <UserOutlined />,
            href: `https://github.com/${author?.name}`,
            children: author?.name
        },
        {
            icon: <MailOutlined />,
            href: `mailto:${author?.email}`,
            children: author?.email
        },
        {
            icon: <BugOutlined />,
            href: bugs?.url,
            children: bugs?.url
        },
        {
            type: 'text',
            icon: <EnvironmentOutlined />,
            children: EslintCwd
        }
    ];
    const content = (
        <List
            footer={
                <Space split={<Divider type="vertical" />}>
                    <Link href="https://eslint.org">ESLint</Link>
                    <Link href="https://github.com/airbnb/javascript">Airbnb ESLint</Link>
                    <Link href="https://typescript-eslint.io">TypeScript-ESLint</Link>
                    <Link href="https://eslint.vuejs.org">Vue-ESLint</Link>
                    <Link href="https://github.com/SonarSource/eslint-plugin-sonarjs">SonarJS-ESLint</Link>
                    <Link href="https://prettier.io">Prettier</Link>
                </Space>
            }
            dataSource={infoList.filter(item => item.children)}
            renderItem={item => {
                const { href, children } = item;
                if (!href) {
                    item.onClick = () => {
                        handleCopyText(children, message);
                    };
                }
                return (
                    <List.Item>
                        <Button {...item} style={{ border: 'none' }} />
                    </List.Item>
                );
            }}
        />
    );

    Modal.info({
        title: [name, version].join('@'),
        maskClosable: true,
        width: 800,
        style: { top: 50 },
        content
    });
};
