"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8481],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),u=n,f=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8363:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p="Flexport",m={unversionedId:"integrations/sources/flexport",id:"integrations/sources/flexport",title:"Flexport",description:"Sync overview",source:"@site/../docs/integrations/sources/flexport.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/flexport",permalink:"/airbyte/integrations/sources/flexport",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/flexport.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Files",permalink:"/airbyte/integrations/sources/file"},next:{title:"Freshdesk",permalink:"/airbyte/integrations/sources/freshdesk"}},d={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Changelog",id:"changelog",level:2}],s={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flexport"},"Flexport"),(0,l.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,l.kt)("p",null,"Flexport source uses ",(0,l.kt)("a",{parentName:"p",href:"https://developers.flexport.com/s/api"},"Flexport API")," to extract data from Flexport."),(0,l.kt)("h3",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"This Source is capable of syncing the following data as streams:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apidocs.flexport.com/reference/company"},"Companies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apidocs.flexport.com/reference/location"},"Locations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apidocs.flexport.com/reference/product"},"Products")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apidocs.flexport.com/reference/invoices"},"Invoices")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apidocs.flexport.com/reference/shipment"},"Shipments"))),(0,l.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"float number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:"left"},"whole number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"date")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"datetime")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"FORMAT YYYY-MM-DDThh:mm:ss")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True/False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Overwrite Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduplication Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"authentication"},"Authentication"),(0,l.kt)("p",null,"Authentication uses a pre-created API token which can be ",(0,l.kt)("a",{parentName:"p",href:"https://apidocs.flexport.com/reference/authentication"},"created in the UI"),"."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8777"},"8777")),(0,l.kt)("td",{parentName:"tr",align:"left"},"New Source: Flexport")))))}u.isMDXComponent=!0}}]);