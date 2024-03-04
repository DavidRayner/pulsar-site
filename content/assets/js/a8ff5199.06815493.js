"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3320],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(f,l(l({ref:n},p),{},{components:r})):t.createElement(f,l({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32056:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(58168),o=(r(96540),r(15680));const a={id:"reference-cli-tools",title:"Pulsar command-line tools",sidebar_label:"Pulsar CLI tools"},l=void 0,i={unversionedId:"reference-cli-tools",id:"version-3.1.x/reference-cli-tools",title:"Pulsar command-line tools",description:"Pulsar offers several command-line tools that you can use for managing Pulsar installations, performance testing, using command-line producers and consumers, and more.",source:"@site/versioned_docs/version-3.1.x/reference-cli-tools.md",sourceDirName:".",slug:"/reference-cli-tools",permalink:"/docs/3.1.x/reference-cli-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/reference-cli-tools.md",tags:[],version:"3.1.x",frontMatter:{id:"reference-cli-tools",title:"Pulsar command-line tools",sidebar_label:"Pulsar CLI tools"},sidebar:"docsSidebar",previous:{title:"Terminology",permalink:"/docs/3.1.x/reference-terminology"},next:{title:"Pulsar Configuration",permalink:"/docs/3.1.x/reference-configuration"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Pulsar offers several command-line tools that you can use for managing Pulsar installations, performance testing, using command-line producers and consumers, and more."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar-admin")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar-client")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar-daemon")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar-perf")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pulsar-shell")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"bookkeeper"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"For the latest and complete information about command-line tools, including commands, flags, descriptions, and more information, see the ",(0,o.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/"},"reference doc"),".")),(0,o.yg)("p",null,"All Pulsar command-line tools can be run from the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin")," directory of your ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.1.x/getting-started-standalone"},"installed Pulsar package"),"."),(0,o.yg)("p",null,"You can get help for any CLI tool, command, or subcommand using the ",(0,o.yg)("inlineCode",{parentName:"p"},"--help")," flag, or ",(0,o.yg)("inlineCode",{parentName:"p"},"-h")," for short. Here's an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar broker --help\n")))}m.isMDXComponent=!0}}]);