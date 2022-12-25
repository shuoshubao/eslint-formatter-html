import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ConfigProvider,
  Typography,
  Progress,
  Card,
  Statistic,
  Table,
  Collapse,
  Button,
  Tag,
  Dropdown,
  Tooltip,
  Space,
  List,
  Empty,
  Modal,
  FloatButton,
  theme
} from 'antd'
import { CodeOutlined, DownOutlined, RightOutlined, VerticalAlignTopOutlined } from '@ant-design/icons'
import { first, last, map, find } from 'lodash'
import { isEmptyArray, formatTime } from '@nbfe/tools'
import {
  ThemeKey,
  EslintCwd,
  EslintCreateTime,
  renderPkgInfo,
  hasNoError,
  SortModeEnum,
  getEslintAnalysis,
  getRulesColumns,
  getResultsColumns,
  getRankMessages,
  FatalErrorEslintResults,
  NoProblematicEslintResults,
  ProblematicEslintResults,
  getEslintResults,
  SwitchDarkMode
} from './config'
import Icons from './icons'
import { name, version } from '../package.json'

const { Text, Title } = Typography

const { Panel } = Collapse

const { Moon, Sun } = Icons

const isDark = window.localStorage.getItem(ThemeKey) !== 'light'

const AllDataSourceRankMessages = getRankMessages()

