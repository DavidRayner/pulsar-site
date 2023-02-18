"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/",id:"about",title:"Apache Pulsar Contribution Guide",sidebar_label:"About",sidebar_position:2},s=void 0,o={unversionedId:"about",id:"about",title:"Apache Pulsar Contribution Guide",description:"The Apache Pulsar community welcomes contributions from anyone with a passion for distributed systems! Pulsar has many opportunities for contributions: write new examples/tutorials, add new user-facing libraries, write new Pulsar IO connectors, or participate on the documentation effort.",source:"@site/contribute/about.md",sourceDirName:".",slug:"/",permalink:"/contribute/",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/about.md",tags:[],version:"current",lastUpdatedBy:"Yunze Xu",lastUpdatedAt:1676624069,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:2,frontMatter:{slug:"/",id:"about",title:"Apache Pulsar Contribution Guide",sidebar_label:"About",sidebar_position:2},sidebar:"sidebarDevelopment",next:{title:"Setup and building",permalink:"/contribute/setup-building"}},u={},l=[{value:"Channels",id:"channels",level:2},{value:"Mailing lists",id:"mailing-lists",level:3},{value:"GitHub issues",id:"github-issues",level:3},{value:"Online discussions",id:"online-discussions",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Pulsar community welcomes contributions from anyone with a passion for distributed systems! Pulsar has many opportunities for contributions: write new examples/tutorials, add new user-facing libraries, write new Pulsar IO connectors, or participate on the documentation effort."),(0,i.kt)("h2",{id:"channels"},"Channels"),(0,i.kt)("p",null,"To engage the Pulsar developers community, you can join the following channels. "),(0,i.kt)("h3",{id:"mailing-lists"},"Mailing lists"),(0,i.kt)("p",null,"Pulsar developers discuss design and implementation issues on the ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")," mailing list, which is archived ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@pulsar.apache.org"},"here"),". Join the list by emailing ",(0,i.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@pulsar.apache.org"},"dev-subscribe@pulsar.apache.org"),"."),(0,i.kt)("h3",{id:"github-issues"},"GitHub issues"),(0,i.kt)("p",null,"Pulsar developers use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"GitHub issues")," for issue tracking and project management, as well as a way to communicate among a very diverse and distributed set of contributors. To be able to gather feedback, avoid frustration, and avoid duplicated efforts all Pulsar related work are being tracked there."),(0,i.kt)("p",null,"If you do not already have a GitHub account, sign up ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/join"},"here"),"."),(0,i.kt)("p",null,"If a quick ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"search")," doesn't turn up an existing GitHub issue for the work you want to contribute, create it. Please discuss your idea with a committer on GitHub or, alternatively, on the developer mailing list."),(0,i.kt)("p",null,"If there\u2019s an existing GitHub issue for your intended contribution, please comment about your intended work. Once the work is understood, a committer will assign the issue to you. If an issue is currently assigned, please check with the current assignee before reassigning."),(0,i.kt)("p",null,"For moderate or large contributions, you should not start coding or writing a design document unless there is a corresponding GitHub issue assigned to you for that work. Simple changes, like fixing typos, do not require an associated issue."),(0,i.kt)("h3",{id:"online-discussions"},"Online discussions"),(0,i.kt)("p",null,"Pulsar users and developers use ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.slack.com/"},"Apache Pulsar Slack channel")," for online discussions. You can self-invite yourself by accessing ",(0,i.kt)("a",{parentName:"p",href:"https://communityinviter.com/apps/apache-pulsar/apache-pulsar"},"this link"),"."),(0,i.kt)("p",null,"Slack channels are great for quick questions or discussions on specialized topics. Remember that it's strongly encouraged to communicate via the mailing lists, and you should prefer to discuss more complex subjects by email. "),(0,i.kt)("p",null,"Developers should be careful to move or duplicate all the official or useful discussions on GitHub or the dev mailing list."))}d.isMDXComponent=!0}}]);