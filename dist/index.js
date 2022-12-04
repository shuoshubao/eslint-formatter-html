(()=>{var{Button:z,Tag:ve,Tooltip:Me,message:Re}=antd,{get:Ee,last:Se,map:k,remove:Te,sum:b,isString:be,sortBy:I,flatten:$,intersection:ke,groupBy:Ie}=_,q=e=>JSON.parse(pako.inflateRaw(new Uint8Array(e.split(",")),{to:"string"})),w=q(window.EslintResults),De=q(window.EslintRulesMeta);w.forEach(e=>{Te(e.messages,t=>!t.ruleId)});var D=(e="",t="")=>{let n=Ee(De[e],t,"");return!n&&be(e)&&e.startsWith("sonar")?`https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/${e.split("/")[1]}.md`:n},Pe=()=>{w.forEach(e=>{e.close=!1,e.messages.forEach(t=>{let{ruleId:n}=t;t.url=D(n,"docs.url")})})};Pe();var P=Se((window.EslintCwd||"").split("/")),A=e=>Array.isArray(e)&&e.length===0,L=w.filter(e=>A(e.messages)),p=w.filter(e=>e.messages.length),Ae=(e,t="YYYY-MM-DD")=>{let n=new Date(+e||+new Date(e)),o=n.getFullYear(),a=n.getMonth()+1,s=n.getDate(),c=n.getHours(),i=n.getMinutes(),d=n.getSeconds(),r={YYYY:o,MM:a,DD:s,HH:c,mm:i,ss:d};return r.yyyy=r.YYYY,r.dd=r.DD,r.hh=r.HH,Object.entries(r).forEach(([m,u])=>{r[m]=String(u).padStart(2,0)}),Object.entries(r).reduce((m,[u,x])=>m.replace(u,x),t)},G=Ae(window.EslintCreateTime||Date.now(),"YYYY-MM-DD HH:mm:ss"),J=()=>{let e=b(p.map(s=>s.errorCount)),t=b(p.map(s=>s.warningCount)),n=b(p.map(s=>s.fixableErrorCount+s.fixableWarningCount)),{length:o}=w,{length:a}=L;return{ErrorAndWarningCount:e+t,ErrorCount:e,WarningCount:t,FixableCount:n,FilesCount:o,SuccessFileCount:a}},U=[{value:2,text:"error"},{value:1,text:"warning"}],Q=e=>{let t=e===2;return React.createElement(ve,{color:t?"error":"warning"},t?"error":"warning")},X=(e,t)=>{let{url:n,fixable:o}=t;return React.createElement(z,{href:n,type:"link"},e)},ee=()=>[{title:"Count",dataIndex:"count",width:56},{title:"Files",dataIndex:"filesCount",width:55},{title:"Severity",dataIndex:"severity",width:90,render:Q,filters:U},{title:"RuleId",dataIndex:"ruleId",width:300,render:X},{title:"Description",dataIndex:"description"}],K=$(p.map(e=>e.messages)),B=e=>{let t=[...new Set(K.map(o=>o.ruleId))].map(o=>{let a=K.filter(u=>u.ruleId===o),{severity:s}=a[0],{url:c,description:i}=D(o,"docs"),d=D(o,"fixable"),{length:r}=a,{length:m}=p.filter(u=>k(u.messages,"ruleId").includes(o));return{ruleId:o,url:c,fixable:d,description:i,severity:s,count:r,filesCount:m}}).filter(o=>(e||k(U,"value")).includes(o.severity)),n=Ie(t,"severity");return $([I(n[2],["count"]).reverse(),I(n[1],["count"]).reverse()])},Le=(e="")=>{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.style.position="fixed",t.style.right="1000px",t.select(),document.execCommand("copy"),document.body.removeChild(t)},Be=e=>{Le(e),Re.success(React.createElement(React.Fragment,null,React.createElement("span",{key:"Copied"},"Copied"),React.createElement("div",{key:"text"},e)))},te=e=>{let{filePath:t}=e;return[{width:70,render:(n,o)=>{let{line:a,column:s}=o,c=[a,s].join(":");return React.createElement(Me,{title:"Copy"},React.createElement(z,{type:"text",onClick:()=>{let i=[t,a,s].join(":");Be(i)}},c))}},{dataIndex:"severity",width:80,render:Q},{dataIndex:"ruleId",width:300,render:X},{dataIndex:"message",render:n=>React.createElement("pre",null,n)}]},H=[{key:"errors",label:"Errors Count"},{key:"filePath",label:"File Path"}],ne=({sortMode:e,selectedRowKeys:t})=>{let n=[];return e==="errors"?n.push(...I(p,["errorCount","warningCount"]).reverse()):n.push(...p),n.filter(o=>ke(t,k(o.messages,"ruleId")).length)},j={dark:"",light:""},Y=async e=>{let t=e?"dark":"light";document.body.dataset.theme=t;let a=["https://unpkg.com/antd@4.24.4/dist",e?"antd.dark.min.css":"antd.min.css"].join("/"),s=j[t];s||(s=await fetch(a).then(i=>i.text()),j[t]=s);let c=document.querySelector('style[data-role="theme"]');if(c)c.innerHTML=s;else{let i=document.createElement("style");i.dataset.role="theme",i.innerHTML=s,document.head.insertBefore(i,document.head.firstChild)}window.localStorage.setItem("eslint-formatter-html-theme",t)};var oe={DownOutlined:React.createElement("span",{role:"img",className:"anticon"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor"},React.createElement("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}))),RightOutlined:React.createElement("span",{role:"img",className:"anticon"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor"},React.createElement("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}))),Moon:React.createElement("span",{role:"img","aria-label":"right",className:"anticon"},React.createElement("svg",{stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z",fill:"currentColor"}))),Sun:React.createElement("span",{role:"img","aria-label":"right",className:"anticon"},React.createElement("svg",{stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",fill:"currentColor"}),React.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z",fill:"currentColor"}))),VerticalAlignTopOutlined:React.createElement("span",{role:"img","aria-label":"vertical-align-top",className:"anticon"},React.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"vertical-align-top",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},React.createElement("path",{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"})))};var{useState:C,useEffect:He}=React,{ConfigProvider:Ye,Typography:Fe,Progress:Ne,Card:se,Statistic:R,Table:re,Collapse:Z,Button:E,Tag:g,Dropdown:Ze,Tooltip:Oe,Space:le,Row:Ve,Col:We,Empty:Ke,BackTop:je}=antd,{map:S,find:ze,filter:ae}=_,{Text:F,Title:N}=Fe,{Panel:ie}=Z,{Moon:$e,Sun:qe,DownOutlined:_e,RightOutlined:Ge,VerticalAlignTopOutlined:Je}=oe,de=window.localStorage.getItem("eslint-formatter-html-theme")!=="light",ce=B(),Ue=()=>{let[e,t]=C(de),[n,o]=C(S(ce,"ruleId")),[a,s]=C(ce),[c,i]=C("errors"),d=ne({sortMode:c,selectedRowKeys:n}),[r,m]=C(!0),[u,x]=C(S(d,"filePath"));He(()=>{},[]);let ue={selectedRowKeys:n,onChange:l=>{o(l)}},{ErrorAndWarningCount:pe,FixableCount:ge,ErrorCount:me,WarningCount:he,FilesCount:O,SuccessFileCount:v}=J(),Ce=(l,h)=>{let{severity:T}=h,y=B(T);s(y),o(S(y,"ruleId"))},M=A(p),{length:f}=d,{length:V}=ae(d,l=>l.errorCount),{length:W}=ae(d,l=>l.warningCount);return React.createElement("div",{style:{padding:12}},React.createElement(se,{title:React.createElement(React.Fragment,null,React.createElement(N,{level:2},"ESLint Report"),!!P&&React.createElement(E,{type:"primary"},P),React.createElement(F,{italic:!0},"Generated on ",G)),extra:React.createElement(E,{onClick:()=>{t(!e),Y(!e)},icon:e?$e:qe})},M&&React.createElement("div",{style:{padding:10}},React.createElement(Ne,{type:"circle",percent:100})),!M&&React.createElement(le,{size:50,style:{padding:"12px 12px 0 12px"}},React.createElement(R,{title:"Totals",formatter:()=>`${pe}(${ge}\u{1F527})`}),React.createElement(R,{title:"Errors",value:me}),React.createElement(R,{title:"Warnings",value:he}),React.createElement(R,{title:"Files",formatter:()=>React.createElement(le,null,React.createElement("span",null,O),React.createElement(g,{color:"error"},O-v),React.createElement(g,{color:"success"},v))})),!M&&React.createElement(re,{rowKey:"ruleId",rowSelection:ue,columns:ee(),dataSource:a,onChange:Ce,pagination:!1,scroll:{y:41*10}}),React.createElement(je,null,React.createElement("div",{className:"back-top-content"},Je))),React.createElement(se,{title:React.createElement(React.Fragment,null,React.createElement(N,{level:2},"Problematic"),f?React.createElement(g,null,f):null,V?React.createElement(g,{color:"error"},V):null,W?React.createElement(g,{color:"warning"},W):null),extra:React.createElement(React.Fragment,null,React.createElement(Ze,{menu:{items:H,onClick:({key:l})=>{i(l)}}},React.createElement(E,{style:{width:150}},["SortBy: ",ze(H,{key:c}).label].join(""))),React.createElement(Oe,{title:"toggle open/fold all",placement:"topRight"},React.createElement(E,{disabled:!f,icon:r?_e:Ge,onClick:()=>{x(r?[]:S(d,"filePath")),m(!r)},style:{position:"relative",top:-1,marginLeft:10}}))),style:{display:M?"none":"block"}},!f&&React.createElement(Ke,null),!!f&&React.createElement(Z,{activeKey:u,onChange:l=>{x(l)},bordered:!1},d.map(l=>{let{filePath:h,messages:T,errorCount:y,warningCount:fe}=l,ye=React.createElement(React.Fragment,null,React.createElement(g,{color:"error"},y),React.createElement(g,{color:"warning"},fe)),we=T.filter(xe=>n.includes(xe.ruleId));return React.createElement(ie,{header:React.createElement(F,{copyable:!0,type:y?"danger":"warning"},h),extra:ye,key:h},React.createElement(re,{rowKey:"filePath",columns:te(l),dataSource:we,showHeader:!1,pagination:!1}))}))),Boolean(v)&&React.createElement(Z,{defaultActiveKey:["a"],expandIconPosition:"end",bordered:!0},React.createElement(ie,{header:React.createElement(React.Fragment,null,React.createElement(N,{level:2},"Non Problematic"),React.createElement(g,{color:"success"},v)),key:"a"},React.createElement(Ve,{className:"success-file-path"},L.map(l=>{let{filePath:h}=l;return React.createElement(We,{xl:{span:12},span:24,key:h},React.createElement("div",null,React.createElement(F,{copyable:!0,type:"success"},h)))})))))};(async()=>(await Y(de),ReactDOM.render(React.createElement(Ye,{componentSize:"small"},React.createElement(Ue,null)),document.querySelector("#app"))))();})();