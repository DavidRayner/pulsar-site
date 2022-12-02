"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"txn-use",title:"How to use transactions?",sidebar_label:"How to use transactions?"},i=void 0,s={unversionedId:"txn-use",id:"txn-use",title:"How to use transactions?",description:"Transaction API",source:"@site/docs/txn-use.md",sourceDirName:".",slug:"/txn-use",permalink:"/docs/next/txn-use",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/txn-use.md",tags:[],version:"current",frontMatter:{id:"txn-use",title:"How to use transactions?",sidebar_label:"How to use transactions?"},sidebar:"docsSidebar",previous:{title:"How transactions work?",permalink:"/docs/next/txn-how"},next:{title:"How to monitor transactions?",permalink:"/docs/next/txn-monitor"}},l={},p=[{value:"Transaction API",id:"transaction-api",level:2},{value:"Quick start",id:"quick-start",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"transaction-api"},"Transaction API"),(0,r.kt)("p",null,"The transaction feature is primarily a server-side and protocol-level feature. You can use the transaction feature via the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"transaction API"),", which is available in ",(0,r.kt)("strong",{parentName:"p"},"Pulsar 2.8.0 or later"),". "),(0,r.kt)("p",null,"To use the transaction API, you do not need any additional settings in the Pulsar client. ",(0,r.kt)("strong",{parentName:"p"},"By default"),", transactions are ",(0,r.kt)("strong",{parentName:"p"},"disabled"),". "),(0,r.kt)("p",null,"Currently, transaction API is only available for ",(0,r.kt)("strong",{parentName:"p"},"Java")," clients. Support for other language clients will be added in future releases."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"This section provides an example of how to use the transaction API to send and receive messages in a Java client. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Pulsar 2.8.0 or later. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable transaction. "),(0,r.kt)("p",{parentName:"li"},"Change the configuration in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"//mandatory configuration, used to enable transaction coordinator\ntransactionCoordinatorEnabled=true\n\n//mandtory configuration, used to create systemTopic used for transaction buffer snapshot\nsystemTopicEnabled=true\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to acknowledge batch messages in transactions, set ",(0,r.kt)("inlineCode",{parentName:"p"},"acknowledgmentAtBatchIndexLevelEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"acknowledgmentAtBatchIndexLevelEnabled=true\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to guarantee exactly-once semantics, you need to enable ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/cookbooks-deduplication"},"message deduplication"),".\nYou can enable message deduplication at the broker level, the namespace level, or the topic level according to your needs."))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize transaction coordinator metadata."),(0,r.kt)("p",{parentName:"li"},"The transaction coordinator can leverage the advantages of partitioned topics (such as load balance)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Transaction coordinator metadata setup success\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize a Pulsar client."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'PulsarClient client = PulsarClient.builder()\n   .serviceUrl("pulsar://localhost:6650")\n   .enableTransaction(true)\n   .build();\n')))),(0,r.kt)("p",null,"Now you can start using the transaction API to send and receive messages. Below is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," application written in Java."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(24578).Z,width:"1844",height:"1100"})),(0,r.kt)("p",null,"Let\u2019s walk through this example step by step."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Step"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1. Start a transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application opens a new transaction by calling PulsarClient.newTransaction. It specifics the transaction timeout as 1 minute. If the transaction is not committed within 1 minute, the transaction is automatically aborted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2. Receive messages from topics."),(0,r.kt)("td",{parentName:"tr",align:null},"The application creates two normal consumers to receive messages from topic input-topic-1 and input-topic-2 respectively.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3. Publish messages to topics with the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application creates two producers to produce the resulting messages to the output topic ",(0,r.kt)("em",{parentName:"td"},"output-topic-1")," and output-topic-2 respectively. The application applies the processing logic and generates two output messages. The application sends those two output messages as part of the transaction opened in the first step via ",(0,r.kt)("inlineCode",{parentName:"td"},"Producer.newMessage(Transaction)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4. Acknowledge the messages with the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"In the same transaction, the application acknowledges the two input messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5. Commit the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"The application commits the transaction by calling ",(0,r.kt)("inlineCode",{parentName:"td"},"Transaction.commit()")," on the open transaction. The commit operation ensures the two input messages are marked as acknowledged and the two output messages are written successfully to the output topics.")))),(0,r.kt)("p",null,"[1]"," Example of enabling batch messages ack in transactions in the consumer builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Consumer<byte[]> consumer = pulsarClient\n    .newConsumer()\n    .topic(transferTopic)\n    .subscriptionName("transaction-sub")\n    .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n    .subscriptionType(SubscriptionType.Shared)\n    .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgment\n    .subscribe();\n')))}u.isMDXComponent=!0},24578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/txn-9-65da8c1f05f7575701ca8614637c112a.png"}}]);