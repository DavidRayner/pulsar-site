"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66028],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,g=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={id:"txn-use",title:"Get started",sidebar_label:"Get started",description:"Get started to use Pulsar transaction API."},s=void 0,i={unversionedId:"txn-use",id:"txn-use",title:"Get started",description:"Get started to use Pulsar transaction API.",source:"@site/docs/txn-use.md",sourceDirName:".",slug:"/txn-use",permalink:"/docs/next/txn-use",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/txn-use.md",tags:[],version:"current",frontMatter:{id:"txn-use",title:"Get started",sidebar_label:"Get started",description:"Get started to use Pulsar transaction API."},sidebar:"docsSidebar",previous:{title:"Concept",permalink:"/docs/next/txn-what"},next:{title:"Advanced features",permalink:"/docs/next/txn-advanced-features"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Related topics",id:"related-topics",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(l,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar transaction is primarily a server-side and protocol-level feature. This tutorial guides you through every step of how to use the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Pulsar transaction API")," to send and receive messages in a Java client."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Currently, ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Pulsar transaction API")," is available in ",(0,r.yg)("strong",{parentName:"p"},"Pulsar 2.8.0 or later")," versions. It is only available for ",(0,r.yg)("strong",{parentName:"p"},"Java")," clients.")),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/next/getting-started-standalone"},"Start Pulsar 2.8.0 or later versions"))),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("p",null,"To use Pulsar transaction API, complete the following steps."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enable transactions."),(0,r.yg)("p",{parentName:"li"},"You can set the following configurations in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/broker.conf"},(0,r.yg)("inlineCode",{parentName:"a"},"broker.conf"))," or ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/standalone.conf"},(0,r.yg)("inlineCode",{parentName:"a"},"standalone.conf"))," file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"//mandatory configuration, used to enable transaction coordinator\ntransactionCoordinatorEnabled=true\n\n//mandatory configuration, used to create systemTopic used for transaction buffer snapshot\nsystemTopicEnabled=true\n")),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"By default"),", Pulsar transactions are ",(0,r.yg)("strong",{parentName:"p"},"disabled"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Initialize transaction coordinator metadata."),(0,r.yg)("p",{parentName:"li"},"The transaction coordinator can leverage the advantages of partitioned topics (such as load balance)."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"Transaction coordinator metadata setup success\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a Pulsar client and enable transactions.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create producers and consumers.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Produce and receive messages.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create transactions.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Produce and ack messages with transactions."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Currently, messages can be acked individually rather than cumulatively."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"End transactions."),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The code snippet below is the example for step 3 - step 8.")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n                // Step 3: create a Pulsar client and enable transactions.\n                .enableTransaction(true)\n                .serviceUrl(jct.serviceUrl)\n                .build();\n\n        // Step 4: create three producers to produce messages to input and output topics.\n        ProducerBuilder<String> producerBuilder = client.newProducer(Schema.STRING);\n        Producer<String> inputProducer = producerBuilder.topic(inputTopic)\n                .sendTimeout(0, TimeUnit.SECONDS).create();\n        Producer<String> outputProducerOne = producerBuilder.topic(outputTopicOne)\n                .sendTimeout(0, TimeUnit.SECONDS).create();\n        Producer<String> outputProducerTwo = producerBuilder.topic(outputTopicTwo)\n                .sendTimeout(0, TimeUnit.SECONDS).create();\n        // Step 4: create three consumers to consume messages from input and output topics.\n        Consumer<String> inputConsumer = client.newConsumer(Schema.STRING)\n                .subscriptionName("your-subscription-name").topic(inputTopic).subscribe();\n        Consumer<String> outputConsumerOne = client.newConsumer(Schema.STRING)\n                .subscriptionName("your-subscription-name").topic(outputTopicOne).subscribe();\n        Consumer<String> outputConsumerTwo = client.newConsumer(Schema.STRING)\n                .subscriptionName("your-subscription-name").topic(outputTopicTwo).subscribe();\n\n        int count = 2;\n        // Step 5: produce messages to input topics.\n        for (int i = 0; i < count; i++) {\n            inputProducer.send("Hello Pulsar! count : " + i);\n        }\n\n        // Step 5: consume messages and produce them to output topics with transactions.\n        for (int i = 0; i < count; i++) {\n\n            // Step 5: the consumer successfully receives messages.\n            Message<String> message = inputConsumer.receive();\n\n            // Step 6: create transactions.\n            // The transaction timeout is specified as 10 seconds.\n            // If the transaction is not committed within 10 seconds, the transaction is automatically aborted.\n            Transaction txn = null;\n            try {\n                txn = client.newTransaction()\n                        .withTransactionTimeout(10, TimeUnit.SECONDS).build().get();\n                // Step 6: you can process the received message with your use case and business logic.\n\n                // Step 7: the producers produce messages to output topics with transactions\n                outputProducerOne.newMessage(txn).value("Hello Pulsar! outputTopicOne count : " + i).send();\n                outputProducerTwo.newMessage(txn).value("Hello Pulsar! outputTopicTwo count : " + i).send();\n\n                // Step 7: the consumers acknowledge the input message with the transactions *individually*.\n                inputConsumer.acknowledgeAsync(message.getMessageId(), txn).get();\n                // Step 8: commit transactions.\n                txn.commit().get();\n            } catch (ExecutionException e) {\n                if (!(e.getCause() instanceof PulsarClientException.TransactionConflictException)) {\n                    // If TransactionConflictException is not thrown,\n                    // you need to redeliver or negativeAcknowledge this message,\n                    // or else this message will not be received again.\n                    inputConsumer.negativeAcknowledge(message);\n                }\n\n                // If a new transaction is created,\n                // then the old transaction should be aborted.\n                if (txn != null) {\n                    txn.abort();\n                }\n            }\n        }\n\n        // Final result: consume messages from output topics and print them.\n        for (int i = 0; i < count; i++) {\n            Message<String> message =  outputConsumerOne.receive();\n            System.out.println("Receive transaction message: " + message.getValue());\n        }\n\n        for (int i = 0; i < count; i++) {\n            Message<String> message =  outputConsumerTwo.receive();\n            System.out.println("Receive transaction message: " + message.getValue());\n        }\n    }\n}\n')),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"Receive transaction message: Hello Pulsar! count : 1\nReceive transaction message: Hello Pulsar! count : 2\nReceive transaction message: Hello Pulsar! count : 1\nReceive transaction message: Hello Pulsar! count : 2\n")))),(0,r.yg)("h2",{id:"related-topics"},"Related topics"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To learn more features that can be used with transactions, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/next/txn-advanced-features"},"Pulsar transactions - Advanced features"),".")))}m.isMDXComponent=!0}}]);