const App = () => {
  const [darkMode, setDarkMode] = useState(isDark)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedRowKeys, setSelectedRowKeys] = useState(map(AllDataSourceRankMessages, 'ruleId'))

  const [dataSourceRankMessages, setDataSourceRankMessages] = useState(AllDataSourceRankMessages)

  const [sortMode, setSortMode] = useState('errors')

  const showEslintResults = getEslintResults({ sortMode, selectedRowKeys })

  const [openAll, setOpenAll] = useState(true)

  const [activeKeys, setActiveKeys] = useState(map(showEslintResults, 'filePath'))

  useEffect(() => {
    window.addEventListener('storage', event => {
      const { key, newValue } = event
      if (key === ThemeKey) {
        setDarkMode(newValue === 'dark')
        SwitchDarkMode(newValue === 'dark', false)
      }
    })
  }, [setDarkMode])

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys)
    setOpenAll(true)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const {
    ErrorAndWarningCount,
    FixableCount,
    ErrorCount,
    WarningCount,
    FilesCount,
    SuccessFileCount
  } = getEslintAnalysis()

  const onRankMessagesTableChange = (pagination, filters) => {
    const { severity } = filters
    const RankMessages = getRankMessages(severity)
    setDataSourceRankMessages(RankMessages)
    setSelectedRowKeys(map(RankMessages, 'ruleId'))
  }

  const { length: AllFilesCount } = showEslintResults

  return (
    <ConfigProvider
      componentSize="small"
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <div style={{ padding: 12 }}>
        {!isEmptyArray(FatalErrorEslintResults) && (
          <Card
            title={
              <>
                <Title level={3} type="danger">
                  FatalError
                </Title>
                <Tag color="error">{FatalErrorEslintResults.length}</Tag>
              </>
            }
          >
            <List
              rowKey="filePath"
              dataSource={FatalErrorEslintResults}
              renderItem={(item, index) => {
                const { filePath, messages } = item
                const message = first(messages).message.replaceAll(`${EslintCwd}/`, '')
                return (
                  <List.Item style={{ padding: 0, marginTop: index === 0 ? 0 : 10 }}>
                    <Card
                      title={
                        <Text type="danger" copyable>
                          {filePath}
                        </Text>
                      }
                      style={{ width: '100%' }}
                    >
                      <pre>{message}</pre>
                    </Card>
                  </List.Item>
                )
              }}
            />
          </Card>
        )}

        <Card
          title={
            <>
              <Title level={3}>ESLint Report</Title>
              <Button type="primary">{last(EslintCwd.split('/'))}</Button>
              <Button>{formatTime(EslintCreateTime, 'YYYY-MM-DD HH:mm:ss')}</Button>
            </>
          }
          extra={
            <>
              <Button
                onClick={() => {
                  setIsModalOpen(true)
                }}
                icon={<CodeOutlined />}
              />
              <Button
                onClick={() => {
                  setDarkMode(!darkMode)
                  SwitchDarkMode(!darkMode, true)
                }}
                icon={darkMode ? Moon : Sun}
              />
            </>
          }
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
                  return `${ErrorAndWarningCount}(${FixableCount}🔧)`
                }}
              />
              <Statistic title="Errors" value={ErrorCount} />
              <Statistic title="Warnings" value={WarningCount} />
              <Statistic
                title="Files"
                formatter={() => {
                  return (
                    <Space>
                      <span>{FilesCount}</span>
                      <Tag color="error">{FilesCount - SuccessFileCount}</Tag>
                      <Tag color="success">{SuccessFileCount}</Tag>
                    </Space>
                  )
                }}
              />
            </Space>
          )}
          {!isEmptyArray(dataSourceRankMessages) && (
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
          <FloatButton.BackTop icon={<VerticalAlignTopOutlined />}></FloatButton.BackTop>
        </Card>

        {!isEmptyArray(ProblematicEslintResults) && (
          <Card
            title={
              <>
                <Title level={3} type="danger">
                  Error
                </Title>
                <Title level={3} type="secondary">
                  &
                </Title>
                <Title level={3} type="warning">
                  Warning
                </Title>
                <Tag color="error">{ProblematicEslintResults.length}</Tag>
              </>
            }
            extra={
              <>
                <Dropdown
                  menu={{
                    items: SortModeEnum,
                    onClick: ({ key }) => {
                      setSortMode(key)
                    }
                  }}
                >
                  <Button style={{ width: 150 }}>
                    {['SortBy: ', find(SortModeEnum, { key: sortMode }).label].join('')}
                  </Button>
                </Dropdown>
                <Tooltip title="toggle open/fold all" placement="topRight">
                  <Button
                    disabled={!AllFilesCount}
                    icon={openAll ? <DownOutlined /> : <RightOutlined />}
                    onClick={() => {
                      setActiveKeys(openAll ? [] : map(showEslintResults, 'filePath'))
                      setOpenAll(!openAll)
                    }}
                    style={{ marginLeft: 10 }}
                  />
                </Tooltip>
              </>
            }
            bodyStyle={{ padding: 0 }}
          >
            {!!AllFilesCount && (
              <Collapse
                activeKey={activeKeys}
                onChange={keys => {
                  setActiveKeys(keys)
                }}
                bordered={false}
              >
                {showEslintResults.map(v => {
                  const { filePath, messages, errorCount, warningCount } = v
                  const extra = (
                    <>
                      <Tag color="error">{errorCount}</Tag>
                      <Tag color="warning">{warningCount}</Tag>
                    </>
                  )
                  const showMessages = messages.filter(v2 => {
                    return selectedRowKeys.includes(v2.ruleId)
                  })
                  return (
                    <Panel
                      header={
                        <Text copyable type={errorCount ? 'danger' : 'warning'}>
                          {filePath}
                        </Text>
                      }
                      extra={extra}
                      key={filePath}
                    >
                      <Table
                        rowKey={record => {
                          const { ruleId, line, column } = record
                          return [ruleId, line, column].join()
                        }}
                        columns={getResultsColumns(v)}
                        dataSource={showMessages}
                        showHeader={false}
                        pagination={false}
                      />
                    </Panel>
                  )
                })}
              </Collapse>
            )}
          </Card>
        )}

        {Boolean(SuccessFileCount) && (
          <Collapse defaultActiveKey={['a']} expandIconPosition="end">
            <Panel
              header={
                <>
                  <Title level={3} type="success">
                    No Bugs
                  </Title>
                  <Tag color="success">{SuccessFileCount}</Tag>
                </>
              }
              key="a"
            >
              <List
                dataSource={NoProblematicEslintResults}
                renderItem={item => {
                  const { filePath } = item
                  return (
                    <List.Item style={{ padding: '8px 12px' }}>
                      <Text copyable type="success">
                        {filePath}
                      </Text>
                    </List.Item>
                  )
                }}
              />
            </Panel>
          </Collapse>
        )}
      </div>
      <Modal
        title={[name, version].join('@')}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false)
        }}
        maskClosable
        width={800}
        style={{ top: 50 }}
        footer={null}
      >
        {renderPkgInfo()}
      </Modal>
    </ConfigProvider>
  )
}

SwitchDarkMode(isDark, false)

createRoot(document.querySelector('#app')).render(<App />)
