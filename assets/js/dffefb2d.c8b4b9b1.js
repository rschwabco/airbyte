"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2744],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,b=p["".concat(c,".").concat(y)]||p[y]||h[y]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c="On Running a Sync",l={unversionedId:"troubleshooting/running-sync",id:"troubleshooting/running-sync",title:"On Running a Sync",description:"One of your sync jobs is failing",source:"@site/../docs/troubleshooting/running-sync.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/running-sync",permalink:"/airbyte/troubleshooting/running-sync",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/troubleshooting/running-sync.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Setting up a New Connection",permalink:"/airbyte/troubleshooting/new-connection"},next:{title:"On Upgrading",permalink:"/airbyte/troubleshooting/on-upgrading"}},u={},h=[{value:"One of your sync jobs is failing",id:"one-of-your-sync-jobs-is-failing",level:2},{value:"Your incremental connection is not working",id:"your-incremental-connection-is-not-working",level:2},{value:"Airbyte says successful sync, but some records are missing",id:"airbyte-says-successful-sync-but-some-records-are-missing",level:2}],p={toc:h};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"on-running-a-sync"},"On Running a Sync"),(0,a.kt)("h2",{id:"one-of-your-sync-jobs-is-failing"},"One of your sync jobs is failing"),(0,a.kt)("p",null,"Several things to check:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Airbyte updated to your latest version?")," You can see the latest version ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tags"},"here"),". If not, please upgrade to the latest one"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is the connector that is failing updated to the latest version?")," You can check the latest version available for the connectors ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-config/init/src/main/resources/seed"},"in the yamls here"),". If you don't have the latest connector version, make sure you first update to the latest Airbyte version, and then go to the Admin section in the web app and put the right version in the cell for the connector. Then try again.")),(0,a.kt)("p",null,"If the above workaround does not fix your problem, please report it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1462"},"here")," or in our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"."),(0,a.kt)("h2",{id:"your-incremental-connection-is-not-working"},"Your incremental connection is not working"),(0,a.kt)("p",null,"Our current version of incremental is ",(0,a.kt)("a",{parentName:"p",href:"/airbyte/understanding-airbyte/connections/incremental-append"},"append"),". It works from a cursor field. So you need to check which cursor field you're using and if it's well populated in every record in your table."),(0,a.kt)("p",null,"If this is true, then, there are still several things to check:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Airbyte updated to your latest version?")," You can see the latest version ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tags"},"here"),". If not, please upgrade to the latest one"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is the connector that is failing updated to the latest version?")," You can check the latest version available for the connectors ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-config/init/src/main/resources/seed"},"in the yamls here"),". If you don't have the latest connector version, make sure you first update to the latest Airbyte version, and then go to the Admin section in the web app and put the right version in the cell for the connector. Then try again.")),(0,a.kt)("p",null,"If the above workaround does not fix your problem, please report it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1462"},"here")," or in our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"."),(0,a.kt)("h2",{id:"airbyte-says-successful-sync-but-some-records-are-missing"},"Airbyte says successful sync, but some records are missing"),(0,a.kt)("p",null,"Several things to check:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is the name of the table you are looking at in the destination? Let's make sure you're not looking at a temporary table."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is the basic normalization toggle set to true at the connection settings?")," If it's false, you won't see columns but most probably a JSON file. So you need to switch it on true, and try again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Airbyte updated to your latest version?")," You can see the latest version ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tags"},"here"),". If not, please upgrade to the latest one"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is the connector that is failing updated to the latest version?")," You can check the latest version available for the connectors ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-config/init/src/main/resources/seed"},"in the yamls here"),". If you don't have the latest connector version, make sure you first update to the latest Airbyte version, and then go to the Admin section in the web app and put the right version in the cell for the connector. Then try again.")),(0,a.kt)("p",null,"If the above workaround does not fix your problem, please report it ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1462"},"here")," or in our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"."))}y.isMDXComponent=!0}}]);