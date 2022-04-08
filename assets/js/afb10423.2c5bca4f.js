"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8814],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||i;return r?a.createElement(f,l(l({ref:e},c),{},{components:r})):a.createElement(f,l({ref:e},c))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38378:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={},p="Intercom",m={unversionedId:"integrations/sources/intercom",id:"integrations/sources/intercom",title:"Intercom",description:"Overview",source:"@site/../docs/integrations/sources/intercom.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/intercom",permalink:"/airbyte/integrations/sources/intercom",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/intercom.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Instagram",permalink:"/airbyte/integrations/sources/instagram"},next:{title:"Iterable",permalink:"/airbyte/integrations/sources/iterable"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Setup guide",id:"setup-guide",level:3},{value:"Getting started (Airbyte OSS)",id:"getting-started-airbyte-oss",level:2},{value:"Setup guide",id:"setup-guide-1",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function u(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intercom"},"Intercom"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Intercom source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This Source Connector is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Several output streams are available from this source:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-admins"},"Admins")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-companies"},"Companies")," ","(","Incremental",")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-attached-segments-1"},"Company Segments")," ","(","Incremental",")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-conversations"},"Conversations")," ","(","Incremental",")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#get-a-single-conversation"},"Conversation Parts")," ","(","Incremental",")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#data-attributes"},"Data Attributes")," ","(","Full table",")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-customer-data-attributes"},"Customer Attributes")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-company-data-attributes"},"Company Attributes")," ","(","Full table",")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-contacts"},"Contacts")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-segments"},"Segments")," ","(","Incremental",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-tags-for-an-app"},"Tags")," ","(","Full table",")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.intercom.com/intercom-api-reference/reference#list-teams"},"Teams")," ","(","Full table",")")),(0,i.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The connector is restricted by normal Intercom ",(0,i.kt)("a",{parentName:"p",href:"https://developers.intercom.com/intercom-api-reference/reference#rate-limiting"},"requests limitation"),"."),(0,i.kt)("p",null,"The Intercom connector should not run into Intercom API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started (Airbyte Cloud)"),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"How to configure the connector in the Airbyte UI:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click Authenticate your account to sign in with Intercom and authorize your account."),(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"start date")," field."),(0,i.kt)("li",{parentName:"ol"},"You should be ready to sync data.")),(0,i.kt)("h2",{id:"getting-started-airbyte-oss"},"Getting started (Airbyte OSS)"),(0,i.kt)("h3",{id:"setup-guide-1"},"Setup guide"),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://developers.intercom.com/building-apps/docs/authentication-types#section-how-to-get-your-access-token"},"How to get your Access Token"),"."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11206"},"11206")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added conversation_id field to conversation_part records")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11176"},"11176")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Correct ",(0,i.kt)("inlineCode",{parentName:"td"},"check_connection")," URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11208"},"11208")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improve 'conversations' incremental sync speed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9513"},"9513")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added handling of scroll param when it expired")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Updated fields and descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-13"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8685"},"8685")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove time.sleep for rate limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8637"},"8637")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix 'conversations' order and sorting. Correction of the companies stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8395"},"8395")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix backoff of 'companies' stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7060"},"7060")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6879"},"6879")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected pagination for contacts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6082"},"6082")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected android","_","last","_","seen","_","at field data type in schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6087"},"6087")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected updated","_","at field data type in schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5908"},"5908")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected timestamp and arrays in schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5531"},"5531")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected pagination")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5123"},"5123")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corrected rate limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4676"},"4676")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Release Intercom CDK Connector")))))}u.isMDXComponent=!0}}]);