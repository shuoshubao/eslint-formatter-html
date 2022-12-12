import React from 'react'
import { Modal, List, Typography, Button, Tooltip, Space, Divider, message } from 'antd'
import { map, filter, remove, sum, isString, sortBy, flatten, intersection, groupBy, uniq } from 'lodash-es'
import { inflateRaw } from 'pako/dist/pako_inflate.js'
import { isEmptyArray, formatTime } from './util'
import Icons from './icons'

const { Text, Link } = Typography

const { UserOutlined, GithubOutlined, MailOutlined, BugOutlined, EnvironmentOutlined } = Icons

const inflateData = str => {
  return JSON.parse(inflateRaw(new Uint8Array(str.split(',')), { to: 'string' }))
}

window.EslintResults = inflateData(window.EslintResults)
window.EslintRulesMeta = inflateData(window.EslintRulesMeta)

export const EslintCwd = window.EslintCwd || ''

export const FatalErrorEslintResults = EslintResults.filter(v => v.fatalErrorCount)

export const ProblematicEslintResults = EslintResults.filter(v => {
  return v.messages.length && v.fatalErrorCount === 0
})

export const NoProblematicEslintResults = EslintResults.filter(v => isEmptyArray(v.messages))

const RankMessages = flatten(ProblematicEslintResults.map(v => v.messages))

export const hasNoError = !RankMessages.some(v => v.severity === 2) && isEmptyArray(FatalErrorEslintResults)

export const EslintCreateTime = formatTime(window.EslintCreateTime || Date.now(), 'YYYY-MM-DD HH:mm:ss')

export const getEslintAnalysis = () => {
  const ErrorCount = sum(
    ProblematicEslintResults.map(v => {
      return v.errorCount
    })
  )

  const WarningCount = sum(
    ProblematicEslintResults.map(v => {
      return v.warningCount
    })
  )

  const FixableCount = sum(
    ProblematicEslintResults.map(v => {
      return v.fixableErrorCount + v.fixableWarningCount
    })
  )

  const { length: FilesCount } = EslintResults

  const { length: SuccessFileCount } = NoProblematicEslintResults

  return {
    ErrorAndWarningCount: ErrorCount + WarningCount,
    ErrorCount,
    WarningCount,
    FixableCount,
    FilesCount,
    SuccessFileCount
  }
}

export const SeverityEnum = [
  { value: 2, text: <Text type="danger">error</Text> },
  { value: 1, text: <Text type="warning">warning</Text> }
]

const renderSeverity = value => {
  const isErr = value === 2
  return <Text type={isErr ? 'danger' : 'warning'}>{isErr ? 'error' : 'warning'}</Text>
}

export const getRulesColumns = () => {
  return [
    {
      title: 'Count',
      dataIndex: 'count',
      width: 56
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
        const { url, fixable } = record
        const btn = (
          <Button href={url} type="link">
            {value}
          </Button>
        )
        if (fixable) {
          return (
            <>
              {btn}
              <span>🔧</span>
            </>
          )
        }
        return btn
      }
    },
    {
      title: 'Description',
      dataIndex: 'description'
    }
  ]
}

const AllRuleIds = uniq(flatten(map(RankMessages, 'ruleId'))).filter(Boolean)

export const getRankMessages = severitys => {
  const messages = AllRuleIds.map(ruleId => {
    const sameList = filter(RankMessages, { ruleId })
    const { severity } = sameList[0]
    const {
      docs: { url, description },
      fixable
    } = EslintRulesMeta[ruleId]
    const { length: count } = sameList
    const { length: filesCount } = ProblematicEslintResults.filter(v => {
      return map(v.messages, 'ruleId').includes(ruleId)
    })
    return {
      ruleId,
      url,
      fixable,
      description,
      severity,
      count,
      filesCount
    }
  }).filter(v => {
    return (severitys || map(SeverityEnum, 'value')).includes(v.severity)
  })
  const temp = groupBy(messages, 'severity')
  return flatten([sortBy(temp['2'], ['count']).reverse(), sortBy(temp['1'], ['count']).reverse()])
}

