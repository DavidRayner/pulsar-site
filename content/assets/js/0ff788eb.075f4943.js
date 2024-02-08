"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||h[d]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={id:"pulsar-client-node-1.10.0",title:"Pulsar Client Node 1.10.0",sidebar_label:"Pulsar Client Node 1.10.0"},i=void 0,p={unversionedId:"versioned/pulsar-client-node-1.10.0",id:"versioned/pulsar-client-node-1.10.0",title:"Pulsar Client Node 1.10.0",description:"What's Changed",source:"@site/release-notes/versioned/pulsar-client-node-1.10.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.10.0",permalink:"/release-notes/versioned/pulsar-client-node-1.10.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-node-1.10.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.10.0",title:"Pulsar Client Node 1.10.0",sidebar_label:"Pulsar Client Node 1.10.0"}},o={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],u={toc:c},s="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump the master version to 1.10.0 by @shibd in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/336"},"https://github.com/apache/pulsar-client-node/pull/336")),(0,r.kt)("li",{parentName:"ul"},"Bump word-wrap from 1.2.3 to 1.2.4 by @dependabot in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/337"},"https://github.com/apache/pulsar-client-node/pull/337")),(0,r.kt)("li",{parentName:"ul"},"Upgrade semver by @massakam in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/338"},"https://github.com/apache/pulsar-client-node/pull/338")),(0,r.kt)("li",{parentName:"ul"},"Fix build macOS napi CI failed. by @shibd in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/341"},"https://github.com/apache/pulsar-client-node/pull/341")),(0,r.kt)("li",{parentName:"ul"},"Use license-checker directly instead of grunt-license-report by @massakam in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/340"},"https://github.com/apache/pulsar-client-node/pull/340")),(0,r.kt)("li",{parentName:"ul"},"Bump @babel/traverse from 7.22.8 to 7.23.2 by @dependabot in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/346"},"https://github.com/apache/pulsar-client-node/pull/346")),(0,r.kt)("li",{parentName:"ul"},"Upgrade license-check-and-add to 4.0.5 by @massakam in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/347"},"https://github.com/apache/pulsar-client-node/pull/347")),(0,r.kt)("li",{parentName:"ul"},"[fix]"," Fixed an potential issue of examples/consumer_listener.js where clients were unintentionally disconnected by @kontotto in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/351"},"https://github.com/apache/pulsar-client-node/pull/351")),(0,r.kt)("li",{parentName:"ul"},"[ci]"," use python-3.10 by @hrsakai in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/353"},"https://github.com/apache/pulsar-client-node/pull/353")),(0,r.kt)("li",{parentName:"ul"},"Bump cpp client version to 3.4.1 by @shibd in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/356"},"https://github.com/apache/pulsar-client-node/pull/356")),(0,r.kt)("li",{parentName:"ul"},"Add type definition for AthenzX509Config by @hrsakai in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/358"},"https://github.com/apache/pulsar-client-node/pull/358")),(0,r.kt)("li",{parentName:"ul"},"feat: Support batch receive for consumer. by @shibd in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/357"},"https://github.com/apache/pulsar-client-node/pull/357")),(0,r.kt)("li",{parentName:"ul"},"Bump cpp client version to 3.4.2 by @shibd in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/361"},"https://github.com/apache/pulsar-client-node/pull/361"))),(0,r.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@kontotto made their first contribution in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/351"},"https://github.com/apache/pulsar-client-node/pull/351"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/compare/v1.9.0...v1.10.0"},"https://github.com/apache/pulsar-client-node/compare/v1.9.0...v1.10.0")))}h.isMDXComponent=!0}}]);