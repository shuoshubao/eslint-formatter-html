(()=>{var{Button:q,Tag:me,Tooltip:Ce,message:fe}=antd,{get:ye,map:R,remove:ve,sum:T,isString:we,sortBy:k,flatten:z,intersection:xe,groupBy:Me}=_,Z=e=>JSON.parse(pako.inflateRaw(new Uint8Array(e.split(",")),{to:"string"})),C=Z(window.EslintResults),Se=Z(window.EslintRulesMeta);C.forEach(e=>{ve(e.messages,t=>!t.ruleId)});var b=(e="",t="")=>{let n=ye(Se[e],t,"");return!n&&we(e)&&e.startsWith("sonar")?`https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/${e.split("/")[1]}.md`:n},Ee=()=>{C.forEach(e=>{e.close=!1,e.messages.forEach(t=>{let{ruleId:n}=t;t.url=b(n,"docs.url")})})};Ee();var O=e=>Array.isArray(e)&&e.length===0,p=C.filter(e=>e.messages.length),Te=(e,t="YYYY-MM-DD")=>{let n=new Date(+e||+new Date(e)),s=n.getFullYear(),a=n.getMonth()+1,o=n.getDate(),c=n.getHours(),l=n.getMinutes(),i=n.getSeconds(),r={YYYY:s,MM:a,DD:o,HH:c,mm:l,ss:i};return r.yyyy=r.YYYY,r.dd=r.DD,r.hh=r.HH,Object.entries(r).forEach(([g,u])=>{r[g]=String(u).padStart(2,0)}),Object.entries(r).reduce((g,[u,y])=>g.replace(u,y),t)},F=Te(window.EslintCreateTime||Date.now(),"YYYY-MM-DD HH:mm:ss"),K=()=>{let e=T(p.map(o=>o.errorCount)),t=T(p.map(o=>o.warningCount)),n=T(p.map(o=>o.fixableErrorCount+o.fixableWarningCount)),{length:s}=C,{length:a}=C.filter(o=>o.messages.length===0);return{ErrorAndWarningCount:e+t,ErrorCount:e,WarningCount:t,FixableCount:n,FilesCount:s,SuccessFileCount:a}},j=[{value:2,text:"error"},{value:1,text:"warning"}],W=e=>{let t=e===2;return React.createElement(me,{color:t?"error":"warning"},t?"error":"warning")},$=(e,t)=>{let{url:n,fixable:s}=t;return React.createElement(React.Fragment,null,React.createElement(q,{href:n,type:"link"},e))},N=()=>[{title:"count",dataIndex:"count",width:55},{title:"files",dataIndex:"filesCount",width:55},{title:"Severity",dataIndex:"severity",width:90,render:W,filters:j},{title:"RuleId",dataIndex:"ruleId",width:300,render:$},{title:"Description",dataIndex:"description"}],A=z(p.map(e=>e.messages)),H=e=>{let t=[...new Set(A.map(s=>s.ruleId))].map(s=>{let a=A.filter(u=>u.ruleId===s),{severity:o}=a[0],{url:c,description:l}=b(s,"docs"),i=b(s,"fixable"),{length:r}=a,{length:g}=p.filter(u=>R(u.messages,"ruleId").includes(s));return{ruleId:s,url:c,fixable:i,description:l,severity:o,count:r,filesCount:g}}).filter(s=>(e||R(j,"value")).includes(s.severity)),n=Me(t,"severity");return z([k(n[2],["count"]).reverse(),k(n[1],["count"]).reverse()])},Re=(e="")=>{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.style.position="fixed",t.style.right="1000px",t.select(),document.execCommand("copy"),document.body.removeChild(t)},I=e=>{Re(e),fe.success(React.createElement(React.Fragment,null,React.createElement("span",null,"copied"),React.createElement("div",null,e)))},G=e=>{let{filePath:t}=e;return[{width:70,render:(n,s)=>{let{line:a,column:o}=s,c=[a,o].join(":");return React.createElement(Ce,{title:"copy"},React.createElement(q,{type:"text",onClick:()=>{let l=[t,a,o].join(":");I(l)}},c))}},{dataIndex:"severity",width:80,render:W},{dataIndex:"ruleId",width:300,render:$},{dataIndex:"message",render:n=>React.createElement("pre",null,n)}]},D=[{key:"errors",label:"Errors Count"},{key:"filePath",label:"File Path"}],J=({sortMode:e,selectedRowKeys:t})=>{let n=[];return e==="errors"?n.push(...k(p,["errorCount","warningCount"]).reverse()):n.push(...p),n.filter(s=>xe(t,R(s.messages,"ruleId")).length)},B={dark:"",light:""},P=async e=>{let t=e?"dark":"light",a=["https://unpkg.com/antd@4.24.4/dist",e?"antd.dark.min.css":"antd.min.css"].join("/"),o=B[t];o||(o=await fetch(a).then(l=>l.text()),B[t]=o);let c=document.querySelector('style[data-role="theme"]');if(c)c.innerHTML=o;else{let l=document.createElement("style");l.dataset.role="theme",l.innerHTML=o,document.head.insertBefore(l,document.head.firstChild)}window.localStorage.setItem("eslint-formatter-html-theme",t)},U={CopyOutlined:React.createElement("span",{role:"img","aria-label":"copy",class:"anticon anticon-copy"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"copy",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},React.createElement("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}))),MinusSquareOutlined:React.createElement("span",{role:"img","aria-label":"minus-square",class:"anticon anticon-minus-square"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"minus-square",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},React.createElement("path",{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),React.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}))),PlusSquareOutlined:React.createElement("span",{role:"img","aria-label":"plus-square",class:"anticon anticon-plus-square"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"plus-square",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},React.createElement("path",{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}),React.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}))),Moon:React.createElement("span",{role:"img","aria-label":"right",class:"anticon"},React.createElement("svg",{stroke:"currentColor",fill:"none","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z",fill:"currentColor"}))),Sun:React.createElement("span",{role:"img","aria-label":"right",class:"anticon"},React.createElement("svg",{stroke:"currentColor",fill:"none","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",fill:"currentColor"}),React.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",fill:"currentColor"})))};var{useState:h,useEffect:ke}=React,{ConfigProvider:be,Typography:He,Progress:Ie,Card:Q,Statistic:x,Table:X,Collapse:oe,Button:L,Dropdown:De,Tag:f,Space:ee,Tooltip:te,Empty:Pe}=antd,{map:M,find:Le}=_,{Text:Ye,Title:ne}=He,{Panel:Ve}=oe,{CopyOutlined:Ae,MinusSquareOutlined:Be,PlusSquareOutlined:qe,Moon:ze,Sun:Ze}=U,re=window.localStorage.getItem("eslint-formatter-html-theme")!=="light",se=H(),Oe=()=>{let[e,t]=h(re),[n,s]=h(M(se,"ruleId")),[a,o]=h(se),[c,l]=h("errors"),i=J({sortMode:c,selectedRowKeys:n}),[r,g]=h(!0),[u,y]=h(M(i,"filePath"));ke(()=>{},[]);let ae={selectedRowKeys:n,onChange:d=>{s(d)}},{ErrorAndWarningCount:le,FixableCount:ie,ErrorCount:ce,WarningCount:ue,FilesCount:Y,SuccessFileCount:V}=K(),de=(d,m)=>{let{severity:S}=m,w=H(S);o(w),s(M(w,"ruleId"))},v=O(p);return React.createElement("div",{style:{padding:12}},React.createElement(Q,{title:React.createElement(React.Fragment,null,React.createElement(ne,{level:2},"Eslint Statistics"),React.createElement(Ye,{italic:!0},"Generated on ",F)),extra:React.createElement(L,{onClick:()=>{t(!e),P(!e)},icon:e?ze:Ze})},v&&React.createElement("div",{style:{padding:10}},React.createElement(Ie,{type:"circle",percent:100})),React.createElement(ee,{size:50,style:{display:v?"none":"inline-flex"}},React.createElement(x,{title:"Totals",formatter:()=>`${le}(${ie}\u{1F527})`}),React.createElement(x,{title:"Errors",value:ce}),React.createElement(x,{title:"Warnings",value:ue}),React.createElement(x,{title:"Files",formatter:()=>React.createElement(React.Fragment,null,React.createElement(ee,null,React.createElement("span",null,Y),React.createElement(f,{color:"error"},Y-V),React.createElement(f,{color:"success"},V)))})),React.createElement(X,{rowKey:"ruleId",rowSelection:ae,columns:N(),dataSource:a,onChange:de,pagination:!1,scroll:{y:41*10},style:{marginTop:10,display:v?"none":"block"}})),React.createElement(Q,{title:React.createElement(React.Fragment,null,React.createElement(ne,{level:2},"Eslint Report"),i.length?React.createElement(f,{color:"error"},i.length):null),extra:React.createElement(React.Fragment,null,React.createElement(De,{menu:{items:D,onClick:({key:d})=>{l(d)}}},React.createElement(L,{style:{width:150}},["SortBy: ",Le(D,{key:c}).label].join(""))),React.createElement(te,{title:"toggle open/fold all",placement:"topRight"},React.createElement(L,{disabled:!i.length,icon:r?Be:qe,onClick:()=>{y(r?[]:M(i,"filePath")),g(!r)},style:{position:"relative",top:-1,marginLeft:10}}))),style:{marginTop:10,display:v?"none":"block"}},!i.length&&React.createElement(Pe,null),!!i.length&&React.createElement(oe,{activeKey:u,onChange:d=>{y(d)}},i.map(d=>{let{filePath:m,messages:S,errorCount:w,warningCount:pe}=d,ge=React.createElement(React.Fragment,null,React.createElement(f,{color:"error"},w),React.createElement(f,{color:"warning"},pe)),he=S.filter(E=>n.includes(E.ruleId));return React.createElement(Ve,{header:React.createElement(React.Fragment,null,React.createElement("span",null,m),React.createElement("span",{onClick:E=>(I(m),E.stopPropagation(),!1)},React.createElement(te,{title:"copy file path"},Ae))),extra:ge,key:m},React.createElement(X,{rowKey:"filePath",columns:G(d),dataSource:he,showHeader:!1,pagination:!1}))}))))};(async()=>(await P(re),ReactDOM.render(React.createElement(be,{componentSize:"small"},React.createElement(Oe,null)),document.querySelector("#app"))))();})();
