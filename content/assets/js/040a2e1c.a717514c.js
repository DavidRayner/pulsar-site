"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76053],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(y,l(l({ref:r},d),{},{components:t})):n.createElement(y,l({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62692:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const i={id:"client-libraries-node",title:"Pulsar Node.js client",sidebar_label:"Node.js client"},l=void 0,o={unversionedId:"client-libraries-node",id:"version-3.1.x/client-libraries-node",title:"Pulsar Node.js client",description:"You can use a Pulsar Node.js client to create Pulsar producers, consumers, and readers in Node.js. All the methods in Pulsar Node.js clients are thread-safe.",source:"@site/versioned_docs/version-3.1.x/client-libraries-node.md",sourceDirName:".",slug:"/client-libraries-node",permalink:"/docs/3.1.x/client-libraries-node",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-node.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-node",title:"Pulsar Node.js client",sidebar_label:"Node.js client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/3.1.x/client-libraries-python-use"},next:{title:"Set up",permalink:"/docs/3.1.x/client-libraries-node-setup"}},s={},c=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can use a Pulsar Node.js client to create Pulsar ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-clients#producer"},"producers"),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-clients#consumer"},"consumers"),", and ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-clients#reader"},"readers")," in Node.js. All the methods in Pulsar Node.js clients are thread-safe."),(0,a.yg)("h2",{id:"get-started"},"Get started"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-node-setup"},"Set up Node.js client library")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-node-initialize"},"Initialize a Node.js client")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-node-use"},"Use a Node.js client"))),(0,a.yg)("h2",{id:"whats-next"},"What's next?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-clients"},"Work with clients")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-producers"},"Work with producers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-consumers"},"Work with consumers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-readers"},"Work with readers"))),(0,a.yg)("h2",{id:"reference-doc"},"Reference doc"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/client-libraries-node-configs"},"Node.js client configurations")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/release-notes/client-node"},"Release notes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/client-feature-matrix/"},"Client feature matrix")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/blob/master/index.d.ts"},"Type definitions")," used in TypeScript (for 1.3.0 or later versions).")))}u.isMDXComponent=!0}}]);