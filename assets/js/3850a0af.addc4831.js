"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9608],{97494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={},i="Tyntec SMS",s={unversionedId:"integrations/sources/tyntec-sms",id:"integrations/sources/tyntec-sms",title:"Tyntec SMS",description:"Overview",source:"@site/../docs/integrations/sources/tyntec-sms.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/tyntec-sms",permalink:"/integrations/sources/tyntec-sms",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/tyntec-sms.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Twitter API",permalink:"/integrations/sources/twitter"},next:{title:"Typeform",permalink:"/integrations/sources/typeform"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Set up a Tyntec SMS connection",id:"step-1-set-up-a-tyntec-sms-connection",level:3},{value:"Step 2: Set up a Tyntec SMS connector in Airbyte",id:"step-2-set-up-a-tyntec-sms-connector-in-airbyte",level:3},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:4},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:4},{value:"Supported Sync Modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tyntec-sms"},"Tyntec SMS"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the ",(0,a.kt)("a",{parentName:"p",href:"https://api.tyntec.com/reference/sms/current.html#sms-api"},"Tyntec SMS")," source connector."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A Tyntec SMS API Key and SMS message request ID are required for this connector to work. The API key can be generated by setting up a free Tyntec account. Be sure to pass the generated API key and message request ID when establishing the connection."),(0,a.kt)("h3",{id:"step-1-set-up-a-tyntec-sms-connection"},"Step 1: Set up a Tyntec SMS connection"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new Tyntec account ",(0,a.kt)("a",{parentName:"li",href:"https://www.tyntec.com/create-account"},"here"),". "),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"API Settings")," and navigate to ",(0,a.kt)("strong",{parentName:"li"},"API Keys")," to access your API key.")),(0,a.kt)("h3",{id:"step-2-set-up-a-tyntec-sms-connector-in-airbyte"},"Step 2: Set up a Tyntec SMS connector in Airbyte"),(0,a.kt)("h4",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,a.kt)("strong",{parentName:"li"},"+new source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Tyntec SMS connector and select ",(0,a.kt)("strong",{parentName:"li"},"Tyntec SMS")," from the Source type dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"Tyntec API Key"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"SMS Message Request ID"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h4",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,a.kt)("li",{parentName:"ol"},"Set the name for your source."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"Tyntec API Key"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"SMS Message Request ID"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported Sync Modes"),(0,a.kt)("p",null,"The Tyntec SMS source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"Several output streams are available from this source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tyntec.com/reference/sms/current.html#sms-api-Read%20SMS%20status"},"SMS Message Status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tyntec.com/reference/sms/current.html#sms-api-List%20all%20contacts"},"SMS Contacts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tyntec.com/reference/sms/current.html#sms-api-List%20all%20phone%20numbers"},"SMS Phone Numbers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.tyntec.com/reference/sms/current.html#sms-api-List%20all%20phones"},"SMS Phone Registrations"))),(0,a.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue"),"."),(0,a.kt)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,a.kt)("p",null,"The Tyntec SMS connector should not run into limitations under normal usage. Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-11-02"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18883"},"18883")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Tyntec SMS")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);