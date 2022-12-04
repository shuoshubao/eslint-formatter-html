const { Button, Tag, Tooltip, message } = antd
const { get, last, map, remove, sum, isString, sortBy, flatten, intersection, groupBy } = _

const inflateData = str => {
  return JSON.parse(pako.inflateRaw(new Uint8Array(str.split(',')), { to: 'string' }))
}

const EslintResults = inflateData(window.EslintResults)
const EslintRulesMeta = inflateData(window.EslintRulesMeta)

// remove invalid ruleId
EslintResults.forEach(v => {
  remove(v.messages, v2 => !v2.ruleId)
})

const getMeta = (ruleId = '', key = '') => {
  const url = get(EslintRulesMeta[ruleId], key, '')
  // sonar
  if (!url && isString(ruleId) && ruleId.startsWith('sonar')) {
    const sonarRuleId = ruleId.split('/')[1]
    return `https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/${sonarRuleId}.md`
  }
  return url
}

const initEslintResults = () => {
  EslintResults.forEach(v => {
    v.close = false
    v.messages.forEach(v2 => {
      const { ruleId } = v2
      v2.url = getMeta(ruleId, 'docs.url')
    })
  })
}

initEslintResults()

export const EslintCwd = last((window.EslintCwd || '').split('/'))

export const isEmptyArray = arr => {
  return Array.isArray(arr) && arr.length === 0
}

export const NoProblematicEslintResults = EslintResults.filter(v => isEmptyArray(v.messages))

export const ProblematicEslintResults = EslintResults.filter(v => v.messages.length)

const formatTime = (date, format = 'YYYY-MM-DD') => {
  const dt = new Date(+date || +new Date(date))
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  const hour = dt.getHours()
  const minute = dt.getMinutes()
  const second = dt.getSeconds()

  const parse = {
    YYYY: year,
    MM: month,
    DD: day,
    HH: hour,
    mm: minute,
    ss: second
  }

  parse.yyyy = parse.YYYY
  parse.dd = parse.DD
  parse.hh = parse.HH

  // 补零
  Object.entries(parse).forEach(([k, v]) => {
    parse[k] = String(v).padStart(2, 0)
  })

  return Object.entries(parse).reduce((prev, [k, v]) => {
    return prev.replace(k, v)
  }, format)
}

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
  { value: 2, text: 'error' },
  { value: 1, text: 'warning' }
]

const renderSeverity = value => {
  const isErr = value === 2
  return <Tag color={isErr ? 'error' : 'warning'}>{isErr ? 'error' : 'warning'}</Tag>
}

const renderRuleId = (value, record, showFixable) => {
  const { url, fixable } = record
  const btn = (
    <Button href={url} type="link">
      {value}
    </Button>
  )
  if (showFixable && fixable) {
    return (
      <>
        {btn}
        <span>🔧</span>
      </>
    )
  }
  return btn
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
        return renderRuleId(value, record, true)
      }
    },
    {
      title: 'Description',
      dataIndex: 'description'
    }
  ]
}

const RankMessages = flatten(ProblematicEslintResults.map(v => v.messages))

export const getRankMessages = severitys => {
  const messages = [...new Set(RankMessages.map(v => v.ruleId))]
    .map(v => {
      const sameList = RankMessages.filter(v2 => v2.ruleId === v)
      const { severity } = sameList[0]
      const { url, description } = getMeta(v, 'docs')
      const fixable = getMeta(v, 'fixable')
      const { length: count } = sameList
      const { length: filesCount } = ProblematicEslintResults.filter(v2 => {
        return map(v2.messages, 'ruleId').includes(v)
      })
      return {
        ruleId: v,
        url,
        fixable,
        description,
        severity,
        count,
        filesCount
      }
    })
    .filter(v => {
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
      render: (value, record) => {
        return renderRuleId(value, record, false)
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
