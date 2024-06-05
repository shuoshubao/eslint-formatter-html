import { BugOutlined, EnvironmentOutlined, GithubOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, List, Space, Tooltip, Typography } from 'antd';
import { filter, flatten, groupBy, intersection, map, sortBy, sum, uniq } from 'lodash';
import { inflateRaw } from 'pako/dist/pako_inflate.js';
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

const inflateData = str => {
    return JSON.parse(inflateRaw(new Uint8Array(str.split(',')), { to: 'string' }));
};

window.EslintResults = inflateData(window.EslintResults);
window.EslintRulesMeta = inflateData(window.EslintRulesMeta);

const { EslintResults, EslintRulesMeta, EslintCwd = name, EslintCreateTime = Date.now() } = window;

export { EslintCreateTime, EslintCwd };

export const FatalErrorEslintResults = EslintResults.filter(v => v.fatalErrorCount);

export const ProblematicEslintResults = EslintResults.filter(v => {
    return v.messages.length && v.fatalErrorCount === 0;
});

export const NoProblematicEslintResults = EslintResults.filter(v => v.messages.length === 0);

const RankMessages = flatten(ProblematicEslintResults.map(v => v.messages));

export const hasNoError = !RankMessages.some(v => v.severity === 2) && FatalErrorEslintResults.length === 0;

export const getEslintAnalysis = () => {
    const ErrorCount = sum(
        ProblematicEslintResults.map(v => {
            return v.errorCount;
        })
    );

    const WarningCount = sum(
        ProblematicEslintResults.map(v => {
            return v.warningCount;
        })
    );

    const FixableCount = sum(
        ProblematicEslintResults.map(v => {
            return v.fixableErrorCount + v.fixableWarningCount;
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

export const SeverityEnum = [
    { value: 2, text: <Text type="danger">error</Text> },
    { value: 1, text: <Text type="warning">warning</Text> }
];

const renderSeverity = value => {
    const isErr = value === 2;
    return <Text type={isErr ? 'danger' : 'warning'}>{isErr ? 'error' : 'warning'}</Text>;
};

export const getRulesColumns = () => {
    return [
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
            title: 'Severity',
            dataIndex: 'severity',
            width: 90,
            render: renderSeverity,
            filters: SeverityEnum
        },
        {
            title: 'RuleId',
            dataIndex: 'ruleId',
            width: 300,
            render: (value, record) => {
                const { url, fixable } = record;
                const btn = (
                    <Button href={url} type="link">
                        {value}
                    </Button>
                );
                if (fixable) {
                    return (
                        <>
                            {btn}
                            <span>🔧</span>
                        </>
                    );
                }
                return btn;
            }
        },
        {
            title: 'Description',
            dataIndex: 'description'
        }
    ];
};

const AllRuleIds = uniq(flatten(map(RankMessages, 'ruleId'))).filter(Boolean);

export const getRankMessages = severitys => {
    const messages = AllRuleIds.map(ruleId => {
        const sameList = filter(RankMessages, { ruleId });
        const { severity } = sameList[0];
        const {
            docs: { url, description },
            fixable
        } = EslintRulesMeta[ruleId];
        const { length: count } = sameList;
        const { length: filesCount } = ProblematicEslintResults.filter(v => {
            return map(v.messages, 'ruleId').includes(ruleId);
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
    }).filter(v => {
        return (severitys || map(SeverityEnum, 'value')).includes(v.severity);
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
                        <Button
                            type="text"
                            onClick={() => {
                                const text = [filePath, line, column].join(':');
                                handleCopyText(text, message);
                            }}
                        >
                            {codePositionText}
                        </Button>
                    </Tooltip>
                );
            }
        },
        {
            dataIndex: 'severity',
            width: 80,
            render: renderSeverity
        },
        {
            dataIndex: 'ruleId',
            width: 300,
            render: value => {
                const {
                    docs: { url }
                } = EslintRulesMeta[value];
                return (
                    <Link href={url} copyable>
                        {value}
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
    return list.filter(v => {
        return intersection(selectedRowKeys, map(v.messages, 'ruleId')).length;
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
            dataSource={infoList.filter(v => v.children)}
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
