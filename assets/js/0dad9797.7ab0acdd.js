"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[78100],{19257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Sample Data (Faker) Migration Guide",c={unversionedId:"integrations/sources/faker-migrations",id:"integrations/sources/faker-migrations",title:"Sample Data (Faker) Migration Guide",description:"Upgrading to 5.0.0",source:"@site/../docs/integrations/sources/faker-migrations.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/faker-migrations",permalink:"/integrations/sources/faker-migrations",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/faker-migrations.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Upgrading to 5.0.0",id:"upgrading-to-500",level:2},{value:"Upgrading to 4.0.0",id:"upgrading-to-400",level:2}],l={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sample-data-faker-migration-guide"},"Sample Data (Faker) Migration Guide"),(0,a.kt)("h2",{id:"upgrading-to-500"},"Upgrading to 5.0.0"),(0,a.kt)("p",null,"Some columns are narrowing from ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"integer"),". You may need to force normalization to rebuild your destination tables by manually dropping the SCD and final tables, refreshing the connection schema (skipping the reset), and running a sync. Alternatively, you can just run a reset."),(0,a.kt)("h2",{id:"upgrading-to-400"},"Upgrading to 4.0.0"),(0,a.kt)("p",null,"Nothing to do here - this was a test breaking change."))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);