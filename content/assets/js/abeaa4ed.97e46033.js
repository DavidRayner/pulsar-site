"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89048],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>m});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(m,s(s({ref:a},p),{},{components:r})):n.createElement(m,s({ref:a},p))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77076:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(58168),t=(r(96540),r(15680));const o={id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology"},s=void 0,i={unversionedId:"reference-terminology",id:"version-3.0.x/reference-terminology",title:"Pulsar Terminology",description:"Here is a glossary of terms related to Apache Pulsar:",source:"@site/versioned_docs/version-3.0.x/reference-terminology.md",sourceDirName:".",slug:"/reference-terminology",permalink:"/docs/3.0.x/reference-terminology",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/reference-terminology.md",tags:[],version:"3.0.x",frontMatter:{id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology"},sidebar:"docsSidebar",previous:{title:"REST APIs",permalink:"/docs/3.0.x/reference-rest-api-overview"},next:{title:"Pulsar CLI tools",permalink:"/docs/3.0.x/reference-cli-tools"}},l={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Pulsar",id:"pulsar",level:3},{value:"Message",id:"message",level:3},{value:"Topic",id:"topic",level:3},{value:"Partitioned Topic",id:"partitioned-topic",level:3},{value:"Namespace",id:"namespace",level:3},{value:"Namespace Bundle",id:"namespace-bundle",level:3},{value:"Tenant",id:"tenant",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Pub-Sub",id:"pub-sub",level:3},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Reader",id:"reader",level:3},{value:"Cursor",id:"cursor",level:3},{value:"Acknowledgment (ack)",id:"acknowledgment-ack",level:3},{value:"Negative Acknowledgment (nack)",id:"negative-acknowledgment-nack",level:3},{value:"Unacknowledged",id:"unacknowledged",level:3},{value:"Retention Policy",id:"retention-policy",level:3},{value:"Multi-Tenancy",id:"multi-tenancy",level:3},{value:"Failure Domain",id:"failure-domain",level:3},{value:"Anti-affinity Namespaces",id:"anti-affinity-namespaces",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Standalone",id:"standalone",level:3},{value:"Cluster",id:"cluster",level:3},{value:"Instance",id:"instance",level:3},{value:"Geo-Replication",id:"geo-replication",level:3},{value:"Configuration Store",id:"configuration-store",level:3},{value:"Topic Lookup",id:"topic-lookup",level:3},{value:"Service Discovery",id:"service-discovery",level:3},{value:"Broker",id:"broker",level:3},{value:"Dispatcher",id:"dispatcher",level:3},{value:"Storage",id:"storage",level:2},{value:"BookKeeper",id:"bookkeeper",level:3},{value:"Bookie",id:"bookie",level:3},{value:"Ledger",id:"ledger",level:3},{value:"Functions",id:"functions",level:3}],p={toc:c},u="wrapper";function g(e){let{components:a,...r}=e;return(0,t.yg)(u,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Here is a glossary of terms related to Apache Pulsar:"),(0,t.yg)("h2",{id:"concepts"},"Concepts"),(0,t.yg)("h3",{id:"pulsar"},"Pulsar"),(0,t.yg)("p",null,"Pulsar is a distributed messaging system originally created by Yahoo but now under the stewardship of the Apache Software Foundation."),(0,t.yg)("h3",{id:"message"},"Message"),(0,t.yg)("p",null,"Messages are the basic unit of Pulsar. They're what ",(0,t.yg)("a",{parentName:"p",href:"#producer"},"producers")," publish to ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topics"),"\nand what ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," then consume from topics."),(0,t.yg)("h3",{id:"topic"},"Topic"),(0,t.yg)("p",null,"A named channel used to pass messages published by ",(0,t.yg)("a",{parentName:"p",href:"#producer"},"producers")," to ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," who\nprocess those ",(0,t.yg)("a",{parentName:"p",href:"#message"},"messages"),"."),(0,t.yg)("h3",{id:"partitioned-topic"},"Partitioned Topic"),(0,t.yg)("p",null,"A topic that is served by multiple Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#broker"},"brokers"),", which enables higher throughput."),(0,t.yg)("h3",{id:"namespace"},"Namespace"),(0,t.yg)("p",null,"A grouping mechanism for related ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,t.yg)("h3",{id:"namespace-bundle"},"Namespace Bundle"),(0,t.yg)("p",null,"A virtual group of ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topics")," that belong to the same ",(0,t.yg)("a",{parentName:"p",href:"#namespace"},"namespace"),". A namespace bundle\nis defined as a range between two 32-bit hashes, such as 0x00000000 and 0xffffffff."),(0,t.yg)("h3",{id:"tenant"},"Tenant"),(0,t.yg)("p",null,"An administrative unit for allocating capacity and enforcing an authentication/authorization scheme."),(0,t.yg)("h3",{id:"subscription"},"Subscription"),(0,t.yg)("p",null,"A lease on a ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topic")," established by a group of ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumers"),". Pulsar has four subscription\nmodes (exclusive, shared, failover and key_shared)."),(0,t.yg)("h3",{id:"pub-sub"},"Pub-Sub"),(0,t.yg)("p",null,"A messaging pattern in which ",(0,t.yg)("a",{parentName:"p",href:"#producer"},"producer")," processes publish messages on ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topics")," that\nare then consumed (processed) by ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumer")," processes."),(0,t.yg)("h3",{id:"producer"},"Producer"),(0,t.yg)("p",null,"A process that publishes ",(0,t.yg)("a",{parentName:"p",href:"#message"},"messages")," to a Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topic"),"."),(0,t.yg)("h3",{id:"consumer"},"Consumer"),(0,t.yg)("p",null,"A process that establishes a subscription to a Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topic")," and processes messages published\nto that topic by ",(0,t.yg)("a",{parentName:"p",href:"#producer"},"producers"),"."),(0,t.yg)("h3",{id:"reader"},"Reader"),(0,t.yg)("p",null,"Pulsar readers are message processors much like Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," but with two crucial differences:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"you can specify ",(0,t.yg)("em",{parentName:"li"},"where")," on a topic readers begin processing messages (consumers always begin with the latest\navailable unacked message);"),(0,t.yg)("li",{parentName:"ul"},"readers don't retain data or acknowledge messages.")),(0,t.yg)("h3",{id:"cursor"},"Cursor"),(0,t.yg)("p",null,"The subscription position for a ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumer"),"."),(0,t.yg)("h3",{id:"acknowledgment-ack"},"Acknowledgment (ack)"),(0,t.yg)("p",null,"A message sent to a Pulsar broker by a ",(0,t.yg)("a",{parentName:"p",href:"#consumer"},"consumer")," that a message has been successfully processed.\nAn acknowledgment (ack) is Pulsar's way of knowing that the message can be deleted from the system;\nif no acknowledgment, then the message will be retained until it's processed."),(0,t.yg)("h3",{id:"negative-acknowledgment-nack"},"Negative Acknowledgment (nack)"),(0,t.yg)("p",null,'When an application fails to process a particular message, it can send a "negative ack" to Pulsar\nto signal that the message should be replayed at a later timer. (By default, failed messages are\nreplayed after a 1-minute delay). Be aware that negative acknowledgment on ordered subscription types,\nsuch as Exclusive, Failover and Key_Shared, can cause failed messages to arrive to consumers out of the original order.'),(0,t.yg)("h3",{id:"unacknowledged"},"Unacknowledged"),(0,t.yg)("p",null,"A message that has been delivered to a consumer for processing but not yet confirmed as processed by the consumer."),(0,t.yg)("h3",{id:"retention-policy"},"Retention Policy"),(0,t.yg)("p",null,"Size and time limits that you can set on a ",(0,t.yg)("a",{parentName:"p",href:"#namespace"},"namespace")," to configure retention of ",(0,t.yg)("a",{parentName:"p",href:"#message"},"messages"),"\nthat have already been ",(0,t.yg)("a",{parentName:"p",href:"#acknowledgment-ack"},"acknowledged"),"."),(0,t.yg)("h3",{id:"multi-tenancy"},"Multi-Tenancy"),(0,t.yg)("p",null,"The ability to isolate ",(0,t.yg)("a",{parentName:"p",href:"#namespace"},"namespaces"),", specify quotas, and configure authentication and authorization\non a per-",(0,t.yg)("a",{parentName:"p",href:"#tenant"},"tenant")," basis."),(0,t.yg)("h3",{id:"failure-domain"},"Failure Domain"),(0,t.yg)("p",null,"A logical domain under a Pulsar cluster. Each logical domain contains a pre-configured list of brokers."),(0,t.yg)("h3",{id:"anti-affinity-namespaces"},"Anti-affinity Namespaces"),(0,t.yg)("p",null,"A group of namespaces that have anti-affinity to each other."),(0,t.yg)("h2",{id:"architecture"},"Architecture"),(0,t.yg)("h3",{id:"standalone"},"Standalone"),(0,t.yg)("p",null,"A lightweight Pulsar broker in which all components run in a single Java Virtual Machine (JVM) process. Standalone\nclusters can be run on a single machine and are useful for development purposes."),(0,t.yg)("h3",{id:"cluster"},"Cluster"),(0,t.yg)("p",null,"A Pulsar cluster consists of the following components:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"One or more Pulsar ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.0.x/reference-terminology#broker"},"brokers")),(0,t.yg)("li",{parentName:"ul"},"One or more ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.0.x/reference-terminology#bookkeeper"},"BookKeeper")," servers (aka ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.0.x/reference-terminology#bookie"},"bookies"),")"),(0,t.yg)("li",{parentName:"ul"},"A ",(0,t.yg)("a",{parentName:"li",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management")),(0,t.yg)("p",null,"Clusters can reside in different geographical regions and replicate messages to one another in a process called ",(0,t.yg)("a",{parentName:"p",href:"#geo-replication"},"geo-replication"),"."),(0,t.yg)("h3",{id:"instance"},"Instance"),(0,t.yg)("p",null,"A group of Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"clusters")," that act together as a single unit."),(0,t.yg)("h3",{id:"geo-replication"},"Geo-Replication"),(0,t.yg)("p",null,"Replication of messages across Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"clusters"),", potentially in different datacenters\nor geographical regions."),(0,t.yg)("h3",{id:"configuration-store"},"Configuration Store"),(0,t.yg)("p",null,"Pulsar's configuration store (previously known as configuration store) is a ZooKeeper quorum that\nis used for configuration-specific tasks. A multi-cluster Pulsar installation requires just one\nconfiguration store across all ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"clusters"),"."),(0,t.yg)("h3",{id:"topic-lookup"},"Topic Lookup"),(0,t.yg)("p",null,"A service provided by Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#broker"},"brokers")," that enables connecting clients to automatically determine\nwhich Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"cluster")," is responsible for a ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topic")," (and thus where message traffic for\nthe topic needs to be routed)."),(0,t.yg)("h3",{id:"service-discovery"},"Service Discovery"),(0,t.yg)("p",null,"A mechanism provided by Pulsar that enables connecting clients to use just a single URL to interact\nwith all the ",(0,t.yg)("a",{parentName:"p",href:"#broker"},"brokers")," in a ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"cluster"),"."),(0,t.yg)("h3",{id:"broker"},"Broker"),(0,t.yg)("p",null,"A broker is a stateless component of Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#cluster"},"clusters"),". It consists of two components: "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"An HTTP server exposing a REST interface for administration and topic lookup.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"A ",(0,t.yg)("a",{parentName:"p",href:"#dispatcher"},"dispatcher")," that handles all message transfers. "))),(0,t.yg)("p",null,"Pulsar clusters typically consist of multiple brokers."),(0,t.yg)("h3",{id:"dispatcher"},"Dispatcher"),(0,t.yg)("p",null,"An asynchronous TCP server used for all data transfers in and out of a Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#broker"},"broker"),". The Pulsar\ndispatcher uses a custom binary protocol for all communications."),(0,t.yg)("h2",{id:"storage"},"Storage"),(0,t.yg)("h3",{id:"bookkeeper"},"BookKeeper"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper")," is a scalable, low-latency persistent log storage\nservice that Pulsar uses to store data."),(0,t.yg)("h3",{id:"bookie"},"Bookie"),(0,t.yg)("p",null,"Bookie is the name of an individual BookKeeper server. It is effectively the storage server of Pulsar."),(0,t.yg)("h3",{id:"ledger"},"Ledger"),(0,t.yg)("p",null,"An append-only data structure in ",(0,t.yg)("a",{parentName:"p",href:"#bookkeeper"},"BookKeeper")," that is used to persistently store messages in Pulsar ",(0,t.yg)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,t.yg)("h3",{id:"functions"},"Functions"),(0,t.yg)("p",null,"Pulsar Functions are lightweight functions that can consume messages from Pulsar topics, apply custom processing logic, and, if desired, publish results to topics."))}g.isMDXComponent=!0}}]);