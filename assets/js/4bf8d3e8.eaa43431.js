"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7015],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={description:"We love contributions to Airbyte, big or small."},u="Contributing to Airbyte",l={unversionedId:"contributing-to-airbyte/README",id:"contributing-to-airbyte/README",title:"Contributing to Airbyte",description:"We love contributions to Airbyte, big or small.",source:"@site/../docs/contributing-to-airbyte/README.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/",permalink:"/airbyte/contributing-to-airbyte/",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/contributing-to-airbyte/README.md",tags:[],version:"current",frontMatter:{description:"We love contributions to Airbyte, big or small."},sidebar:"mySidebar",previous:{title:"UX Handbook",permalink:"/airbyte/connector-development/ux-handbook"},next:{title:"Code of Conduct",permalink:"/airbyte/contributing-to-airbyte/code-of-conduct"}},c={},p=[{value:"Code of conduct",id:"code-of-conduct",level:2},{value:"Airbyte specification",id:"airbyte-specification",level:2},{value:"First-time contributors, welcome!",id:"first-time-contributors-welcome",level:2},{value:"Areas for contributing",id:"areas-for-contributing",level:2},{value:"1. Open an issue, or find a similar one.",id:"1-open-an-issue-or-find-a-similar-one",level:4},{value:"2. Let&#39;s code",id:"2-lets-code",level:4},{value:"3. Open a pull request",id:"3-open-a-pull-request",level:3},{value:"4. Review process",id:"4-review-process",level:3},{value:"<strong>New connectors</strong>",id:"new-connectors",level:3},{value:"<strong>Documentation</strong>",id:"documentation",level:3},{value:"<strong>Community content</strong>",id:"community-content",level:3},{value:"Other ways you can contribute",id:"other-ways-you-can-contribute",level:2},{value:"<strong>Upvoting issues, feature and connector requests</strong>",id:"upvoting-issues-feature-and-connector-requests",level:3},{value:"<strong>Requesting new features</strong>",id:"requesting-new-features",level:3},{value:"<strong>Requesting new connectors</strong>",id:"requesting-new-connectors",level:3},{value:"<strong>Reporting bugs</strong>",id:"reporting-bugs",level:3},{value:"<strong>Reporting security issues</strong>",id:"reporting-security-issues",level:3},{value:"<strong>Airbyte CI workflows</strong>",id:"airbyte-ci-workflows",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-airbyte"},"Contributing to Airbyte"),(0,i.kt)("p",null,"Thank you for your interest in contributing! We love community contributions. Contribution guidelines are listed below. If you're unsure about how to start contributing or have any questions even after reading them, feel free to ask us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack")," in the ","#","dev or ","#","general channel."),(0,i.kt)("p",null,"However, for those who want a bit more guidance on the best way to contribute to Airbyte, read on. This document will cover what we're looking for. By addressing the points below, the chances that we can quickly merge or address your contributions will increase."),(0,i.kt)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,i.kt)("p",null,"Please follow our ",(0,i.kt)("a",{parentName:"p",href:"/airbyte/contributing-to-airbyte/code-of-conduct"},"Code of conduct")," in the context of any contributions made to Airbyte."),(0,i.kt)("h2",{id:"airbyte-specification"},"Airbyte specification"),(0,i.kt)("p",null,"Before you can start contributing, you need to understand ",(0,i.kt)("a",{parentName:"p",href:"/airbyte/understanding-airbyte/airbyte-specification"},"Airbyte's data protocol specification"),"."),(0,i.kt)("h2",{id:"first-time-contributors-welcome"},"First-time contributors, welcome!"),(0,i.kt)("p",null,"We appreciate first time contributors and we are happy to assist you in getting started. In case of questions, just reach out to us via ",(0,i.kt)("a",{parentName:"p",href:"mailto:hey@airbyte.io"},"email")," or ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"!"),(0,i.kt)("p",null,"Here is a list of easy ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/good%20first%20issue"},"good first issues")," to do."),(0,i.kt)("h2",{id:"areas-for-contributing"},"Areas for contributing"),(0,i.kt)("p",null,"We gladly welcome all improvements existing on the codebase. "),(0,i.kt)("h4",{id:"1-open-an-issue-or-find-a-similar-one"},"1. Open an issue, or find a similar one."),(0,i.kt)("p",null,"Before jumping into the code please first:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify if an existing ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues"},"GitHub issue")," matches your contribution project (please filter with the ",(0,i.kt)("em",{parentName:"li"},"area/connectors")," or ",(0,i.kt)("em",{parentName:"li"},"area/platform")," labels)."),(0,i.kt)("li",{parentName:"ol"},"If you don't find an existing issue, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"please create a new one")," to explain what you want to achieve."),(0,i.kt)("li",{parentName:"ol"},"Assign the issue to yourself and add a comment to tell that you want to work on this.")),(0,i.kt)("p",null,"This will enable our team to make sure your contribution does not overlap with existing works and will comply with the design orientation we are currently heading the product toward.\nIf you do not receive an update on the issue from our team, please ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"!"),(0,i.kt)("h4",{id:"2-lets-code"},"2. Let's code"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"GitHub repository"),"."),(0,i.kt)("li",{parentName:"ol"},"Open a branch for your work."),(0,i.kt)("li",{parentName:"ol"},"Code, and please write ",(0,i.kt)("strong",{parentName:"li"},"tests"),"."),(0,i.kt)("li",{parentName:"ol"},"Ensure all tests pass. For connectors, this includes acceptance tests as well. ")),(0,i.kt)("h3",{id:"3-open-a-pull-request"},"3. Open a pull request"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rebase master with your branch before submitting a pull request."),(0,i.kt)("li",{parentName:"ol"},"Open the pull request."),(0,i.kt)("li",{parentName:"ol"},"Wait for a review from a community maintainer or our team.")),(0,i.kt)("h3",{id:"4-review-process"},"4. Review process"),(0,i.kt)("p",null,"When we review, we look at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u200cDoes the PR solve the issue?"),(0,i.kt)("li",{parentName:"ul"},"Is the proposed solution reasonable?"),(0,i.kt)("li",{parentName:"ul"},"Is it tested? ","(","unit tests or integration tests",")"),(0,i.kt)("li",{parentName:"ul"},"Is it introducing security risks?\n\u200cOnce your PR passes, we will merge it \ud83c\udf89.")),(0,i.kt)("h3",{id:"new-connectors"},(0,i.kt)("strong",{parentName:"h3"},"New connectors")),(0,i.kt)("p",null,"It's easy to add your own connector to Airbyte! ",(0,i.kt)("strong",{parentName:"p"},"Since Airbyte connectors are encapsulated within Docker containers, you can use any language you like.")," Here are some links on how to add sources and destinations. We haven't built the documentation for all languages yet, so don't hesitate to reach out to us if you'd like help developing connectors in other languages."),(0,i.kt)("p",null,"For sources, simply head over to our ",(0,i.kt)("a",{parentName:"p",href:"../connector-development/cdk-python/"},"Python CDK"),"."),(0,i.kt)("p",null,'{% hint style="info" %}\nThe CDK currently does not support creating destinations, but it will very soon.\n{% endhint %}'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"../connector-development/"},"Building new connectors")," to get started."),(0,i.kt)("li",{parentName:"ul"},"Since we frequently build connectors in Python, on top of Singer or in Java, we've created generator libraries to get you started quickly: ",(0,i.kt)("a",{parentName:"li",href:"/airbyte/connector-development/tutorials/building-a-python-source"},"Build Python Source Connectors")," and ",(0,i.kt)("a",{parentName:"li",href:"/airbyte/connector-development/tutorials/building-a-java-destination"},"Build Java Destination Connectors")),(0,i.kt)("li",{parentName:"ul"},"Integration tests ","(","tests that run a connector's image against an external resource",")"," can be run one of three ways, as detailed ",(0,i.kt)("a",{parentName:"li",href:"/airbyte/connector-development/testing-connectors/source-acceptance-tests-reference"},"here"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note that, at no point in time, we will ask you to maintain your connector.")," The goal is that the Airbyte team and the community helps maintain the connector."),(0,i.kt)("h3",{id:"documentation"},(0,i.kt)("strong",{parentName:"h3"},"Documentation")),(0,i.kt)("p",null,"Our goal is to keep our docs comprehensive and updated. If you would like to help us in doing so, we are grateful for any kind of contribution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Report missing content"),(0,i.kt)("li",{parentName:"ul"},"Fix errors in existing docs"),(0,i.kt)("li",{parentName:"ul"},"Help us in adding to the docs")),(0,i.kt)("p",null,"The contributing guide for docs can be found ",(0,i.kt)("a",{parentName:"p",href:"/airbyte/contributing-to-airbyte/updating-documentation"},"here"),"."),(0,i.kt)("h3",{id:"community-content"},(0,i.kt)("strong",{parentName:"h3"},"Community content")),(0,i.kt)("p",null,"We welcome contributions as new tutorials / showcases / articles, or to any of the existing guides on our ",(0,i.kt)("a",{parentName:"p",href:"https://airbyte.io/tutorials"},"tutorials page"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix errors in existing tutorials"),(0,i.kt)("li",{parentName:"ul"},"Add new tutorials ","(","please reach out to us if you have ideas to avoid duplicate work",")"),(0,i.kt)("li",{parentName:"ul"},"Request tutorials")),(0,i.kt)("p",null,"We have a repo dedicated to community content. Everything is documented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/community-content/"},"there"),"."),(0,i.kt)("p",null,"Feel free to submit a pull request in this repo, if you have something to add even if it's not related to anything mentioned above."),(0,i.kt)("h2",{id:"other-ways-you-can-contribute"},"Other ways you can contribute"),(0,i.kt)("h3",{id:"upvoting-issues-feature-and-connector-requests"},(0,i.kt)("strong",{parentName:"h3"},"Upvoting issues, feature and connector requests")),(0,i.kt)("p",null,"You are welcome to add your own reactions to the existing issues. We will take them in consideration in our prioritization efforts, especially for connectors."),(0,i.kt)("p",null,"\u2764\ufe0f means that this task is CRITICAL to you.",(0,i.kt)("br",{parentName:"p"}),"\n","\ud83d\udc4d means it is important to you."),(0,i.kt)("h3",{id:"requesting-new-features"},(0,i.kt)("strong",{parentName:"h3"},"Requesting new features")),(0,i.kt)("p",null,"To request new features, please create an issue on this project."),(0,i.kt)("p",null,'If you would like to suggest a new feature, we ask that you please use our issue template. It contains a few essential questions that help us understand the problem you are looking to solve and how you think your recommendation will address it. We also tag incoming issues from this template with the "',(0,i.kt)("strong",{parentName:"p"},"community","_","new"),'" label. This lets our teams quickly see what has been raised and better address the community recommendations.'),(0,i.kt)("p",null,"To see what has already been proposed by the community, you can look ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/community"},"here"),"."),(0,i.kt)("p",null,"Watch out for duplicates! If you are creating a new issue, please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"existing open"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20"},"recently closed"),". Having a single voted for issue is far easier for us to prioritize"),(0,i.kt)("h3",{id:"requesting-new-connectors"},(0,i.kt)("strong",{parentName:"h3"},"Requesting new connectors")),(0,i.kt)("p",null,"This is very similar to requesting new features. The template will change a bit and all connector requests will be tagged with the \u201c",(0,i.kt)("strong",{parentName:"p"},"community"),"\u201d and \u201c",(0,i.kt)("strong",{parentName:"p"},"area/connectors"),"\u201d labels."),(0,i.kt)("p",null,"To see what has already been proposed by the community, you can look ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/area%2Fconnectors"},"here"),". Again, watch out for duplicates!"),(0,i.kt)("h3",{id:"reporting-bugs"},(0,i.kt)("strong",{parentName:"h3"},"Reporting bugs")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u200c"),"Bug reports help us make Airbyte better for everyone. We provide a preconfigured template for bugs to make it very clear what information we need."),(0,i.kt)("p",null,"\u200cPlease search within our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues?q=is%3Aissue+is%3Aopen+label%3Atype%2Fbug"},"already reported bugs")," before raising a new one to make sure you're not raising a duplicate."),(0,i.kt)("h3",{id:"reporting-security-issues"},(0,i.kt)("strong",{parentName:"h3"},"Reporting security issues")),(0,i.kt)("p",null,"Please do not create a public GitHub issue. If you've found a security issue, please email us directly at ",(0,i.kt)("a",{parentName:"p",href:"mailto:security@airbyte.io"},"security@airbyte.io")," instead of raising an issue."),(0,i.kt)("h2",{id:"airbyte-ci-workflows"},(0,i.kt)("strong",{parentName:"h2"},"Airbyte CI workflows")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/airbyte/contributing-to-airbyte/sonar-qube-workflow"},"Testing by SonarQube"))))}m.isMDXComponent=!0}}]);