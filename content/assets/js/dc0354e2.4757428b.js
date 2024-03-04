"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40133],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),i=a(20053),o=a(23104),l=a(56347),s=a(57485),u=a(31682),c=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),y=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var y=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.A)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,y.A)();return r.createElement(N,(0,n.A)({key:String(t)},e))}},95737:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),i=a(11470),o=a(19365);const l={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication "},s=void 0,u={unversionedId:"cookbooks-deduplication",id:"version-3.0.x/cookbooks-deduplication",title:"Message deduplication",description:"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.",source:"@site/versioned_docs/version-3.0.x/cookbooks-deduplication.md",sourceDirName:".",slug:"/cookbooks-deduplication",permalink:"/docs/3.0.x/cookbooks-deduplication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/cookbooks-deduplication.md",tags:[],version:"3.0.x",frontMatter:{id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication "},sidebar:"docsSidebar",previous:{title:"Topic compaction",permalink:"/docs/3.0.x/cookbooks-compaction"},next:{title:"Non-persistent messaging",permalink:"/docs/3.0.x/cookbooks-non-persistent"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication at namespace or topic level",id:"enable-message-deduplication-at-namespace-or-topic-level",level:3},{value:"Disable message deduplication at namespace or topic level",id:"disable-message-deduplication-at-namespace-or-topic-level",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When ",(0,r.yg)("strong",{parentName:"p"},"Message deduplication")," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,r.yg)("em",{parentName:"p"},"only once"),", even if the message is produced more than once. Message deduplication is handled automatically on the server side."),(0,r.yg)("p",null,"Message deduplication could affect the performance of the brokers during informational snapshots."),(0,r.yg)("p",null,"To use message deduplication in Pulsar, you need to configure your Pulsar brokers, namespaces, or topics. It is recommended to modify the configuration in the clients, for example, setting send timeout to infinity."),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"You can enable or disable message deduplication at broker, namespace, or topic level. By default, it is disabled on all brokers, namespaces, or topics. You can enable it in the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enable deduplication for all namespaces/topics at the broker level."),(0,r.yg)("li",{parentName:"ul"},"Enable deduplication for a specific namespace with the ",(0,r.yg)("inlineCode",{parentName:"li"},"pulsar-admin namespaces")," interface."),(0,r.yg)("li",{parentName:"ul"},"Enable deduplication for a specific topic with the ",(0,r.yg)("inlineCode",{parentName:"li"},"pulsar-admin topics")," interface.")),(0,r.yg)("h2",{id:"configure-message-deduplication"},"Configure message deduplication"),(0,r.yg)("p",null,"You can configure message deduplication in Pulsar using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/reference-configuration#broker"},(0,r.yg)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file. The following deduplication-related parameters are available."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationEnabled")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),", you have to enable or disable deduplication at the namespace level or the topic level."),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationMaxNumberOfProducers")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The maximum number of producers for which information is stored for deduplication purposes."),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"10000"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"1000"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationSnapshotIntervalSeconds")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval"),"."),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"120"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"brokerDeduplicationProducerInactivityTimeoutMinutes")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"360")," (6 hours)")))),(0,r.yg)("h3",{id:"set-default-value-at-the-broker-level"},"Set default value at the broker-level"),(0,r.yg)("p",null,"By default, message deduplication is ",(0,r.yg)("em",{parentName:"p"},"disabled")," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,r.yg)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled")," parameter to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," and restart the broker."),(0,r.yg)("p",null,"Even if you set the value for ",(0,r.yg)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled"),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker level."),(0,r.yg)("h3",{id:"enable-message-deduplication-at-namespace-or-topic-level"},"Enable message deduplication at namespace or topic level"),(0,r.yg)("p",null,"Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/namespaces?id=set-deduplication"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-deduplication"))," or the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/topics?id=set-deduplication"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--enable"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"-e")," flag and specify the namespace/topic."),(0,r.yg)("p",null,"The following example shows how to enable message deduplication at the namespace level."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-deduplication \\\npublic/default \\\n--enable # or just -e\n")),(0,r.yg)("h3",{id:"disable-message-deduplication-at-namespace-or-topic-level"},"Disable message deduplication at namespace or topic level"),(0,r.yg)("p",null,"Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/namespaces?id=set-deduplication"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," or the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/topics?id=set-deduplication"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--disable"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"-d")," flag and specify the namespace/topic."),(0,r.yg)("p",null,"The following example shows how to disable message deduplication at the namespace level."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-deduplication \\\npublic/default \\\n--disable # or just -d\n")),(0,r.yg)("h2",{id:"pulsar-clients"},"Pulsar clients"),(0,r.yg)("p",null,"If you enable message deduplication in Pulsar brokers, namespaces, or topics, it is recommended to make the client retry infinitely the messages until it succeeds, otherwise it is possible to break the ordering guarantee as some requests may time out and the application does not know whether the request is successfully added to the topic or not."),(0,r.yg)("p",null,"So you need to complete the following tasks for your client producers:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Specify a name for the producer."),(0,r.yg)("li",{parentName:"ol"},"Set the message timeout to ",(0,r.yg)("inlineCode",{parentName:"li"},"0")," (namely, no timeout).")),(0,r.yg)("p",null,"The instructions for Java, Python, and C++ clients are different."),(0,r.yg)(i.A,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"Java clients",mdxType:"TabItem"},(0,r.yg)("p",null,"To ensure the guarantee order on a ",(0,r.yg)("a",{parentName:"p",href:"client-libraries-java-use/#create-a-producer"},"Java producer")," sending to a topic with message deduplication enabled, set the producer name using the ",(0,r.yg)("inlineCode",{parentName:"p"},"producerName")," setter, and set the timeout to ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"sendTimeout")," setter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n'))),(0,r.yg)(o.A,{value:"Python clients",mdxType:"TabItem"},(0,r.yg)("p",null,"Not to break the guarantee order on a ",(0,r.yg)("a",{parentName:"p",href:"client-libraries-python-use.md#create-a-producer"},"Python producer")," sending to a topic with message deduplication active, set the producer name using ",(0,r.yg)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,r.yg)("inlineCode",{parentName:"p"},"0")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"send_timeout_millis"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n'))),(0,r.yg)(o.A,{value:"C++ clients",mdxType:"TabItem"},"Not to break the guarantee order on a [C++ producer](client-libraries-cpp-use.md#create-a-producer) sending to a topic with message deduplication active, set the producer name using `producer_name`, and set the timeout to `0` using `send_timeout_millis`.",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n')))))}g.isMDXComponent=!0}}]);