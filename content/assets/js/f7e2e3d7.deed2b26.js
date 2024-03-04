"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11032],{15680:(e,t,l)=>{l.d(t,{xA:()=>u,yg:()=>m});var r=l(96540);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function n(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),p=c(l),d=a,m=p["".concat(s,".").concat(d)]||p[d]||v[d]||i;return l?r.createElement(m,o(o({ref:t},u),{},{components:l})):r.createElement(m,o({ref:t},u))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,o=new Array(i);o[0]=d;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[p]="string"==typeof e?e:a,o[1]=n;for(var c=2;c<i;c++)o[c]=l[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},3746:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var r=l(58168),a=(l(96540),l(15680));const i={id:"concepts-cluster-level-failover",title:"Cluster-level failover",sidebar_label:"Cluster-level failover"},o=void 0,n={unversionedId:"concepts-cluster-level-failover",id:"version-3.1.x/concepts-cluster-level-failover",title:"Cluster-level failover",description:"This chapter describes the concept, benefits, use cases, constraints, usage, working principles, and more information about the cluster-level failover.",source:"@site/versioned_docs/version-3.1.x/concepts-cluster-level-failover.md",sourceDirName:".",slug:"/concepts-cluster-level-failover",permalink:"/docs/3.1.x/concepts-cluster-level-failover",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/concepts-cluster-level-failover.md",tags:[],version:"3.1.x",frontMatter:{id:"concepts-cluster-level-failover",title:"Cluster-level failover",sidebar_label:"Cluster-level failover"},sidebar:"docsSidebar",previous:{title:"Geo Replication",permalink:"/docs/3.1.x/concepts-replication"},next:{title:"Multi Tenancy",permalink:"/docs/3.1.x/concepts-multi-tenancy"}},s={},c=[{value:"Concept of cluster-level failover",id:"concept-of-cluster-level-failover",level:3},{value:"Why use cluster-level failover?",id:"why-use-cluster-level-failover",level:3},{value:"When to use cluster-level failover?",id:"when-to-use-cluster-level-failover",level:3},{value:"When cluster-level failover is triggered?",id:"when-cluster-level-failover-is-triggered",level:3},{value:"Why does cluster-level failover fail?",id:"why-does-cluster-level-failover-fail",level:3},{value:"What are the limitations of cluster-level failover?",id:"what-are-the-limitations-of-cluster-level-failover",level:3},{value:"What are the relationships between cluster-level failover and geo-replication?",id:"what-are-the-relationships-between-cluster-level-failover-and-geo-replication",level:3},{value:"How does cluster-level failover work?",id:"how-does-cluster-level-failover-work",level:3},{value:"How to use cluster-level failover",id:"how-to-use-cluster-level-failover",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},p=u("Tabs"),v=u("TabItem"),d={toc:c},m="wrapper";function g(e){let{components:t,...i}=e;return(0,a.yg)(m,(0,r.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This chapter describes the concept, benefits, use cases, constraints, usage, working principles, and more information about the cluster-level failover."),(0,a.yg)("h3",{id:"concept-of-cluster-level-failover"},"Concept of cluster-level failover"),(0,a.yg)(p,{groupId:"failover-choice",defaultValue:"Automatic cluster-level failover",values:[{label:"Automatic cluster-level failover",value:"Automatic cluster-level failover"},{label:"Controlled cluster-level failover",value:"Controlled cluster-level failover"}],mdxType:"Tabs"},(0,a.yg)(v,{value:"Automatic cluster-level failover",mdxType:"TabItem"},(0,a.yg)("p",null,"Automatic cluster-level failover supports Pulsar clients switching from a primary cluster to one or several backup clusters automatically and seamlessly when it detects a failover event based on the configured detecting policy set by ",(0,a.yg)("strong",{parentName:"p"},"users"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Automatic cluster-level failover",src:l(79635).A,width:"1084",height:"640"}))),(0,a.yg)(v,{value:"Controlled cluster-level failover",mdxType:"TabItem"},(0,a.yg)("p",null,"Controlled cluster-level failover supports Pulsar clients switching from a primary cluster to one or several backup clusters. The switchover is manually set by ",(0,a.yg)("strong",{parentName:"p"},"administrators"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Controlled cluster-level failover",src:l(84024).A,width:"1080",height:"652"})))),(0,a.yg)("p",null,"Once the primary cluster functions again, Pulsar clients can switch back to the primary cluster. Most of the time users won't even notice a thing. Users can keep using applications and services without interruptions or timeouts."),(0,a.yg)("h3",{id:"why-use-cluster-level-failover"},"Why use cluster-level failover?"),(0,a.yg)("p",null,"The cluster-level failover provides fault tolerance, continuous availability, and high availability together. It brings a number of benefits, including but not limited to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Reduced cost: services can be switched and recovered automatically with no data loss.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Simplified management: businesses can operate on an "always-on" basis since no immediate user intervention is required.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Improved stability and robustness: it ensures continuous performance and minimizes service downtime."))),(0,a.yg)("h3",{id:"when-to-use-cluster-level-failover"},"When to use cluster-level failover?"),(0,a.yg)("p",null,"The cluster-level failover protects your environment in a number of ways, including but not limited to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Disaster recovery: cluster-level failover can automatically and seamlessly transfer the production workload on a primary cluster to one or several backup clusters, which ensures minimum data loss and reduced recovery time.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Planned migration: if you want to migrate production workloads from an old cluster to a new cluster, you can improve the migration efficiency with cluster-level failover. For example, you can test whether the data migration goes smoothly in case of a failover event, identify possible issues and risks before the migration."))),(0,a.yg)("h3",{id:"when-cluster-level-failover-is-triggered"},"When cluster-level failover is triggered?"),(0,a.yg)(p,{groupId:"failover-choice",defaultValue:"Automatic cluster-level failover",values:[{label:"Automatic cluster-level failover",value:"Automatic cluster-level failover"},{label:"Controlled cluster-level failover",value:"Controlled cluster-level failover"}],mdxType:"Tabs"},(0,a.yg)(v,{value:"Automatic cluster-level failover",mdxType:"TabItem"},(0,a.yg)("p",null,"Automatic cluster-level failover is triggered when Pulsar clients cannot connect to the primary cluster for a prolonged period of time. This can be caused by any number of reasons including, but not limited to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Network failure: internet connection is lost.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Power failure: shutdown time of a primary cluster exceeds time limits.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Service error: errors occur on a primary cluster (for example, the primary cluster does not function because of time limits).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Crashed storage space: the primary cluster does not have enough storage space, but the corresponding storage space on the backup server functions normally.")))),(0,a.yg)(v,{value:"Controlled cluster-level failover",mdxType:"TabItem"},(0,a.yg)("p",null,"Controlled cluster-level failover is triggered when administrators set the switchover manually."))),(0,a.yg)("h3",{id:"why-does-cluster-level-failover-fail"},"Why does cluster-level failover fail?"),(0,a.yg)("p",null,"Obviously, the cluster-level failover does not succeed if the backup cluster is unreachable by active Pulsar clients. This can happen for many reasons, including but not limited to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Power failure: the backup cluster is shut down or does not function normally.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Crashed storage space: primary and backup clusters do not have enough storage space.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the failover is initiated, but no cluster can assume the role of an available cluster due to errors, and the primary cluster is not able to provide service normally.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you manually initiate a switchover, but services cannot be switched to the backup cluster server, then the system will attempt to switch services back to the primary cluster.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Fail to authenticate or authorize between 1) primary and backup clusters, or 2) between two backup clusters."))),(0,a.yg)("h3",{id:"what-are-the-limitations-of-cluster-level-failover"},"What are the limitations of cluster-level failover?"),(0,a.yg)("p",null,"Currently, cluster-level failover can perform probes to prevent data loss, but it can not check the status of backup clusters. If backup clusters are not healthy, you cannot produce or consume data."),(0,a.yg)("h3",{id:"what-are-the-relationships-between-cluster-level-failover-and-geo-replication"},"What are the relationships between cluster-level failover and geo-replication?"),(0,a.yg)("p",null,"The cluster-level failover is an extension of ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-replication"},"geo-replication")," to improve stability and robustness. The cluster-level failover depends on geo-replication, and they have some ",(0,a.yg)("strong",{parentName:"p"},"differences")," as below."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Influence"),(0,a.yg)("th",{parentName:"tr",align:null},"Cluster-level failover"),(0,a.yg)("th",{parentName:"tr",align:null},"Geo-replication"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Do administrators have heavy workloads?"),(0,a.yg)("td",{parentName:"tr",align:null},"No or maybe.",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For the ",(0,a.yg)("strong",{parentName:"td"},"automatic")," cluster-level failover, the cluster switchover is triggered automatically based on the policies set by ",(0,a.yg)("strong",{parentName:"td"},"users"),".",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For the ",(0,a.yg)("strong",{parentName:"td"},"controlled")," cluster-level failover, the switchover is triggered manually by ",(0,a.yg)("strong",{parentName:"td"},"administrators"),"."),(0,a.yg)("td",{parentName:"tr",align:null},"Yes.",(0,a.yg)("br",null),(0,a.yg)("br",null),"If a cluster fails, immediate administration intervention is required.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result in data loss?"),(0,a.yg)("td",{parentName:"tr",align:null},"No.",(0,a.yg)("br",null),(0,a.yg)("br",null),"For both ",(0,a.yg)("strong",{parentName:"td"},"automatic")," and ",(0,a.yg)("strong",{parentName:"td"},"controlled")," cluster-level failover, if the failed primary cluster doesn't replicate messages immediately to the backup cluster, the Pulsar client can't consume the non-replicated messages. After the primary cluster is restored and the Pulsar client switches back, the non-replicated data can still be consumed by the Pulsar client. Consequently, the data is not lost.",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For the ",(0,a.yg)("strong",{parentName:"td"},"automatic")," cluster-level failover, services can be switched and recovered automatically with no data loss.",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For the ",(0,a.yg)("strong",{parentName:"td"},"controlled")," cluster-level failover, services can be switched and recovered manually and data loss may happen."),(0,a.yg)("td",{parentName:"tr",align:null},"Yes.",(0,a.yg)("br",null),(0,a.yg)("br",null),"Pulsar clients and DNS systems have caches. When administrators switch the DNS from a primary cluster to a backup cluster, it takes some time for cache trigger timeout, which delays client recovery time and fails to produce or consume messages.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result in Pulsar client failure?"),(0,a.yg)("td",{parentName:"tr",align:null},"No or maybe.",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For ",(0,a.yg)("strong",{parentName:"td"},"automatic")," cluster-level failover, services can be switched and recovered automatically and the Pulsar client does not fail. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"- For ",(0,a.yg)("strong",{parentName:"td"},"controlled")," cluster-level failover, services can be switched and recovered manually, but the Pulsar client fails before administrators can take action."),(0,a.yg)("td",{parentName:"tr",align:null},"Same as above.")))),(0,a.yg)("h3",{id:"how-does-cluster-level-failover-work"},"How does cluster-level failover work?"),(0,a.yg)("p",null,"This chapter explains the working process of cluster-level failover. For more implementation details, see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/13315"},"PIP-121"),"."),(0,a.yg)(p,{groupId:"failover-choice",defaultValue:"Automatic cluster-level failover",values:[{label:"Automatic cluster-level failover",value:"Automatic cluster-level failover"},{label:"Controlled cluster-level failover",value:"Controlled cluster-level failover"}],mdxType:"Tabs"},(0,a.yg)(v,{value:"Automatic cluster-level failover",mdxType:"TabItem"},(0,a.yg)("p",null,"In an automatic failover cluster, the primary cluster and backup cluster are aware of each other's availability. The automatic failover cluster performs the following actions without administrator intervention:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The Pulsar client runs a probe task at intervals defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"checkInterval"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If the probe task finds the failure time of the primary cluster exceeds the time set in the ",(0,a.yg)("inlineCode",{parentName:"p"},"failoverDelay")," parameter, it searches backup clusters for an available healthy cluster."),(0,a.yg)("p",{parentName:"li"},"2a) If there are healthy backup clusters, the Pulsar client switches to a backup cluster in the order defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"secondary"),"."),(0,a.yg)("p",{parentName:"li"},"2b) If there is no healthy backup cluster, the Pulsar client does not perform the switchover, and the probe task continues to look for an available backup cluster.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The probe task checks whether the primary cluster functions well or not."),(0,a.yg)("p",{parentName:"li"},"3a) If the primary cluster comes back and the continuous healthy time exceeds the time set in ",(0,a.yg)("inlineCode",{parentName:"p"},"switchBackDelay"),", the Pulsar client switches back to the primary cluster."),(0,a.yg)("p",{parentName:"li"},"3b) If the primary cluster does not come back, the Pulsar client does not perform the switchover."))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Workflow of automatic failover cluster",src:l(6670).A,width:"1150",height:"1746"}))),(0,a.yg)(v,{value:"Controlled cluster-level failover",mdxType:"TabItem"},(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The Pulsar client runs a probe task at intervals defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"checkInterval"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The probe task fetches the service URL configuration from the URL provider service, which is configured by ",(0,a.yg)("inlineCode",{parentName:"p"},"urlProvider"),"."),(0,a.yg)("p",{parentName:"li"},"2a) If the service URL configuration is changed, the probe task switches to the target cluster without checking the health status of the target cluster."),(0,a.yg)("p",{parentName:"li"},"2b) If the service URL configuration is not changed, the Pulsar client does not perform the switchover.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"If the Pulsar client switches to the target cluster, the probe task continues to fetch service URL configuration from the URL provider service at intervals defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"checkInterval"),"."),(0,a.yg)("p",{parentName:"li"},"3a) If the service URL configuration is changed, the probe task switches to the target cluster without checking the health status of the target cluster."),(0,a.yg)("p",{parentName:"li"},"3b) If the service URL configuration is not changed, it does not perform the switchover."))),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Workflow of controlled failover cluster",src:l(6167).A,width:"1066",height:"1292"})))),(0,a.yg)("h3",{id:"how-to-use-cluster-level-failover"},"How to use cluster-level failover"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/client-libraries-cluster-level-failover"},"Configure cluster-level failover"),"."))}g.isMDXComponent=!0},79635:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/cluster-level-failover-1-88ca78e0ce3742e8dff1fb1c65abcadc.png"},84024:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/cluster-level-failover-2-47d28c1809d4fc140d3846f09aaa6670.png"},6670:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/cluster-level-failover-4-c999ee966e8755f6c7ad88d0194e839f.png"},6167:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/cluster-level-failover-5-0a93e8702482ebd19c10a1fd8954997d.png"}}]);