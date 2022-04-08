"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6069],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45984:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},p="Exchange Rates API",s={unversionedId:"integrations/sources/exchangeratesapi",id:"integrations/sources/exchangeratesapi",title:"Exchange Rates API",description:"Overview",source:"@site/../docs/integrations/sources/exchangeratesapi.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/exchangeratesapi",permalink:"/airbyte/integrations/sources/exchangeratesapi",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/exchangeratesapi.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"End-to-End Testing Source",permalink:"/airbyte/integrations/sources/e2e-test"},next:{title:"Facebook Marketing",permalink:"/airbyte/integrations/sources/facebook-marketing"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Data type mapping",id:"data-type-mapping",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exchange-rates-api"},"Exchange Rates API"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The exchange rates integration is a toy integration to demonstrate how Airbyte works with a very simple source."),(0,i.kt)("p",null,"It pulls all its data from ",(0,i.kt)("a",{parentName:"p",href:"https://exchangeratesapi.io"},"https://exchangeratesapi.io")),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"It contains one stream: ",(0,i.kt)("inlineCode",{parentName:"p"},"exchange_rates")),(0,i.kt)("p",null,"Each record in the stream contains many fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The date of the record"),(0,i.kt)("li",{parentName:"ul"},"One field for every supported ",(0,i.kt)("a",{parentName:"li",href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"},"currency")," which contain the value of that currency on that date.")),(0,i.kt)("h4",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,"Currencies are ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," and the date is a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Access Key")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"In order to get an ",(0,i.kt)("inlineCode",{parentName:"p"},"API Access Key")," please go to ",(0,i.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/signup/free"},"this")," page and enter needed info. After registration and login you will see your ",(0,i.kt)("inlineCode",{parentName:"p"},"API Access Key"),", also you may find it ",(0,i.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/dashboard"},"here"),"."),(0,i.kt)("p",null,"If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"free")," subscription plan ","(","you may check it ",(0,i.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/plan"},"here"),")"," this means that you will have 2 limitations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"1000 API calls per month."),(0,i.kt)("li",{parentName:"ol"},"You won't be able to specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"base")," parameter, meaning that you will be dealing only with default base value which is EUR.")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-12"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7936"},"7936")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ignore_weekends boolean option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-05-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3677"},"3677")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adding clearer error message when a currency isn't supported. access_key field in spec.json was marked as sensitive")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-05-26"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3566"},"3566")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Move from ",(0,i.kt)("inlineCode",{parentName:"td"},"api.ratesapi.io/")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"api.exchangeratesapi.io/"),".   Add required field ",(0,i.kt)("inlineCode",{parentName:"td"},"access_key")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"config.json"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-04-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2942"},"2942")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Implement Exchange API using the CDK")))))}m.isMDXComponent=!0}}]);