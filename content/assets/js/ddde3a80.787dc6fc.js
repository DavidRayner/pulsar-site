"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),l=n(16550),u=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,i]=g({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),h(e)}),[i,h,s]),tabValues:s}}var f=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==l&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},69148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(10599),o=n(28802);const l={id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",sidebar_label:"Run Pulsar in Docker",description:"Get started with Apache Pulsar on your local machine using Docker."},u=void 0,i={unversionedId:"getting-started-docker",id:"version-3.2.x/getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",description:"Get started with Apache Pulsar on your local machine using Docker.",source:"@site/versioned_docs/version-3.2.x/getting-started-docker.md",sourceDirName:".",slug:"/getting-started-docker",permalink:"/docs/3.2.x/getting-started-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/getting-started-docker.md",tags:[],version:"3.2.x",frontMatter:{id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",sidebar_label:"Run Pulsar in Docker",description:"Get started with Apache Pulsar on your local machine using Docker."},sidebar:"docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/docs/3.2.x/getting-started-standalone"},next:{title:"Run Pulsar in Kubernetes",permalink:"/docs/3.2.x/getting-started-helm"}},c={},p=[{value:"Step1: Start Pulsar in Docker",id:"step1-start-pulsar-in-docker",level:2},{value:"Step 2: Use Pulsar in Docker",id:"step-2-use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Step 3: Get the topic statistics",id:"step-3-get-the-topic-statistics",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."),(0,r.kt)("p",null,"If you have not installed Docker, download it following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,r.kt)("p",null,"To run Pulsar in Docker, follow the steps below."),(0,r.kt)("h2",{id:"step1-start-pulsar-in-docker"},"Step1: Start Pulsar in Docker"),(0,r.kt)("p",null,"For macOS, Linux, and Windows, run the following command to start Pulsar within a Docker container."),(0,r.kt)(s.Z,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:3.2.0 \\\nbin/pulsar standalone\n"))),(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it ^\n-p 6650:6650 ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:3.2.0 ^\nbin/pulsar standalone\n")))),(0,r.kt)("p",null,"If you want to change Pulsar configurations and start Pulsar, run the following command by passing environment variables with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PULSAR_PREFIX_")," prefix. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/e6b12c64b043903eb5ff2dc5186fe8030f157cfc/conf/standalone.conf"},"default configuration file")," for more details."),(0,r.kt)(s.Z,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -it \\\n-e PULSAR_PREFIX_xxx=yyy \\\n-p 6650:6650  \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:2.10.0 sh \\\n-c "bin/apply-config-from-env.py \\\nconf/standalone.conf && \\\nbin/pulsar standalone"\n'))),(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -it ^\n-e PULSAR_PREFIX_xxx=yyy ^\n-p 6650:6650  ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:2.10.0 sh ^\n-c "bin/apply-config-from-env.py ^\nconf/standalone.conf && ^\nbin/pulsar standalone"\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The docker container runs as UID 10000 and GID 0 by default. You need to ensure the mounted volumes give write permission to either UID 10000 or GID 0. Note that UID 10000 is arbitrary, so it is recommended to make these mounts writable for the root group (GID 0)."),(0,r.kt)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes to not start "fresh" every time the container is restarted. For details on the volumes, you can use ',(0,r.kt)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>"),"."),(0,r.kt)("li",{parentName:"ul"},"For Docker on Windows, make sure to configure it to use Linux containers."))),(0,r.kt)("p",null,"After starting Pulsar successfully, you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"To perform a health check, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin/pulsar-admin brokers healthcheck")," command. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("li",{parentName:"ul"},"When you start a local standalone cluster, a ",(0,r.kt)("inlineCode",{parentName:"li"},"public/default")," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.x/concepts-messaging#topics"},"Topics"),"."))),(0,r.kt)("h2",{id:"step-2-use-pulsar-in-docker"},"Step 2: Use Pulsar in Docker"),(0,r.kt)("p",null,"Pulsar offers a variety of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/client-libraries"},"client libraries"),", such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/client-libraries-java"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/client-libraries-python"},"Python"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/client-libraries-cpp"},"C++"),"."),(0,r.kt)("p",null,"If you're running a local standalone cluster, you can use one of these root URLs to interact with your cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,r.kt)("p",null,"The following example guides you to get started with Pulsar by using the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/3.4.x"},"Python client API"),"."),(0,r.kt)("p",null,"Install the Pulsar Python client library directly from ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client\n")),(0,r.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.kt)("p",null,"Create a consumer and subscribe to the topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n")),(0,r.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.kt)("p",null,"Start a producer to send some test messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n")),(0,r.kt)("h2",{id:"step-3-get-the-topic-statistics"},"Step 3: Get the topic statistics"),(0,r.kt)("p",null,"In Pulsar, you can use REST API, Java, or command-line tools to control every aspect of the system. For details on APIs, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-overview"},"Admin API Overview"),"."),(0,r.kt)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n")),(0,r.kt)("p",null,"The output is something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n')))}g.isMDXComponent=!0}}]);