"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[358],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35337:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p="WooCommerce",c={unversionedId:"integrations/sources/woocommerce",id:"integrations/sources/woocommerce",title:"WooCommerce",description:"Sync overview",source:"@site/../docs/integrations/sources/woocommerce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/woocommerce",permalink:"/airbyte/integrations/sources/woocommerce",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/woocommerce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"VictorOps",permalink:"/airbyte/integrations/sources/victorops"},next:{title:"Wordpress",permalink:"/airbyte/integrations/sources/wordpress"}},s={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"woocommerce"},"WooCommerce"),(0,o.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,o.kt)("p",null,"The WooCommerce source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,o.kt)("p",null,"This source can sync data for the ",(0,o.kt)("a",{parentName:"p",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/"},"WooCommerce API"),"."),(0,o.kt)("p",null,"This Source Connector is based on a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-customers"},"Customers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-orders"},"Orders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-coupons"},"Coupons"))),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to your store\u2019s WordPress admin interface, go to (WooCommerce > Settings > Advanced > REST API)"),(0,o.kt)("li",{parentName:"ol"},'Click on "Add Key" to generate an API Key'),(0,o.kt)("li",{parentName:"ol"},"Choose the level of access for this REST API key, which can be Read access, Write access or Read/Write access. Airbyte only needs read-level access.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource."))),(0,o.kt)("li",{parentName:"ol"},"The two keys, Consumer Key and Consumer Secret are what you'll use respectively as ",(0,o.kt)("inlineCode",{parentName:"li"},"api_key")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"api_secret")," for the integration."),(0,o.kt)("li",{parentName:"ol"},"You're ready to set up WooCommerce in Airbyte!")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-09"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5955"},"5955")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial Release. Source WooCommerce")))))}d.isMDXComponent=!0}}]);