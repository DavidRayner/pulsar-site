"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51771],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(a),g=n,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(58168),n=a(96540),l=a(20053),i=a(23104),s=a(56347),u=a(57485),o=a(31682),c=a(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,o]=m({queryString:a,groupId:r}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=u??p;return g({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),y(e)}),[o,y,l]),tabValues:l}}var b=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=o[a].value;r!==s&&(p(t),u(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function P(e){const t=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},n.createElement(h,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function w(e){const t=(0,b.A)();return n.createElement(P,(0,r.A)({key:String(t)},e))}},62051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(58168),n=(a(96540),a(15680));a(11470),a(19365);const l={id:"pulsar-api-overview",title:"Pulsar APIs",sidebar_label:"Pulsar APIs"},i=void 0,s={unversionedId:"pulsar-api-overview",id:"version-3.0.x/pulsar-api-overview",title:"Pulsar APIs",description:"Pulsar is a messaging and streaming platform that scales across organizations of all sizes.",source:"@site/versioned_docs/version-3.0.x/pulsar-api-overview.md",sourceDirName:".",slug:"/pulsar-api-overview",permalink:"/docs/3.0.x/pulsar-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/pulsar-api-overview.md",tags:[],version:"3.0.x",frontMatter:{id:"pulsar-api-overview",title:"Pulsar APIs",sidebar_label:"Pulsar APIs"},sidebar:"docsSidebar",previous:{title:"Reference",permalink:"/docs/3.0.x/reference-landing"},next:{title:"REST APIs",permalink:"/docs/3.0.x/reference-rest-api-overview"}},u={},o=[{value:"Pulsar client APIs",id:"pulsar-client-apis",level:2},{value:"Pulsar admin APIs",id:"pulsar-admin-apis",level:2},{value:"Comparison",id:"comparison",level:2}],c={toc:o},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.yg)(p,(0,r.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar is a messaging and streaming platform that scales across organizations of all sizes. "),(0,n.yg)("p",null,"As the core building blocks of Pulsar, Pulsar APIs allow you to:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"build applications with Pulsar using client APIs"),(0,n.yg)("li",{parentName:"ul"},"administer Pulsar clusters using admin APIs")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Pulsar APIs - Definition",src:a(31898).A,width:"879",height:"503"})),(0,n.yg)("h2",{id:"pulsar-client-apis"},"Pulsar client APIs"),(0,n.yg)("p",null,"Pulsar client APIs encapsulate and optimize Pulsar's client-broker communication protocols and add additional features using Pulsar primitives. "),(0,n.yg)("p",null,"With Pulsar client APIs, you can:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"create and configure producers, consumers, and readers"),(0,n.yg)("li",{parentName:"ul"},"produce and consume messages"),(0,n.yg)("li",{parentName:"ul"},"perform authentication and authorization tasks ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Client APIs - Definition",src:a(41020).A,width:"1210",height:"375"})),(0,n.yg)("p",null,"Pulsar exposes client APIs with language bindings. For more details about Pulsar clients, including language-specific client libraries, feature matrix, third-party clients, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/client-libraries"},"Pulsar client - Overview"),"."),(0,n.yg)("h2",{id:"pulsar-admin-apis"},"Pulsar admin APIs"),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/admin-api-overview"},"Pulsar admin API - Overview"),"."),(0,n.yg)("h2",{id:"comparison"},"Comparison"),(0,n.yg)("p",null,"Here is a simple comparison between Pulsar client APIs and Pulsar admin APIs."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Category"),(0,n.yg)("th",{parentName:"tr",align:null},"Pulsar client APIs"),(0,n.yg)("th",{parentName:"tr",align:null},"Pulsar admin APIs"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Audiences"),(0,n.yg)("td",{parentName:"tr",align:null},"Developers"),(0,n.yg)("td",{parentName:"tr",align:null},"DevOps")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Goals"),(0,n.yg)("td",{parentName:"tr",align:null},"Build applications with Pulsar"),(0,n.yg)("td",{parentName:"tr",align:null},"Administer Pulsar clusters")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Use cases"),(0,n.yg)("td",{parentName:"tr",align:null},"Pulsar client APIs help you create applications that rely on real-time data. ",(0,n.yg)("br",null),(0,n.yg)("br",null)," For example, you can build a financial application to handle fraud alerts or an eCommerce application that creates recommendations based on user activities."),(0,n.yg)("td",{parentName:"tr",align:null},"Pulsar administration APIs let you administer the entire Pulsar instance, including clusters, tenants, namespaces, and topics, from a single endpoint. ",(0,n.yg)("br",null),(0,n.yg)("br",null)," For example, you can configure security and compliance, or get information about brokers, check for any issues, and then troubleshoot solutions.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Key features"),(0,n.yg)("td",{parentName:"tr",align:null},"- Process data with producers, consumers, readers, and TableView ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Secure data with authentication and authorization ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Protect data with transactions and schema ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Stabilize data with cluster-level auto failover"),(0,n.yg)("td",{parentName:"tr",align:null},"- Configure authentication and authorization ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Set data retention and resource isolation policies ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Facilitate workflow of application development",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Troubleshoot Pulsar")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Interfaces"),(0,n.yg)("td",{parentName:"tr",align:null},"- ",(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/3.0.x/"},"Java client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/cpp/3.4.x"},"C++ client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/python/3.4.x"},"Python client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," -  ",(0,n.yg)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"Go client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/client-libraries-node"},"Node.js client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/client-libraries-websocket#api-reference"},"WebSocket client API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/client-libraries-dotnet"},"C# client API")),(0,n.yg)("td",{parentName:"tr",align:null},"- ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/admin-api-overview"},"Java admin API")," ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/reference-rest-api-overview"},"REST API"))))))}d.isMDXComponent=!0},41020:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/client-api-definition-d44017eab8965a0a3e55c420f7864158.svg"},31898:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/pulsar-api-definition-1bb809ca922df54959aeb62cdfc026f0.svg"}}]);