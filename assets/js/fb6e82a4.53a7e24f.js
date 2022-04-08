"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7871],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=u(r),d=o,b=y["".concat(c,".").concat(d)]||y[d]||p[d]||i;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},95293:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={},c="Developing on Kubernetes",u={unversionedId:"contributing-to-airbyte/developing-on-kubernetes",id:"contributing-to-airbyte/developing-on-kubernetes",title:"Developing on Kubernetes",description:"Make sure to read our docs for developing locally first.",source:"@site/../docs/contributing-to-airbyte/developing-on-kubernetes.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/developing-on-kubernetes",permalink:"/airbyte/contributing-to-airbyte/developing-on-kubernetes",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/contributing-to-airbyte/developing-on-kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Developing on docker",permalink:"/airbyte/contributing-to-airbyte/developing-on-docker"},next:{title:"Monorepo Python Development",permalink:"/airbyte/contributing-to-airbyte/monorepo-python-development"}},s={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Iteration Cycle (Locally)",id:"iteration-cycle-locally",level:2},{value:"Iteration Cycle (on GKE)",id:"iteration-cycle-on-gke",level:2},{value:"Completely resetting a local cluster",id:"completely-resetting-a-local-cluster",level:2}],y={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developing-on-kubernetes"},"Developing on Kubernetes"),(0,i.kt)("p",null,"Make sure to read ",(0,i.kt)("a",{parentName:"p",href:"/airbyte/contributing-to-airbyte/developing-locally"},"our docs for developing locally")," first."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Airbyte on Kubernetes",src:r(4865).Z,width:"960",height:"540"})),(0,i.kt)("h2",{id:"iteration-cycle-locally"},"Iteration Cycle ","(","Locally",")"),(0,i.kt)("p",null,"If you're developing locally using Minikube/Docker Desktop/Kind, you can iterate with the following series of commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew build # build dev images\nkubectl delete -k kube/overlays/dev # optional (allows you to recreate resources from scratch)\nkubectl apply -k kube/overlays/dev # applies manifests\nkubectl port-forward svc/airbyte-webapp-svc 8000:80 # port forward the api/ui\n")),(0,i.kt)("h2",{id:"iteration-cycle-on-gke"},"Iteration Cycle ","(","on GKE",")"),(0,i.kt)("p",null,"The process is similar to developing on a local cluster, except you will need to build the local version and push it to your own container registry with names such as ",(0,i.kt)("inlineCode",{parentName:"p"},"your-registry/scheduler"),". Then you will need to configure an overlay to override the name of images and apply your overlay with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -k <path to your overlay>"),"."),(0,i.kt)("p",null,"We are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4225"},"working to improve this process"),"."),(0,i.kt)("h2",{id:"completely-resetting-a-local-cluster"},"Completely resetting a local cluster"),(0,i.kt)("p",null,"In most cases, running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl delete -k kube/overlays/dev")," is sufficient to remove the core Airbyte-related components. However, if you are in a dev environment on a local cluster only running Airbyte and want to start ",(0,i.kt)("strong",{parentName:"p"},"completely from scratch")," ","(","removing all PVCs, pods, completed pods, etc.",")",", you can use the following command to destroy everything on the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# BE CAREFUL, THIS COMMAND DELETES ALL RESOURCES, EVEN NON-AIRBYTE ONES!\nkubectl delete "$(kubectl api-resources --namespaced=true --verbs=delete -o name | tr "\\n" "," | sed -e \'s/,$//\')" --all\n')))}d.isMDXComponent=!0},4865:function(e,t,r){t.Z=r.p+"assets/images/contributing-to-airbyte-k8s-architecture-a7c578424810cc073694b3611615fcaf.png"}}]);