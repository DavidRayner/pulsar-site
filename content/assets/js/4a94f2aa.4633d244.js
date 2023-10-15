"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62798],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28802:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},10599:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),s=a(16550),o=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function P(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(P,(0,r.Z)({key:String(t)},e))}},43501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));a(10599),a(28802);const l={id:"pulsar-api-overview",title:"Pulsar API",sidebar_label:"Overview"},i=void 0,s={unversionedId:"pulsar-api-overview",id:"version-2.11.x/pulsar-api-overview",title:"Pulsar API",description:"Pulsar is a messaging and streaming platform that scales across organizations of all sizes. Pulsar APIs are the core building blocks of Pulsar, which allow you to interact with Pulsar or administer Pulsar clusters. Pulsar APIs consist of the following types:",source:"@site/versioned_docs/version-2.11.x/pulsar-api-overview.md",sourceDirName:".",slug:"/pulsar-api-overview",permalink:"/docs/2.11.x/pulsar-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/pulsar-api-overview.md",tags:[],version:"2.11.x",frontMatter:{id:"pulsar-api-overview",title:"Pulsar API",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"REST",permalink:"/docs/2.11.x/client-libraries-rest"},next:{title:"Overview",permalink:"/docs/2.11.x/client-api-overview"}},o={},u=[{value:"When to use Pulsar APIs",id:"when-to-use-pulsar-apis",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar is a messaging and streaming platform that scales across organizations of all sizes. Pulsar APIs are the core building blocks of Pulsar, which allow you to interact with Pulsar or administer Pulsar clusters. Pulsar APIs consist of the following types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/client-api-overview"},"Pulsar client APIs"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/2.11.x/admin-api-overview"},"Pulsar admin APIs")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Pulsar APIs - Definition",src:a(75991).Z,width:"879",height:"503"})),(0,n.kt)("h2",{id:"when-to-use-pulsar-apis"},"When to use Pulsar APIs"),(0,n.kt)("p",null,"Pulsar client APIs and Pulsar admin APIs serve two different purposes in the Pulsar API design. You can use Pulsar client APIs to build applications with Pulsar and use Pulsar admin APIs to manage Pulsar clusters."),(0,n.kt)("p",null,"Here is a simple comparison between Pulsar client APIs and Pulsar admin APIs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Pulsar client APIs"),(0,n.kt)("th",{parentName:"tr",align:null},"Pulsar admin APIs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Audiences"),(0,n.kt)("td",{parentName:"tr",align:null},"Developers"),(0,n.kt)("td",{parentName:"tr",align:null},"DevOps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Goals"),(0,n.kt)("td",{parentName:"tr",align:null},"Build applications with Pulsar"),(0,n.kt)("td",{parentName:"tr",align:null},"Administer Pulsar clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Use cases"),(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar client APIs help you create applications that rely on real-time data. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," For example, you can build a financial application to handle fraud alerts or an eCommerce application that creates recommendations based on user activities."),(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar administration APIs let you administer the entire Pulsar instance, including clusters, tenants, namespaces, and topics, from a single endpoint. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," For example, you can configure security and compliance, or get information about brokers, check for any issues, and then troubleshoot solutions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key features"),(0,n.kt)("td",{parentName:"tr",align:null},"- Process data with producers, consumers, readers, and TableView ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Secure data with authentication and authorization ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Protect data with transactions and schema ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Stabilize data with cluster-level auto failover"),(0,n.kt)("td",{parentName:"tr",align:null},"- Configure authentication and authorization ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Set data retention and resource isolation policies ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Facilitate workflow of application development",(0,n.kt)("br",null),(0,n.kt)("br",null)," - Troubleshoot Pulsar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:null},"- ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/2.11.x/"},"Java client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/cpp/3.3.x"},"C++ client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/python/3.3.x"},"Python client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," -  ",(0,n.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Go client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-node"},"Node.js client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-websocket#api-reference"},"WebSocket client API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-dotnet"},"C# client API")),(0,n.kt)("td",{parentName:"tr",align:null},"- ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.11.x/admin-api-overview"},"Java admin API")," ",(0,n.kt)("br",null),(0,n.kt)("br",null)," - ",(0,n.kt)("a",{parentName:"td",href:"/docs/2.11.x/reference-rest-api-overview"},"REST API"))))))}d.isMDXComponent=!0},75991:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar-api-definition-1bb809ca922df54959aeb62cdfc026f0.svg"}}]);