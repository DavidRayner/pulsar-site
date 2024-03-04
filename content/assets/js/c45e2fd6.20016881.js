"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82282],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(a),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return a?t.createElement(m,i(i({ref:n},u),{},{components:a})):t.createElement(m,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},27017:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=a(58168),r=(a(96540),a(15680));const s={id:"transactions-api",title:"Transactions API",sidebar_label:"Transactions API"},i=void 0,o={unversionedId:"transactions-api",id:"version-3.1.x/transactions-api",title:"Transactions API",description:"All messages in a transaction are available only to consumers after the transaction has been committed. If a transaction has been aborted, all the writes and acknowledgments in this transaction roll back.",source:"@site/versioned_docs/version-3.1.x/transaction-api.md",sourceDirName:".",slug:"/transactions-api",permalink:"/docs/3.1.x/transactions-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/transaction-api.md",tags:[],version:"3.1.x",frontMatter:{id:"transactions-api",title:"Transactions API",sidebar_label:"Transactions API"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize Pulsar client",id:"initialize-pulsar-client",level:2},{value:"Start transactions",id:"start-transactions",level:2},{value:"Produce transaction messages",id:"produce-transaction-messages",level:2},{value:"Acknowledge the messages with the transaction",id:"acknowledge-the-messages-with-the-transaction",level:2},{value:"Commit transactions",id:"commit-transactions",level:2},{value:"Abort transaction",id:"abort-transaction",level:2},{value:"Example",id:"example",level:3},{value:"Enable batch messages in transactions",id:"enable-batch-messages-in-transactions",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"All messages in a transaction are available only to consumers after the transaction has been committed. If a transaction has been aborted, all the writes and acknowledgments in this transaction roll back."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"To enable transactions in Pulsar, you need to configure the parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},"broker.conf")," file or ",(0,r.yg)("inlineCode",{parentName:"li"},"standalone.conf")," file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"transactionCoordinatorEnabled=true\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Initialize transaction coordinator metadata, so the transaction coordinators can leverage advantages of the partitioned topic, such as load balance.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n")),(0,r.yg)("p",null,"After initializing transaction coordinator metadata, you can use the transactions API. The following APIs are available."),(0,r.yg)("h2",{id:"initialize-pulsar-client"},"Initialize Pulsar client"),(0,r.yg)("p",null,"You can enable transactions for transaction clients and initialize transaction coordinator clients."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'PulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .enableTransaction(true)\n        .build();\n')),(0,r.yg)("h2",{id:"start-transactions"},"Start transactions"),(0,r.yg)("p",null,"You can start transactions in the following way."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Transaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n")),(0,r.yg)("h2",{id:"produce-transaction-messages"},"Produce transaction messages"),(0,r.yg)("p",null,"A transaction parameter is required when producing new transaction messages. The semantic of the transaction messages in Pulsar is ",(0,r.yg)("inlineCode",{parentName:"p"},"read-committed"),", so the consumer cannot receive the ongoing transaction messages before the transaction is committed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'producer.newMessage(txn).value("Hello Pulsar Transaction".getBytes()).sendAsync();\n')),(0,r.yg)("h2",{id:"acknowledge-the-messages-with-the-transaction"},"Acknowledge the messages with the transaction"),(0,r.yg)("p",null,"The transaction acknowledgment requires a transaction parameter. The transaction acknowledgment marks the messages state to pending-ack state. When the transaction is committed, the pending-ack state becomes ack state. If the transaction is aborted, the pending-ack state becomes unacknowledged state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Message<byte[]> message = consumer.receive();\nconsumer.acknowledgeAsync(message.getMessageId(), txn);\n")),(0,r.yg)("h2",{id:"commit-transactions"},"Commit transactions"),(0,r.yg)("p",null,"When the transaction is committed, consumers receive the transaction messages and the pending-ack state becomes ack state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"txn.commit().get();\n")),(0,r.yg)("h2",{id:"abort-transaction"},"Abort transaction"),(0,r.yg)("p",null,"When the transaction is aborted, the transaction acknowledgment is canceled and the pending-ack messages are redelivered."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"txn.abort().get();\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"The following example shows how messages are processed in transactions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'PulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl(getPulsarServiceList().get(0).getBrokerServiceUrl())\n        .statsInterval(0, TimeUnit.SECONDS)\n        .enableTransaction(true)\n        .build();\n\nString sourceTopic = "public/default/source-topic";\nString sinkTopic = "public/default/sink-topic";\n\nProducer<String> sourceProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sourceTopic)\n        .create();\nsourceProducer.newMessage().value("hello pulsar transaction").sendAsync();\n\nConsumer<String> sourceConsumer = pulsarClient\n        .newConsumer(Schema.STRING)\n        .topic(sourceTopic)\n        .subscriptionName("test")\n        .subscriptionType(SubscriptionType.Shared)\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscribe();\n\nProducer<String> sinkProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sinkTopic)\n        .sendTimeout(0, TimeUnit.MILLISECONDS)\n        .create();\n\nTransaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n\n// source message acknowledgment and sink message produce belong to one transaction,\n// they are combined into an atomic operation.\nMessage<String> message = sourceConsumer.receive();\nsourceConsumer.acknowledgeAsync(message.getMessageId(), txn);\nsinkProducer.newMessage(txn).value("sink data").sendAsync();\n\ntxn.commit().get();\n')),(0,r.yg)("h2",{id:"enable-batch-messages-in-transactions"},"Enable batch messages in transactions"),(0,r.yg)("p",null,"To enable batch messages in transactions, you need to enable the batch index acknowledgment feature. The transaction acks check whether the batch index acknowledgment conflicts."),(0,r.yg)("p",null,"To enable batch index acknowledgment, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"acknowledgmentAtBatchIndexLevelEnabled")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"acknowledgmentAtBatchIndexLevelEnabled=true\n")),(0,r.yg)("p",null,"And then you need to call the ",(0,r.yg)("inlineCode",{parentName:"p"},"enableBatchIndexAcknowledgment(true)")," method in the consumer builder."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'Consumer<byte[]> sinkConsumer = pulsarClient\n        .newConsumer()\n        .topic(transferTopic)\n        .subscriptionName("sink-topic")\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscriptionType(SubscriptionType.Shared)\n        .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgment\n        .subscribe();\n')))}d.isMDXComponent=!0}}]);