"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2491],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={},l="Testing Connectors",c={unversionedId:"connector-development/testing-connectors/README",id:"connector-development/testing-connectors/README",title:"Testing Connectors",description:"Running Integration tests",source:"@site/../docs/connector-development/testing-connectors/README.md",sourceDirName:"connector-development/testing-connectors",slug:"/connector-development/testing-connectors/",permalink:"/airbyte/connector-development/testing-connectors/",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/connector-development/testing-connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Airbyte 101 for Connector Development",permalink:"/airbyte/connector-development/airbyte101"},next:{title:"Source Acceptance Tests Reference",permalink:"/airbyte/connector-development/testing-connectors/source-acceptance-tests-reference"}},u={},m=[{value:"Running Integration tests",id:"running-integration-tests",level:2},{value:"1. Local iteration",id:"1-local-iteration",level:3},{value:"2. Code Static Checkers",id:"2-code-static-checkers",level:3},{value:"Python Code",id:"python-code",level:4},{value:"3. Requesting GitHub PR Integration Test Runs",id:"3-requesting-github-pr-integration-test-runs",level:3},{value:"4. Requesting GitHub PR publishing Docker Images",id:"4-requesting-github-pr-publishing-docker-images",level:3},{value:"5. Automatically Run From <code>master</code>",id:"5-automatically-run-from-master",level:3}],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-connectors"},"Testing Connectors"),(0,i.kt)("h2",{id:"running-integration-tests"},"Running Integration tests"),(0,i.kt)("p",null,"The GitHub ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and branch builds will build the core Airbyte infrastructure ","(","scheduler, ui, etc",")"," as well as the images for all connectors. Integration tests ","(","tests that run a connector's image against an external resource",")"," can be run one of three ways."),(0,i.kt)("h3",{id:"1-local-iteration"},"1. Local iteration"),(0,i.kt)("p",null,"First, you can run the image locally. Connectors should have instructions in the connector's README on how to create or pull credentials necessary for the test. Also, during local development, there is usually a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," entrypoint for Java integrations or ",(0,i.kt)("inlineCode",{parentName:"p"},"main_dev.py")," for Python integrations that let you run your connector without containerization, which is fastest for iteration."),(0,i.kt)("h3",{id:"2-code-static-checkers"},"2. Code Static Checkers"),(0,i.kt)("h4",{id:"python-code"},"Python Code"),(0,i.kt)("p",null,"Using the following tools:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"flake8"),(0,i.kt)("li",{parentName:"ol"},"black"),(0,i.kt)("li",{parentName:"ol"},"isort"),(0,i.kt)("li",{parentName:"ol"},"mypy")),(0,i.kt)("p",null,'Airbyte CI/CD workflows use them during "test/publish" commands obligatorily.\nAll their settings are aggregated into the single file ',(0,i.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," into Airbyte project root.\nLocally all these tools can be launched by the following gradle command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ./gradlew --no-daemon  :airbyte-integrations:connectors:<connector_name>:airbytePythonFormat\n")),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./gradlew --no-daemon  :airbyte-integrations:connectors:source-s3:airbytePythonFormat\n./gradlew --no-daemon  :airbyte-integrations:connectors:source-salesforce:airbytePythonFormat\n")),(0,i.kt)("h3",{id:"3-requesting-github-pr-integration-test-runs"},"3. Requesting GitHub PR Integration Test Runs"),(0,i.kt)("p",null,'{% hint style="warning" %}\nThis option is not available to PRs from forks, so it is effectively limited to Airbyte employees.\n{% endhint %}'),(0,i.kt)("p",null,"If you don't want to handle secrets, you're making a relatively minor change, or you want to ensure the connector's integration test will run remotely, you should request builds on GitHub. You can request an integration test run by creating a comment with a slash command."),(0,i.kt)("p",null,"Here are some example commands:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=all")," - Runs integration tests for all connectors in a single GitHub workflow. Some of our integration tests interact with rate-limited resources, so please use this judiciously."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=connectors/source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid ref=master")," - Runs integration tests for a single connector on a different branch."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=source-sendgrid ref=d5c53102")," - Runs integration tests for a single connector on a specific commit.")),(0,i.kt)("p",null,"A command dispatcher GitHub workflow will launch on comment submission. This dispatcher will add an \ud83d\udc40 reaction to the comment when it starts processing. If there is an error dispatching your request, an error will be appended to your comment. If it launches the test run successfully, a \ud83d\ude80 reaction will appear on your comment."),(0,i.kt)("p",null,"Once the integration test workflow launches, it will append a link to the workflow at the end of the comment. A success or failure response will also be added upon workflow completion."),(0,i.kt)("p",null,'Integration tests can also be manually requested by clicking "',(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions?query=workflow%3Aintegration-test"},"Run workflow"),'" and specifying the connector and GitHub ref.'),(0,i.kt)("h3",{id:"4-requesting-github-pr-publishing-docker-images"},"4. Requesting GitHub PR publishing Docker Images"),(0,i.kt)("p",null,"In order for users to reference the new versions of a connector, it needs to be published and available in the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/airbyte/source-sendgrid/tags?page=1&ordering=last_updated"},"dockerhub")," with the latest tag updated."),(0,i.kt)("p",null,"As seen previously, GitHub workflow can be triggered by comment submission. Publishing docker images to the dockerhub repository can also be submitted likewise:"),(0,i.kt)("p",null,"Note that integration tests can be triggered with a slightly different syntax for arguments. This second set is required to distinguish between ",(0,i.kt)("inlineCode",{parentName:"p"},"connectors")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bases")," folders. Thus, it is also easier to switch between the ",(0,i.kt)("inlineCode",{parentName:"p"},"/test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/publish")," commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/test connector=connectors/source-sendgrid")," - Runs integration tests for a single connector on the latest PR commit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/publish connector=connectors/source-sendgrid")," - Publish the docker image if it doesn't exist for a single connector on the latest PR commit.")),(0,i.kt)("h3",{id:"5-automatically-run-from-master"},"5. Automatically Run From ",(0,i.kt)("inlineCode",{parentName:"h3"},"master")),(0,i.kt)("p",null,"Commits to ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," attempt to launch integration tests. Two workflows launch for each commit: one is a launcher for integration tests, the other is the core build ","(","the same as the default for PR and branch builds",")","."),(0,i.kt)("p",null,"Since some of our connectors use rate-limited external resources, we don't want to overload from multiple commits to master. If a certain threshold of ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," integration tests are running, the integration test launcher passes but does not launch any tests. This can manually be re-run if necessary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," build also runs every few hours automatically, and will launch the integration tests at that time."))}p.isMDXComponent=!0}}]);