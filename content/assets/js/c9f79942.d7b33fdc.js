"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),o=n(67294),a=n(86010),i=n(12466),c=n(16550),u=n(91980),s=n(67392),l=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,l.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=u??p;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),b(e)}),[s,b,a]),tabValues:a}}var h=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:c,selectValue:u,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==c&&(p(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>l.push(e),onKeyDown:d,onClick:m},i,{className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":c===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",v.tabList)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(g,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},39640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(10599),i=n(28802);const c={id:"functions-develop-metrics",title:"Use metrics to monitor functions",sidebar_label:"Use metrics to monitor functions"},u=void 0,s={unversionedId:"functions-develop-metrics",id:"version-2.11.x/functions-develop-metrics",title:"Use metrics to monitor functions",description:"To ensure that running functions are healthy at any time, you can configure functions to publish arbitrary metrics to the metrics interface that can be queried.",source:"@site/versioned_docs/version-2.11.x/functions-develop-metrics.md",sourceDirName:".",slug:"/functions-develop-metrics",permalink:"/docs/2.11.x/functions-develop-metrics",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-metrics.md",tags:[],version:"2.11.x",frontMatter:{id:"functions-develop-metrics",title:"Use metrics to monitor functions",sidebar_label:"Use metrics to monitor functions"},sidebar:"docsSidebar",previous:{title:"Produce function logs",permalink:"/docs/2.11.x/functions-develop-log"},next:{title:"Enable security on functions",permalink:"/docs/2.11.x/functions-develop-security"}},l={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To ensure that running functions are healthy at any time, you can configure functions to publish arbitrary metrics to the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," interface that can be queried."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Using the language-native interface for Java or Python is ",(0,o.kt)("strong",{parentName:"p"},"not")," able to publish metrics and stats to Pulsar.")),(0,o.kt)("p",null,"You can use both built-in metrics and customized metrics to monitor functions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the built-in ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.11.x/reference-metrics#pulsar-functions"},"function metrics"),".\nPulsar Functions expose the metrics that can be collected and used for monitoring the health of Java, Python, and Go functions. You can check the metrics by following the ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.11.x/deploy-monitoring#function-and-connector-stats"},"monitoring")," guide."),(0,o.kt)("li",{parentName:"ul"},"Set your customized metrics.\nIn addition to the built-in metrics, Pulsar allows you to customize metrics for Java and Python functions. Function workers collect user-defined metrics to Prometheus automatically and you can check them in Grafana.")),(0,o.kt)("p",null,"Here is an example of how to customize metrics for Java, Python and Go functions by using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.11.x/functions-concepts#context"},(0,o.kt)("inlineCode",{parentName:"a"},"Context object"))," on a per-key basis. For example, you can set a metric for the ",(0,o.kt)("inlineCode",{parentName:"p"},"process-count")," key and set another one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"elevens-count")," key every time the function processes a message."),(0,o.kt)(a.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class MetricRecorderFunction implements Function<Integer, Void> {\n    @Override\n    public void apply(Integer input, Context context) {\n        // Records the metric 1 every time a message arrives\n        context.recordMetric("hit-count", 1);\n\n        // Records the metric only if the arriving number equals 11\n        if (input == 11) {\n            context.recordMetric("elevens-count", 1);\n        }\n\n        return null;\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass MetricRecorderFunction(Function):\n    def process(self, input, context):\n        context.record_metric('hit-count', 1)\n\n        if input == 11:\n            context.record_metric('elevens-count', 1)\n"))),(0,o.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func metricRecorderFunction(ctx context.Context, in []byte) error {\n    inputstr := string(in)\n    fctx, ok := pf.FromContext(ctx)\n    if !ok {\n        return errors.New("get Go Functions Context error")\n    }\n    fctx.RecordMetric("hit-count", 1)\n    if inputstr == "eleven" {\n        fctx.RecordMetric("elevens-count", 1)\n    }\n    return nil\n}\n')))))}f.isMDXComponent=!0}}]);