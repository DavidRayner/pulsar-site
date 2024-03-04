"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42157],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const s={id:"get-started-pulsar-admin",title:"Get started with pulsar-admin CLI tool",sidebar_label:"Get started with pulsar-admin"},i=void 0,p={unversionedId:"get-started-pulsar-admin",id:"version-3.1.x/get-started-pulsar-admin",title:"Get started with pulsar-admin CLI tool",description:"This tutorial guides you through every step of using pulsar-admin CLI to manage topics. It includes the following steps:",source:"@site/versioned_docs/version-3.1.x/get-started-pulsar-admin.md",sourceDirName:".",slug:"/get-started-pulsar-admin",permalink:"/docs/3.1.x/get-started-pulsar-admin",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/get-started-pulsar-admin.md",tags:[],version:"3.1.x",frontMatter:{id:"get-started-pulsar-admin",title:"Get started with pulsar-admin CLI tool",sidebar_label:"Get started with pulsar-admin"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Related topics",id:"related-topics",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This tutorial guides you through every step of using pulsar-admin CLI to manage topics. It includes the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the service URL.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a partitioned topic.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete the topic."))),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.1.x/getting-started-standalone"},"Install and start Pulsar standalone"),". This tutorial runs Pulsar 2.11 as an example.")),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the service URLs to point to the broker service in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/client.conf"},"client.conf"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"webServiceUrl=http://localhost:8080/\nbrokerServiceUrl=pulsar://localhost:6650/\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a persistent topic named test-topic-1 with 6 partitions."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 6\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"There is no output. You can check the status of the topic in Step 5.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Update the number of the partition to 8."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics update-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 8\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"There is no output. You can check the number of partitions in Step 5.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Produce some messages to the partitioned topic test-topic-1."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'2023-03-07T15:33:56,832+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-1" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n\n...\n\n2023-03-07T15:35:03,769+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   8.931 ms - med:   3.775 - 95pct:  32.144 - 99pct:  98.432 - 99.9pct: 216.088 - 99.99pct: 304.807 - 99.999pct: 349.391 - Max: 351.235\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the internal stats of the partitioned topic ",(0,r.yg)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics partitioned-stats-internal \\\npersistent://public/default/test-topic-1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"Below is a part of the output. For detailed explanations of topic stats, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.1.x/administration-stats"},"Pulsar statistics"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "metadata" : {\n    "partitions" : 8\n  },\n  "partitions" : {\n    "persistent://public/default/test-topic-1-partition-1" : {\n      "entriesAddedCounter" : 4213,\n      "numberOfEntries" : 4213,\n      "totalSize" : 8817693,\n      "currentLedgerEntries" : 4212,\n      "currentLedgerSize" : 8806289,\n      "lastLedgerCreatedTimestamp" : "2023-03-07T15:33:59.367+08:00",\n      "waitingCursorsCount" : 0,\n      "pendingAddEntriesCount" : 0,\n      "lastConfirmedEntry" : "65:4211",\n      "state" : "LedgerOpened",\n      "ledgers" : [ {\n        "ledgerId" : 49,\n        "entries" : 1,\n        "size" : 11404,\n        "offloaded" : false,\n        "underReplicated" : false\n      }, {\n        "ledgerId" : 65,\n        "entries" : 0,\n        "size" : 0,\n        "offloaded" : false,\n        "underReplicated" : false\n      } ],\n      "cursors" : {\n        "test-subscriptio-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n  "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        },\n        "test-subscription-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n          "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        }\n      },\n      "schemaLedgers" : [ ],\n      "compactedLedger" : {\n        "ledgerId" : -1,\n        "entries" : -1,\n        "size" : -1,\n        "offloaded" : false,\n        "underReplicated" : false\n      }\n    },\n...\n\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete the topic ",(0,r.yg)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics delete-partitioned-topic persistent://public/default/test-topic-1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"There is no output. You can verify whether the ",(0,r.yg)("em",{parentName:"p"},"test-topic-1")," exists or not using the following command."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("p",{parentName:"li"},"List topics in ",(0,r.yg)("inlineCode",{parentName:"p"},"public/default")," namespace."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics list public/default\n")))),(0,r.yg)("h2",{id:"related-topics"},"Related topics"),(0,r.yg)("p",null,"To check the detailed usage of pulsar-admin CLI, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/"},"pulsar-admin CLI reference"),"."))}d.isMDXComponent=!0}}]);