"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6283],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],c={},s="Configuring Sync Notifications",p={unversionedId:"operator-guides/configuring-sync-notifications",id:"operator-guides/configuring-sync-notifications",title:"Configuring Sync Notifications",description:"Overview",source:"@site/../docs/operator-guides/configuring-sync-notifications.md",sourceDirName:"operator-guides",slug:"/operator-guides/configuring-sync-notifications",permalink:"/airbyte/operator-guides/configuring-sync-notifications",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/operator-guides/configuring-sync-notifications.md",tags:[],version:"current",frontMatter:{}},u={},l=[{value:"Overview",id:"overview",level:2},{value:"Set up Slack Notifications on Sync Status",id:"set-up-slack-notifications-on-sync-status",level:2}],d={toc:l};function f(e){var t=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-sync-notifications"},"Configuring Sync Notifications"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"You can set up Airbyte to notify you when syncs have ",(0,a.kt)("strong",{parentName:"p"},"failed")," or ",(0,a.kt)("strong",{parentName:"p"},"succeeded"),". This is achieved through a webhook, a URL that you can input into other applications to get real time data from Airbyte."),(0,a.kt)("h2",{id:"set-up-slack-notifications-on-sync-status"},"Set up Slack Notifications on Sync Status"),(0,a.kt)("p",null,"If you're more of a visual learner, just head over to ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NjYm8F-KiFc&ab_channel=Airbyte"},"this video")," to learn how to do this. Otherwise, keep reading!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set up the bot.")),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/"),". Hit ",(0,a.kt)("inlineCode",{parentName:"p"},"Create an App"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81606).Z,width:"1438",height:"702"}),"   "),(0,a.kt)("p",null,"Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"From scratch"),". Enter your App Name (e.g. Airbyte Sync Notifications) and pick your desired Slack workspace. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set up the webhook URL.")),(0,a.kt)("p",null,"Now on the left sidebar, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Incoming Webhooks"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61660).Z,width:"478",height:"730"})),(0,a.kt)("p",null,"Click the slider button in the top right to turn the feature on. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New Webhook to Workspace"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(98493).Z,width:"1484",height:"1856"})),(0,a.kt)("p",null,"Pick the channel that you want to receive Airbyte notifications in (ideally a dedicated one), and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," to give it permissions to access the channel. You should see the bot show up in the selected channel now."),(0,a.kt)("p",null,"Now you should see an active webhook right above the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add New Webhook to Workspace")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(84830).Z,width:"1328",height:"368"})," "),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Copy.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add the webhook to Airbyte.")),(0,a.kt)("p",null,"Assuming you have a ",(0,a.kt)("a",{parentName:"p",href:"../deploying-airbyte/README.md"},"running instance of Airbyte"),", we can navigate to the UI. Click on Settings and then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44463).Z,width:"594",height:"774"})),(0,a.kt)("p",null,"Simply paste the copied webhook URL in ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection status Webhook URL")," and you're ready to go! On this page, you can click one or both of the sliders to decide whether you want notifications on sync successes, failures, or both. Make sure to click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save changes")," before you leave."),(0,a.kt)("p",null,"Your Webhook URL should look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(94630).Z,width:"2416",height:"652"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Test it out.")),(0,a.kt)("p",null,"From the settings page, you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," to send a test message to the channel. Or, just run a sync now and try it out! If all goes well, you should receive a notification in your selected channel that looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76676).Z,width:"1580",height:"266"})),(0,a.kt)("p",null,"You're done!"))}f.isMDXComponent=!0},98493:function(e,t,n){t.Z=n.p+"assets/images/notifications_add_new_webhook-4a0d0c63c1d2ec823ada8902890ead75.png"},94630:function(e,t,n){t.Z=n.p+"assets/images/notifications_airbyte_notification_settings-c1816ac46d4d7eaa4b5d991d76bcc94c.png"},44463:function(e,t,n){t.Z=n.p+"assets/images/notifications_airbyte_settings-c5f30cb9be6d757a68b47bed862d349b.png"},81606:function(e,t,n){t.Z=n.p+"assets/images/notifications_create_slack_app-8d6a4a6f6d30fb2cbc43daf86aca6730.png"},61660:function(e,t,n){t.Z=n.p+"assets/images/notifications_incoming_webhooks-21c2915d8c24076117d765a7c815c987.png"},76676:function(e,t,n){t.Z=n.p+"assets/images/notifications_slack_message-f44857b936c9f383b2e986557c0a4b58.png"},84830:function(e,t,n){t.Z=n.p+"assets/images/notifications_webhook_url-60a87ce0abf230aa63e4095a577c1bce.png"}}]);