"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4785],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83311:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={},o="Square",s={unversionedId:"integrations/sources/square",id:"integrations/sources/square",title:"Square",description:"Overview",source:"@site/../docs/integrations/sources/square.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/square",permalink:"/airbyte/integrations/sources/square",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/integrations/sources/square.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Spree Commerce",permalink:"/airbyte/integrations/sources/spree-commerce"},next:{title:"Strava",permalink:"/airbyte/integrations/sources/strava"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Data type mapping",id:"data-type-mapping",level:4},{value:"Features",id:"features",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"square"},"Square"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Square Source can sync data from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.squareup.com/reference/square"},"Square API")),(0,l.kt)("p",null,"Useful links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square"},"Square API Explorer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square"},"Square API Docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/apps"},"Square Developer Dashboard"))),(0,l.kt)("h4",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/catalog-api/search-catalog-objects"},"Items")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/catalog-api/search-catalog-objects"},"Categories")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/catalog-api/search-catalog-objects"},"Discounts")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/catalog-api/search-catalog-objects"},"Taxes")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/catalog-api/search-catalog-objects"},"ModifierLists")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square_2021-06-16/payments-api/list-payments"},"Payments")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square_2021-06-16/refunds-api/list-payment-refunds"},"Refunds")," ","(","Incremental",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/locations-api/list-locations"},"Locations")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square_2021-06-16/team-api/search-team-members"},"Team Members")," ","(","old V1 Employees API",")"," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/labor-api/list-team-member-wages"},"List Team Member Wages"),"  ","(","old V1 Roles API",")"," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/explorer/square/customers-api/list-customers"},"Customers")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square/labor-api/search-shifts"},"Shifts")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.squareup.com/reference/square/orders-api/search-orders"},"Orders")," ")),(0,l.kt)("h4",{id:"data-type-mapping"},"Data type mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"api","_","key - The Square API key token "),(0,l.kt)("li",{parentName:"ul"},"is","_","sandbox - the switch between sandbox ","(","true",")"," and production ","(","false",")"," environments ")),(0,l.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,l.kt)("p",null,"To get the API key for your square application follow ",(0,l.kt)("a",{parentName:"p",href:"https://developer.squareup.com/docs/get-started"},"Geting started")," and ",(0,l.kt)("a",{parentName:"p",href:"https://developer.squareup.com/docs/build-basics/access-tokens"},"Access token")," guides"),(0,l.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"No defined API rate limits were found in Square documentation however considering ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/28033966/whats-the-rate-limit-on-the-square-connect-api/28053836#28053836"},"this information")," it has 10 QPS limits. The connector doesn't handle rate limits exceptions, but no errors were raised during testing."),(0,l.kt)("p",null,"Some Square API endpoints has different page size limitation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Items - 1000"),(0,l.kt)("li",{parentName:"ul"},"Categories - 1000"),(0,l.kt)("li",{parentName:"ul"},"Discounts - 1000"),(0,l.kt)("li",{parentName:"ul"},"Taxes - 1000"),(0,l.kt)("li",{parentName:"ul"},"ModifierLists - 1000"),(0,l.kt)("li",{parentName:"ul"},"Payments - 100"),(0,l.kt)("li",{parentName:"ul"},"Refunds - 100"),(0,l.kt)("li",{parentName:"ul"},"TeamMembers - 100"),(0,l.kt)("li",{parentName:"ul"},"ListTeamMemberWages - 200 "),(0,l.kt)("li",{parentName:"ul"},"Shifts - 200"),(0,l.kt)("li",{parentName:"ul"},"Orders - 500 ")),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6842"},"6842")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added oauth support")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"8425")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-07-09"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4645"},"4645")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update ","_","send","_","request method due to Airbyte CDK changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-06-30"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4439"},"4439")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Initial release supporting the Square API")))))}c.isMDXComponent=!0}}]);