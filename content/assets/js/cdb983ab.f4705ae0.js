"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81975],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const l={id:"functions-deploy-cluster-parallelism",title:"Enable parallel processing",sidebar_label:"Enable parallel processing"},o=void 0,i={unversionedId:"functions-deploy-cluster-parallelism",id:"version-3.0.x/functions-deploy-cluster-parallelism",title:"Enable parallel processing",description:"In cluster mode, you can specify the parallelism (the number of instances to run) to enable parallel processing for a function.",source:"@site/versioned_docs/version-3.0.x/functions-deploy-cluster-parallelism.md",sourceDirName:".",slug:"/functions-deploy-cluster-parallelism",permalink:"/docs/3.0.x/functions-deploy-cluster-parallelism",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-deploy-cluster-parallelism.md",tags:[],version:"3.0.x",frontMatter:{id:"functions-deploy-cluster-parallelism",title:"Enable parallel processing",sidebar_label:"Enable parallel processing"},sidebar:"docsSidebar",previous:{title:"Allocate resources to function instance",permalink:"/docs/3.0.x/functions-deploy-cluster-resource"},next:{title:"Enable end-to-end-encryption",permalink:"/docs/3.0.x/functions-deploy-cluster-encryption"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In cluster mode, you can specify the ",(0,a.yg)("strong",{parentName:"p"},"parallelism")," (the number of instances to run) to enable parallel processing for a function."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example1")),(0,a.yg)("p",null,"Specify the ",(0,a.yg)("inlineCode",{parentName:"p"},"--parallelism")," flag of the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," command when deploying a function."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --parallelism 3 \\\n  # Other function info\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"For an existing function, you can adjust the parallelism by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," command.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example2")),(0,a.yg)("p",null,"Specify the ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism")," parameter when deploying a function configuration through YAML."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"# function-config.yaml\nparallelism: 3\ninputs:\n  - persistent://public/default/input-1\noutput: persistent://public/default/output-1\n# other parameters\n")),(0,a.yg)("p",null,"For an existing function, you can adjust the parallelism by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," command as follows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions update \\\n  --function-config-file function-config.yaml\n")))}m.isMDXComponent=!0}}]);