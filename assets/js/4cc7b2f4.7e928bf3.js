"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[75427],{78189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={},s="Salesloft",o={unversionedId:"integrations/sources/salesloft",id:"integrations/sources/salesloft",title:"Salesloft",description:"This page contains the setup guide and reference information for the Salesloft Source connector.",source:"@site/../docs/integrations/sources/salesloft.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/salesloft",permalink:"/integrations/sources/salesloft",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/salesloft.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Salesforce",permalink:"/integrations/sources/salesforce"},next:{title:"SAP Business One",permalink:"/integrations/sources/sap-business-one"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Salesloft",id:"step-1-set-up-salesloft",level:3},{value:"Step 2: Set up the Salesloft connector in Airbyte",id:"step-2-set-up-the-salesloft-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"salesloft"},"Salesloft"),(0,l.kt)("p",null,"This page contains the setup guide and reference information for the Salesloft Source connector."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Salesloft Account"),(0,l.kt)("li",{parentName:"ul"},"Start date")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Salesloft API Key (see ",(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Topic/apikey"},"API Key Authentication"),")")),(0,l.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,l.kt)("h3",{id:"step-1-set-up-salesloft"},"Step 1: Set up Salesloft"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("a",{parentName:"p",href:"https://salesloft.com"},"Salesloft Account"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Airbyte Open Source additional setup steps")),(0,l.kt)("p",null,"Log into ",(0,l.kt)("a",{parentName:"p",href:"https://salesloft.com"},"Salesloft")," and then generate an ",(0,l.kt)("a",{parentName:"p",href:"https://developers.salesloft.com/api.html#!/Topic/apikey"},"API Key"),"."),(0,l.kt)("h3",{id:"step-2-set-up-the-salesloft-connector-in-airbyte"},"Step 2: Set up the Salesloft connector in Airbyte"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,l.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,l.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,l.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,l.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,l.kt)("strong",{parentName:"li"},"Salesloft")," from the Source type dropdown and enter a name for this connector."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Authenticate your Salesloft account")," by selecting Oauth or API Key for Authentication."),(0,l.kt)("li",{parentName:"ol"},"Log in and Authorize to the Salesloft account."),(0,l.kt)("li",{parentName:"ol"},"Enter the ",(0,l.kt)("strong",{parentName:"li"},"Start date")," - The date from which you'd like to replicate data for streams."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Authenticate with ",(0,l.kt)("strong",{parentName:"li"},"API Key"),".")),(0,l.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,l.kt)("p",null,"The Salesloft Source connector supports the following ",(0,l.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,l.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,l.kt)("p",null,"This connector outputs the following streams:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Cadence_Memberships/get_v2_cadence_memberships_json"},"CadenceMemberships")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Cadences/get_v2_cadences_json"},"Cadences")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/People/get_v2_people_json"},"People")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Users/get_v2_users_json"},"Users")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Emails/get_v2_activities_emails_json"},"Emails")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Account_Stages/get_v2_account_stages_json"},"Account Stages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Account_Tiers/get_v2_account_tiers_json"},"Account Tiers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Accounts/get_v2_accounts_json"},"Accounts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Actions/get_v2_actions_json"},"Actions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Calls/get_v2_activities_calls_json"},"Calls")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Email_Templates/get_v2_email_templates_json"},"Emails Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Email_Template_Attachments/get_v2_email_template_attachments_json"},"Emails Template Attachements")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Imports/get_v2_imports_json"},"Imports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Notes/get_v2_notes_json"},"Notes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Person_Stages/get_v2_person_stages_json"},"Person Stages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Phone_Number_Assignments/get_v2_phone_number_assignments_json"},"Phone Number Assignments")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Steps/get_v2_steps_json"},"Steps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Team_Templates/get_v2_team_templates_json"},"Team Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Team_Template_Attachments/get_v2_team_template_attachments_json"},"Team Template Attachements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/CRM_Activities/get_v2_crm_activities_json"},"CRM Activities")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Crm_Users/get_v2_crm_users_json"},"CRM Users")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Groups/get_v2_groups_json"},"Groups")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.salesloft.com/api.html#!/Successes/get_v2_successes_json"},"Successes"))),(0,l.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"Salesloft has the ",(0,l.kt)("a",{parentName:"p",href:"hhttps://developers.salesloft.com/api.html#!/Topic/RateLimiting"},"rate limits"),", but the Salesloft connector should not run into Salesloft API limitations under normal usage. Please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-06-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27484"},"27484")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bump version on py files updates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-05-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26188"},"26188")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,l.kt)("inlineCode",{parentName:"td"},"latest_active_date")," field to the ",(0,l.kt)("inlineCode",{parentName:"td"},"Cadences")," stream schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-03-08"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23937"},"23937")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Certify to Beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-03-07"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22893"},"22893")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-03-07"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23828"},"23828")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,l.kt)("inlineCode",{parentName:"td"},"start_date")," to filter data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2023-02-28"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23564"},"23564")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Allow additional properties in spec and stream schemas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-03-28"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11460"},"11460")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added multiple new streams (Accounts, Actions, Calls, Notes ... )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-03-28"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11460"},"11460")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added multiple new streams (Accounts, Actions, Calls, Notes ... )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-03-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11239"},"11239")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added new Emails stream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8617"},"8617")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-22"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6962"},"6962")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Salesloft Connector")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||n;return a?r.createElement(f,s(s({ref:t},m),{},{components:a})):r.createElement(f,s({ref:t},m))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);