const copyText = (text = '') => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.style.position = 'fixed'
  textarea.style.right = '1000px'
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

export const handleCopyText = text => {
  copyText(text)
  message.success(
    <>
      <span key="Copied">Copied</span>
      <div key="text">{text}</div>
    </>
  )
}

export const getResultsColumns = row => {
  const { filePath } = row
  return [
    {
      width: 70,
      render: (value, record) => {
        const { line, column } = record
        const codePositionText = [line, column].join(':')
        return (
          <Tooltip title="Copy">
            <Button
              type="text"
              onClick={() => {
                const text = [filePath, line, column].join(':')
                handleCopyText(text)
              }}
            >
              {codePositionText}
            </Button>
          </Tooltip>
        )
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
        } = EslintRulesMeta[value]
        return (
          <Link href={url} copyable>
            {value}
          </Link>
        )
      }
    },
    {
      dataIndex: 'message',
      render: value => {
        return <pre>{value}</pre>
      }
    }
  ]
}

export const SortModeEnum = [
  { key: 'errors', label: 'Errors Count' },
  { key: 'filePath', label: 'File Path' }
]

export const getEslintResults = ({ sortMode, selectedRowKeys }) => {
  const list = []
  if (sortMode === 'errors') {
    list.push(...sortBy(ProblematicEslintResults, ['errorCount', 'warningCount']).reverse())
  } else {
    list.push(...ProblematicEslintResults)
  }
  return list.filter(v => {
    return intersection(selectedRowKeys, map(v.messages, 'ruleId')).length
  })
}

const AntdCssText = {
  dark: '',
  light: ''
}

export const SwitchDarkMode = async darkMode => {
  const darkKey = darkMode ? 'dark' : 'light'
  document.body.dataset.theme = darkKey
  const prefix = 'https://unpkg.com/antd@4.24.4/dist'
  const filename = darkMode ? 'antd.dark.min.css' : 'antd.min.css'
  const url = [prefix, filename].join('/')
  let cssText = AntdCssText[darkKey]
  if (!cssText) {
    cssText = await fetch(url).then(res => res.text())
    AntdCssText[darkKey] = cssText
  }
  let styleRef = document.querySelector('style[data-role="theme"]')
  if (styleRef) {
    styleRef.innerHTML = cssText
  } else {
    const styleRef = document.createElement('style')
    styleRef.dataset.role = 'theme'
    styleRef.innerHTML = cssText
    document.head.insertBefore(styleRef, document.head.firstChild)
  }
  window.localStorage.setItem('eslint-formatter-html-theme', darkKey)
}

export const showPkgInfo = () => {
  const { name, version, homepage, author, bugs } = window.EslintPkg
  const infoList = [
    {
      icon: GithubOutlined,
      href: homepage,
      children: homepage
    },
    {
      icon: UserOutlined,
      href: `https://github.com/${author?.name}`,
      children: author?.name
    },
    {
      icon: MailOutlined,
      href: `mailto:${author?.email}`,
      children: author?.email
    },
    {
      icon: BugOutlined,
      href: bugs?.url,
      children: bugs?.url
    },
    {
      type: 'text',
      icon: EnvironmentOutlined,
      children: EslintCwd
    }
  ]
  Modal.info({
    icon: null,
    width: 800,
    style: { top: 50 },
    maskClosable: true,
    content: (
      <List
        header={[name, version].join('@')}
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
        dataSource={infoList}
        renderItem={item => {
          const { href, children } = item
          if (!href) {
            item.onClick = () => {
              handleCopyText(children)
            }
          }
          return (
            <List.Item>
              <Button {...item} style={{ border: 'none' }} />
            </List.Item>
          )
        }}
      />
    )
  })
}
