"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44721],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={id:"functions-develop-admin-api",title:"Call Pulsar admin APIs",sidebar_label:"Call Pulsar admin APIs"},o=void 0,s={unversionedId:"functions-develop-admin-api",id:"version-3.1.x/functions-develop-admin-api",title:"Call Pulsar admin APIs",description:"Pulsar Functions that use the Java SDK have access to the Pulsar admin client, which allows the Pulsar admin client to manage API calls to your Pulsar clusters.",source:"@site/versioned_docs/version-3.1.x/functions-develop-admin-api.md",sourceDirName:".",slug:"/functions-develop-admin-api",permalink:"/docs/3.1.x/functions-develop-admin-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-develop-admin-api.md",tags:[],version:"3.1.x",frontMatter:{id:"functions-develop-admin-api",title:"Call Pulsar admin APIs",sidebar_label:"Call Pulsar admin APIs"},sidebar:"docsSidebar",previous:{title:"Configure state storage",permalink:"/docs/3.1.x/functions-develop-state"},next:{title:"Use schema registry",permalink:"/docs/3.1.x/functions-develop-schema-registry"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Pulsar Functions that use the Java SDK have access to the Pulsar admin client, which allows the Pulsar admin client to manage API calls to your Pulsar clusters."),(0,a.yg)("p",null,"Below is an example of how to use the Pulsar admin client exposed from the function ",(0,a.yg)("inlineCode",{parentName:"p"},"context"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.admin.PulsarAdmin;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\n/**\n * In this particular example, for every input message,\n * the function resets the cursor of the current function\'s subscription to a\n * specified timestamp.\n */\npublic class CursorManagementFunction implements Function<String, String> {\n\n    @Override\n    public String process(String input, Context context) throws Exception {\n        PulsarAdmin adminClient = context.getPulsarAdmin();\n        if (adminClient != null) {\n            String topic = context.getCurrentRecord().getTopicName().isPresent() ?\n                    context.getCurrentRecord().getTopicName().get() : null;\n            String subName = context.getTenant() + "/" + context.getNamespace() + "/" + context.getFunctionName();\n            if (topic != null) {\n                // 1578188166 below is a random-pick timestamp\n                adminClient.topics().resetCursor(topic, subName, 1578188166);\n                return "reset cursor successfully";\n            }\n        }\n        return null;\n    }\n}\n')),(0,a.yg)("p",null,"To enable your function to get access to the Pulsar admin client, you need to set ",(0,a.yg)("inlineCode",{parentName:"p"},"exposeAdminClientEnabled=true")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. To test whether it is enabled or not, you can use the command ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-admin functions localrun")," with the flag ",(0,a.yg)("inlineCode",{parentName:"p"},"--web-service-url")," as follows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions localrun \\\n --jar my-functions.jar \\\n --classname my.package.CursorManagementFunction \\\n --web-service-url http://pulsar-web-service:8080 \\\n # Other function configs\n")))}m.isMDXComponent=!0}}]);