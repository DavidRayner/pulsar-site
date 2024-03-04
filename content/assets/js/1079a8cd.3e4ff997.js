"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65026],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const o={id:"functions-develop-tutorial",title:"Tutorials",sidebar_label:"Tutorials"},a=void 0,u={unversionedId:"functions-develop-tutorial",id:"version-3.1.x/functions-develop-tutorial",title:"Tutorials",description:"Write a function for word count",source:"@site/versioned_docs/version-3.1.x/functions-develop-tutorial.md",sourceDirName:".",slug:"/functions-develop-tutorial",permalink:"/docs/3.1.x/functions-develop-tutorial",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-develop-tutorial.md",tags:[],version:"3.1.x",frontMatter:{id:"functions-develop-tutorial",title:"Tutorials",sidebar_label:"Tutorials"},sidebar:"docsSidebar",previous:{title:"Use SerDe",permalink:"/docs/3.1.x/functions-develop-serde"},next:{title:"How to debug",permalink:"/docs/3.1.x/functions-debug"}},s={},l=[{value:"Write a function for word count",id:"write-a-function-for-word-count",level:2},{value:"Write a function for content-based routing",id:"write-a-function-for-content-based-routing",level:2},{value:"Write a window function for word count",id:"write-a-window-function-for-word-count",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"write-a-function-for-word-count"},"Write a function for word count"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The following example is a stateful function. By default, the state of a function is disabled. See ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.1.x/functions-worker-stateful"},"Enable stateful functions")," for more instructions.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Write the function in Java using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.1.x/functions-develop-api"},"SDK for Java"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-java"},' package org.example.functions;\n\n import org.apache.pulsar.functions.api.Context;\n import org.apache.pulsar.functions.api.Function;\n\n import java.util.Arrays;\n\n public class WordCountFunction implements Function<String, Void> {\n     // This function is invoked every time a message is published to the input topic\n     @Override\n     public Void process(String input, Context context) throws Exception {\n         Arrays.asList(input.split(" ")).forEach(word -> {\n             String counterKey = word.toLowerCase();\n             context.incrCounter(counterKey, 1);\n         });\n         return null;\n     }\n }\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Bundle and build the JAR file, and then deploy it in your Pulsar cluster using the ",(0,i.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," command."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --jar target/my-jar-with-dependencies.jar \\\n   --classname org.example.functions.WordCountFunction \\\n   --tenant public \\\n   --namespace default \\\n   --name word-count \\\n   --inputs persistent://public/default/sentences \\\n   --output persistent://public/default/count\n")))),(0,i.yg)("h2",{id:"write-a-function-for-content-based-routing"},"Write a function for content-based routing"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Write the function in Python using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.1.x/functions-develop-api"},"SDK for Python"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},' from pulsar import Function\n\n class RoutingFunction(Function):\n     def __init__(self):\n         self.fruits_topic = "persistent://public/default/fruits"\n         self.vegetables_topic = "persistent://public/default/vegetables"\n\n     def is_fruit(item):\n         return item in [b"apple", b"orange", b"pear", b"other fruits..."]\n\n     def is_vegetable(item):\n         return item in [b"carrot", b"lettuce", b"radish", b"other vegetables..."]\n\n     def process(self, item, context):\n         if self.is_fruit(item):\n             context.publish(self.fruits_topic, item)\n         elif self.is_vegetable(item):\n             context.publish(self.vegetables_topic, item)\n         else:\n             warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n             context.get_logger().warn(warning)\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Suppose this code is stored in ",(0,i.yg)("inlineCode",{parentName:"p"},"~/router.py"),", then you can deploy it in your Pulsar cluster using the ",(0,i.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," command."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --py ~/router.py \\\n   --classname router.RoutingFunction \\\n   --tenant public \\\n   --namespace default \\\n   --name route-fruit-veg \\\n   --inputs persistent://public/default/basket-items\n")))),(0,i.yg)("h2",{id:"write-a-window-function-for-word-count"},"Write a window function for word count"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Currently, window functions are only available in Java.")),(0,i.yg)("p",null,"This example demonstrates how to use the ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.1.x/functions-develop-api"},"language-native interface")," to write a window function in Java."),(0,i.yg)("p",null,"Each input message is a sentence that is split into words and each word is counted. The built-in counter state is used to keep track of the word count in a persistent and consistent manner."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public class WordCountFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        Arrays.asList(input.split("\\\\s+")).forEach(word -> context.incrCounter(word, 1));\n        return null;\n    }\n}\n')))}d.isMDXComponent=!0}}]);