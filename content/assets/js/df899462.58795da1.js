"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34119],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(96540),n=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(58168),n=r(96540),l=r(20053),o=r(23104),s=r(56347),u=r(57485),i=r(31682),c=r(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,i]=g({queryString:r,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),y(e)}),[i,y,l]),tabValues:l}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==s&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},n.createElement(h,(0,a.A)({},e,t)),n.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,b.A)();return n.createElement(N,(0,a.A)({key:String(t)},e))}},50204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=r(58168),n=(r(96540),r(15680));r(11470),r(19365);const l={id:"admin-api-features",title:"Pulsar admin interfaces - Features",sidebar_label:"Features"},o=void 0,s={unversionedId:"admin-api-features",id:"version-3.1.x/admin-api-features",title:"Pulsar admin interfaces - Features",description:"Below are the most common tasks you may want to do. For the exhaustive lists of tasks and the method to perform these tasks, see Tools.",source:"@site/versioned_docs/version-3.1.x/admin-api-features.md",sourceDirName:".",slug:"/admin-api-features",permalink:"/docs/3.1.x/admin-api-features",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/admin-api-features.md",tags:[],version:"3.1.x",frontMatter:{id:"admin-api-features",title:"Pulsar admin interfaces - Features",sidebar_label:"Features"},sidebar:"docsSidebar",previous:{title:"Use cases",permalink:"/docs/3.1.x/admin-api-use-cases"},next:{title:"Brokers",permalink:"/docs/3.1.x/admin-api-brokers"}},u={},i=[{value:"Related topics",id:"related-topics",level:3}],c={toc:i},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.yg)(p,(0,a.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Below are the most common tasks you may want to do. For the exhaustive lists of tasks and the method to perform these tasks, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/admin-api-tools"},"Tools"),"."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Pulsar admin APIs - features",src:r(34010).A,width:"878",height:"811"})),(0,n.yg)("p",null,"These administrative tasks are categorized based on Pulsar components."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Category"),(0,n.yg)("th",{parentName:"tr",align:null},"Components"),(0,n.yg)("th",{parentName:"tr",align:null},"What do you want to do?"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Server"),(0,n.yg)("td",{parentName:"tr",align:null},"Broker"),(0,n.yg)("td",{parentName:"tr",align:null},"Operations on brokers.",(0,n.yg)("br",null),(0,n.yg)("br",null),"For example, ",(0,n.yg)("br",null),"- Set dynamic configurations on brokers",(0,n.yg)("br",null)," - Run health checks against brokers",(0,n.yg)("br",null)," - Shutdown brokers",(0,n.yg)("br",null)," - Get broker-level stats metrics")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Storage"),(0,n.yg)("td",{parentName:"tr",align:null},"Bookie"),(0,n.yg)("td",{parentName:"tr",align:null},"Operations on bookie placement policy. ",(0,n.yg)("br",null),(0,n.yg)("br",null),"For example, ",(0,n.yg)("br",null)," - Get or set bookie replacement policy")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Entities"),(0,n.yg)("td",{parentName:"tr",align:null},"- Topic ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Schema ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Namespace  ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Tenant ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Cluster"),(0,n.yg)("td",{parentName:"tr",align:null},"Operations on topics, schemas, namespaces, tenants, or clusters.",(0,n.yg)("br",null),(0,n.yg)("br",null)," For example, ",(0,n.yg)("br",null)," - Create, update or delete topics, tenants, namespaces, or clusters ",(0,n.yg)("br",null)," - Set isolation policies, configure offload thresholds, or set permissions for namespaces ",(0,n.yg)("br",null)," - Upload, extract, or delete schemas")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Stream processing"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("br",null),(0,n.yg)("br",null)," - Function ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Connector ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Transaction ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Package"),(0,n.yg)("td",{parentName:"tr",align:null},"Operations on functions, function workers, or connectors. ",(0,n.yg)("br",null)," For example, ",(0,n.yg)("br",null)," - Create, update, and delete functions or connectors ",(0,n.yg)("br",null)," - Get stats of function workers, trigger rebalance of functions to workers ",(0,n.yg)("br",null),(0,n.yg)("br",null)," Operations on transactions. ",(0,n.yg)("br",null)," For example, ",(0,n.yg)("br",null)," - Get stats of transactions ",(0,n.yg)("br",null)," - Update the scale of transaction coordinators ",(0,n.yg)("br",null),(0,n.yg)("br",null)," Operations on packages. ",(0,n.yg)("br",null)," For example, ",(0,n.yg)("br",null)," - Upload, download, and delete packages")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Others"),(0,n.yg)("td",{parentName:"tr",align:null},"- Proxy ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Resource groups ",(0,n.yg)("br",null),(0,n.yg)("br",null)," - Resource quotas"),(0,n.yg)("td",{parentName:"tr",align:null},"Operations on proxy stats. ",(0,n.yg)("br",null)," For example, ",(0,n.yg)("br",null)," - Get various monitoring metrics for proxy stats ",(0,n.yg)("br",null),(0,n.yg)("br",null)," Operations on resource groups.",(0,n.yg)("br",null),"For example, ",(0,n.yg)("br",null)," - Create, update, and delete resource groups ",(0,n.yg)("br",null),(0,n.yg)("br",null),"Operations on resource quotas.",(0,n.yg)("br",null),"For example, ",(0,n.yg)("br",null)," - Set resource quota for namespace bundles")))),(0,n.yg)("h3",{id:"related-topics"},"Related topics"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To understand the basics, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/admin-api-overview"},"Pulsar admin API - Overview"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/admin-api-use-cases"},"Pulsar admin API - Use cases"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To perform administrative operations, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/admin-api-tools"},"Pulsar admin API - Tools"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To get up quickly, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/admin-api-get-started"},"Pulsar admin API - Get started"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To check the detailed usage, see the API references below."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.1.x/"},"Java admin API"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.1.x/reference-rest-api-overview"},"REST API")))))))}d.isMDXComponent=!0},34010:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/admin-api-features-b87d54fb509db0ac389dfc00d9ea748d.svg"}}]);