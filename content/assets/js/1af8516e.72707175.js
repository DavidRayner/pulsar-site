"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92262],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||l;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={id:"client-libraries-go-setup",title:"Set up Pulsar Go client library",sidebar_label:"Set up"},o=void 0,i={unversionedId:"client-libraries-go-setup",id:"version-3.1.x/client-libraries-go-setup",title:"Set up Pulsar Go client library",description:"Install Go client library",source:"@site/versioned_docs/version-3.1.x/client-libraries-go-setup.md",sourceDirName:".",slug:"/client-libraries-go-setup",permalink:"/docs/3.1.x/client-libraries-go-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-go-setup.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-go-setup",title:"Set up Pulsar Go client library",sidebar_label:"Set up"},sidebar:"docsSidebar",previous:{title:"Go client",permalink:"/docs/3.1.x/client-libraries-go"},next:{title:"Initialize",permalink:"/docs/3.1.x/client-libraries-go-initialize"}},p={},s=[{value:"Install Go client library",id:"install-go-client-library",level:2},{value:"Use <code>go get</code>",id:"use-go-get",level:3},{value:"Use <code>go module</code>",id:"use-go-module",level:3},{value:"Connect to Pulsar cluster",id:"connect-to-pulsar-cluster",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"install-go-client-library"},"Install Go client library"),(0,a.yg)("p",null,"You can install the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar")," library by using either ",(0,a.yg)("inlineCode",{parentName:"p"},"go get")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"go module"),"."),(0,a.yg)("h3",{id:"use-go-get"},"Use ",(0,a.yg)("inlineCode",{parentName:"h3"},"go get")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download the library of Go client to your local environment:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'go get -u "github.com/apache/pulsar-client-go/pulsar"\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Import it into your project:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-go"},'import "github.com/apache/pulsar-client-go/pulsar"\n')))),(0,a.yg)("h3",{id:"use-go-module"},"Use ",(0,a.yg)("inlineCode",{parentName:"h3"},"go module")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a directory named ",(0,a.yg)("inlineCode",{parentName:"p"},"test_dir")," and change your working directory to it."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir test_dir && cd test_dir\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Write a sample script (such as ",(0,a.yg)("inlineCode",{parentName:"p"},"test_example.go"),") in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_dir")," directory and write ",(0,a.yg)("inlineCode",{parentName:"p"},"package main")," at the beginning of the file."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"go mod init test_dir\ngo mod tidy && go mod download\ngo build test_example.go\n./test_example\n")))),(0,a.yg)("h2",{id:"connect-to-pulsar-cluster"},"Connect to Pulsar cluster"),(0,a.yg)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,a.yg)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,a.yg)("inlineCode",{parentName:"p"},"6650"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,a.yg)("p",null,"If you have multiple brokers, separate ",(0,a.yg)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,a.yg)("p",null,"If you use ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-tls-authentication"},"mTLS")," authentication, add ",(0,a.yg)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}g.isMDXComponent=!0}}]);