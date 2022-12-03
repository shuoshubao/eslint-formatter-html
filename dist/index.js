(() => {
  // lib/config.js
  var { Button, Tag, Tooltip, message } = antd;
  var { get, map, remove, sum, isString, sortBy, flatten, intersection, groupBy } = _;
  var inflateData = (str) => {
    return JSON.parse(pako.inflateRaw(new Uint8Array(str.split(",")), { to: "string" }));
  };
  var EslintResults = inflateData(window.EslintResults);
  var EslintRulesMeta = inflateData(window.EslintRulesMeta);
  EslintResults.forEach((v) => {
    remove(v.messages, (v2) => !v2.ruleId);
  });
  var getMeta = (ruleId = "", key = "") => {
    const url = get(EslintRulesMeta[ruleId], key, "");
    if (!url && isString(ruleId) && ruleId.startsWith("sonar")) {
      const sonarRuleId = ruleId.split("/")[1];
      return `https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/${sonarRuleId}.md`;
    }
    return url;
  };
  var initEslintResults = () => {
    EslintResults.forEach((v) => {
      v.close = false;
      v.messages.forEach((v2) => {
        const { ruleId } = v2;
        v2.url = getMeta(ruleId, "docs.url");
      });
    });
  };
  initEslintResults();
  var isEmptyArray = (arr) => {
    return Array.isArray(arr) && arr.length === 0;
  };
  var NoProblematicEslintResults = EslintResults.filter((v) => isEmptyArray(v.messages));
  var ProblematicEslintResults = EslintResults.filter((v) => v.messages.length);
  var formatTime = (date, format = "YYYY-MM-DD") => {
    const dt = new Date(+date || +new Date(date));
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const day = dt.getDate();
    const hour = dt.getHours();
    const minute = dt.getMinutes();
    const second = dt.getSeconds();
    const parse = {
      YYYY: year,
      MM: month,
      DD: day,
      HH: hour,
      mm: minute,
      ss: second
    };
    parse.yyyy = parse.YYYY;
    parse.dd = parse.DD;
    parse.hh = parse.HH;
    Object.entries(parse).forEach(([k, v]) => {
      parse[k] = String(v).padStart(2, 0);
    });
    return Object.entries(parse).reduce((prev, [k, v]) => {
      return prev.replace(k, v);
    }, format);
  };
  var EslintCreateTime = formatTime(window.EslintCreateTime || Date.now(), "YYYY-MM-DD HH:mm:ss");
  var getEslintAnalysis = () => {
    const ErrorCount = sum(
      ProblematicEslintResults.map((v) => {
        return v.errorCount;
      })
    );
    const WarningCount = sum(
      ProblematicEslintResults.map((v) => {
        return v.warningCount;
      })
    );
    const FixableCount = sum(
      ProblematicEslintResults.map((v) => {
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
  var SeverityEnum = [
    { value: 2, text: "error" },
    { value: 1, text: "warning" }
  ];
  var renderSeverity = (value) => {
    const isErr = value === 2;
    return /* @__PURE__ */ React.createElement(Tag, { color: isErr ? "error" : "warning" }, isErr ? "error" : "warning");
  };
  var renderRuleId = (value, record) => {
    const { url, fixable } = record;
    return /* @__PURE__ */ React.createElement(Button, { href: url, type: "link" }, value);
  };
  var getRulesColumns = () => {
    return [
      {
        title: "Count",
        dataIndex: "count",
        width: 56
      },
      {
        title: "Files",
        dataIndex: "filesCount",
        width: 55
      },
      {
        title: "Severity",
        dataIndex: "severity",
        width: 90,
        render: renderSeverity,
        filters: SeverityEnum
      },
      {
        title: "RuleId",
        dataIndex: "ruleId",
        width: 300,
        render: renderRuleId
      },
      {
        title: "Description",
        dataIndex: "description"
      }
    ];
  };
  var RankMessages = flatten(ProblematicEslintResults.map((v) => v.messages));
  var getRankMessages = (severitys) => {
    const messages = [...new Set(RankMessages.map((v) => v.ruleId))].map((v) => {
      const sameList = RankMessages.filter((v2) => v2.ruleId === v);
      const { severity } = sameList[0];
      const { url, description } = getMeta(v, "docs");
      const fixable = getMeta(v, "fixable");
      const { length: count } = sameList;
      const { length: filesCount } = ProblematicEslintResults.filter((v2) => {
        return map(v2.messages, "ruleId").includes(v);
      });
      return {
        ruleId: v,
        url,
        fixable,
        description,
        severity,
        count,
        filesCount
      };
    }).filter((v) => {
      return (severitys || map(SeverityEnum, "value")).includes(v.severity);
    });
    const temp = groupBy(messages, "severity");
    return flatten([sortBy(temp["2"], ["count"]).reverse(), sortBy(temp["1"], ["count"]).reverse()]);
  };
  var copyText = (text = "") => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.style.position = "fixed";
    textarea.style.right = "1000px";
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };
  var handleCopyText = (text) => {
    copyText(text);
    message.success(
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { key: "Copied" }, "Copied"), /* @__PURE__ */ React.createElement("div", { key: "text" }, text))
    );
  };
  var getResultsColumns = (row) => {
    const { filePath } = row;
    return [
      {
        width: 70,
        render: (value, record) => {
          const { line, column } = record;
          const codePositionText = [line, column].join(":");
          return /* @__PURE__ */ React.createElement(Tooltip, { title: "Copy" }, /* @__PURE__ */ React.createElement(
            Button,
            {
              type: "text",
              onClick: () => {
                const text = [filePath, line, column].join(":");
                handleCopyText(text);
              }
            },
            codePositionText
          ));
        }
      },
      {
        dataIndex: "severity",
        width: 80,
        render: renderSeverity
      },
      {
        dataIndex: "ruleId",
        width: 300,
        render: renderRuleId
      },
      {
        dataIndex: "message",
        render: (value) => {
          return /* @__PURE__ */ React.createElement("pre", null, value);
        }
      }
    ];
  };
  var SortModeEnum = [
    { key: "errors", label: "Errors Count" },
    { key: "filePath", label: "File Path" }
  ];
  var getEslintResults = ({ sortMode, selectedRowKeys }) => {
    const list = [];
    if (sortMode === "errors") {
      list.push(...sortBy(ProblematicEslintResults, ["errorCount", "warningCount"]).reverse());
    } else {
      list.push(...ProblematicEslintResults);
    }
    return list.filter((v) => {
      return intersection(selectedRowKeys, map(v.messages, "ruleId")).length;
    });
  };
  var AntdCssText = {
    dark: "",
    light: ""
  };
  var SwitchDarkMode = async (darkMode) => {
    const darkKey = darkMode ? "dark" : "light";
    const prefix = "https://unpkg.com/antd@4.24.4/dist";
    const filename = darkMode ? "antd.dark.min.css" : "antd.min.css";
    const url = [prefix, filename].join("/");
    let cssText = AntdCssText[darkKey];
    if (!cssText) {
      cssText = await fetch(url).then((res) => res.text());
      AntdCssText[darkKey] = cssText;
    }
    let styleRef = document.querySelector('style[data-role="theme"]');
    if (styleRef) {
      styleRef.innerHTML = cssText;
    } else {
      const styleRef2 = document.createElement("style");
      styleRef2.dataset.role = "theme";
      styleRef2.innerHTML = cssText;
      document.head.insertBefore(styleRef2, document.head.firstChild);
    }
    document.body.dataset.theme = darkKey;
    window.localStorage.setItem("eslint-formatter-html-theme", darkKey);
  };

  // lib/icons.js
  var icons_default = {
    DownOutlined: /* @__PURE__ */ React.createElement("span", { role: "img", ariaLabel: "down", className: "anticon" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        viewBox: "64 64 896 896",
        focusable: "false",
        dataIcon: "down",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        ariaHidden: "true"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" })
    )),
    RightOutlined: /* @__PURE__ */ React.createElement("span", { role: "img", ariaLabel: "right", className: "anticon" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        viewBox: "64 64 896 896",
        focusable: "false",
        dataIcon: "right",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        ariaHidden: "true"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" })
    )),
    Moon: /* @__PURE__ */ React.createElement("span", { role: "img", "aria-label": "right", className: "anticon" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z",
          fill: "currentColor"
        }
      )
    )),
    Sun: /* @__PURE__ */ React.createElement("span", { role: "img", "aria-label": "right", className: "anticon" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg"
      },
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",
          fill: "currentColor"
        }
      )
    )),
    VerticalAlignTopOutlined: /* @__PURE__ */ React.createElement("span", { role: "img", "aria-label": "vertical-align-top", className: "anticon" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        viewBox: "64 64 896 896",
        focusable: "false",
        "data-icon": "vertical-align-top",
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" })
    ))
  };

  // lib/index.js
  var { useState, useEffect } = React;
  var {
    ConfigProvider,
    Typography,
    Progress,
    Card,
    Statistic,
    Table,
    Collapse,
    Button: Button2,
    Tag: Tag2,
    Dropdown,
    Tooltip: Tooltip2,
    Space,
    Row,
    Col,
    Empty,
    BackTop
  } = antd;
  var { map: map2, find, filter } = _;
  var { Text, Title } = Typography;
  var { Panel } = Collapse;
  var { Moon, Sun, DownOutlined, RightOutlined, VerticalAlignTopOutlined } = icons_default;
  var isDark = window.localStorage.getItem("eslint-formatter-html-theme") !== "light";
  var AllDataSourceRankMessages = getRankMessages();
  var App = () => {
    const [darkMode, setDarkMode] = useState(isDark);
    const [selectedRowKeys, setSelectedRowKeys] = useState(map2(AllDataSourceRankMessages, "ruleId"));
    const [dataSourceRankMessages, setDataSourceRankMessages] = useState(AllDataSourceRankMessages);
    const [sortMode, setSortMode] = useState("errors");
    const showEslintResults = getEslintResults({ sortMode, selectedRowKeys });
    const [openAll, setOpenAll] = useState(true);
    const [activeKeys, setActiveKeys] = useState(map2(showEslintResults, "filePath"));
    useEffect(() => {
    }, []);
    const onSelectChange = (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange
    };
    const {
      ErrorAndWarningCount,
      FixableCount,
      ErrorCount,
      WarningCount,
      FilesCount,
      SuccessFileCount
    } = getEslintAnalysis();
    const onRankMessagesTableChange = (pagination, filters) => {
      const { severity } = filters;
      const RankMessages2 = getRankMessages(severity);
      setDataSourceRankMessages(RankMessages2);
      setSelectedRowKeys(map2(RankMessages2, "ruleId"));
    };
    const hasNoError = isEmptyArray(ProblematicEslintResults);
    const { length: AllFilesCount } = showEslintResults;
    const { length: ErrorFilesCount } = filter(showEslintResults, (v) => v.errorCount);
    const { length: WarningFilesCount } = filter(showEslintResults, (v) => v.warningCount);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: 12 } }, /* @__PURE__ */ React.createElement(
      Card,
      {
        title: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { level: 2, key: "title" }, "ESLint Report"), /* @__PURE__ */ React.createElement(Text, { italic: true, key: "text" }, "Generated on ", EslintCreateTime)),
        extra: /* @__PURE__ */ React.createElement(
          Button2,
          {
            onClick: () => {
              setDarkMode(!darkMode);
              SwitchDarkMode(!darkMode);
            },
            icon: darkMode ? Moon : Sun
          }
        )
      },
      hasNoError && /* @__PURE__ */ React.createElement("div", { style: { padding: 10 } }, /* @__PURE__ */ React.createElement(Progress, { type: "circle", percent: 100 })),
      !hasNoError && /* @__PURE__ */ React.createElement(Space, { size: 50, style: { padding: "12px 12px 0 12px" } }, /* @__PURE__ */ React.createElement(
        Statistic,
        {
          title: "Totals",
          formatter: () => {
            return `${ErrorAndWarningCount}(${FixableCount}\u{1F527})`;
          }
        }
      ), /* @__PURE__ */ React.createElement(Statistic, { title: "Errors", value: ErrorCount }), /* @__PURE__ */ React.createElement(Statistic, { title: "Warnings", value: WarningCount }), /* @__PURE__ */ React.createElement(
        Statistic,
        {
          title: "Files",
          formatter: () => {
            return /* @__PURE__ */ React.createElement(Space, null, /* @__PURE__ */ React.createElement("span", null, FilesCount), /* @__PURE__ */ React.createElement(Tag2, { color: "error" }, FilesCount - SuccessFileCount), /* @__PURE__ */ React.createElement(Tag2, { color: "success" }, SuccessFileCount));
          }
        }
      )),
      !hasNoError && /* @__PURE__ */ React.createElement(
        Table,
        {
          rowKey: "ruleId",
          rowSelection,
          columns: getRulesColumns(),
          dataSource: dataSourceRankMessages,
          onChange: onRankMessagesTableChange,
          pagination: false,
          scroll: {
            y: 41 * 10
          }
        }
      ),
      /* @__PURE__ */ React.createElement(BackTop, null, /* @__PURE__ */ React.createElement("div", { className: "back-top-content" }, VerticalAlignTopOutlined))
    ), /* @__PURE__ */ React.createElement(
      Card,
      {
        title: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { level: 2, key: "title" }, "Problematic"), AllFilesCount ? /* @__PURE__ */ React.createElement(Tag2, { key: "all" }, AllFilesCount) : null, ErrorFilesCount ? /* @__PURE__ */ React.createElement(Tag2, { color: "error", key: "error" }, ErrorFilesCount) : null, WarningFilesCount ? /* @__PURE__ */ React.createElement(Tag2, { color: "warning", key: "warning" }, WarningFilesCount) : null),
        extra: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          Dropdown,
          {
            menu: {
              items: SortModeEnum,
              onClick: ({ key }) => {
                setSortMode(key);
              }
            },
            key: "Dropdown"
          },
          /* @__PURE__ */ React.createElement(Button2, { style: { width: 150 } }, ["SortBy: ", find(SortModeEnum, { key: sortMode }).label].join(""))
        ), /* @__PURE__ */ React.createElement(Tooltip2, { title: "toggle open/fold all", placement: "topRight", key: "Tooltip" }, /* @__PURE__ */ React.createElement(
          Button2,
          {
            disabled: !AllFilesCount,
            icon: openAll ? DownOutlined : RightOutlined,
            onClick: () => {
              setActiveKeys(openAll ? [] : map2(showEslintResults, "filePath"));
              setOpenAll(!openAll);
            },
            style: { position: "relative", top: -1, marginLeft: 10 }
          }
        ))),
        style: { display: hasNoError ? "none" : "block" }
      },
      !AllFilesCount && /* @__PURE__ */ React.createElement(Empty, null),
      !!AllFilesCount && /* @__PURE__ */ React.createElement(
        Collapse,
        {
          activeKey: activeKeys,
          onChange: (keys) => {
            setActiveKeys(keys);
          },
          bordered: false
        },
        showEslintResults.map((v) => {
          const { filePath, messages, errorCount, warningCount } = v;
          const extra = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tag2, { color: "error", key: "error" }, errorCount), /* @__PURE__ */ React.createElement(Tag2, { color: "warning", key: "warning" }, warningCount));
          const showMessages = messages.filter((v2) => {
            return selectedRowKeys.includes(v2.ruleId);
          });
          return /* @__PURE__ */ React.createElement(
            Panel,
            {
              header: /* @__PURE__ */ React.createElement(Text, { copyable: true, type: errorCount ? "danger" : "warning" }, filePath),
              extra,
              key: filePath
            },
            /* @__PURE__ */ React.createElement(
              Table,
              {
                rowKey: "filePath",
                columns: getResultsColumns(v),
                dataSource: showMessages,
                showHeader: false,
                pagination: false
              }
            )
          );
        })
      )
    ), Boolean(SuccessFileCount) && /* @__PURE__ */ React.createElement(Collapse, { defaultActiveKey: ["a"], expandIconPosition: "end", bordered: true }, /* @__PURE__ */ React.createElement(
      Panel,
      {
        header: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { level: 2 }, "Non Problematic"), /* @__PURE__ */ React.createElement(Tag2, { color: "success" }, SuccessFileCount)),
        key: "a"
      },
      /* @__PURE__ */ React.createElement(Row, { className: "success-file-path" }, NoProblematicEslintResults.map((v) => {
        const { filePath } = v;
        return /* @__PURE__ */ React.createElement(Col, { xl: { span: 12 }, span: 24, key: filePath }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { copyable: true, type: "success" }, filePath)));
      }))
    )));
  };
  (async () => {
    await SwitchDarkMode(isDark);
    ReactDOM.render(
      /* @__PURE__ */ React.createElement(ConfigProvider, { componentSize: "small" }, /* @__PURE__ */ React.createElement(App, null)),
      document.querySelector("#app")
    );
  })();
})();
