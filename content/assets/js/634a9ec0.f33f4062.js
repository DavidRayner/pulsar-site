"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79768],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>g});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),c=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=t,g=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return r?n.createElement(g,i(i({ref:a},p),{},{components:r})):n.createElement(g,i({ref:a},p))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9410:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),t=(r(96540),r(15680));const o={id:"concepts-broker-load-balancing-use-cases",title:"Use cases",sidebar_label:"Use cases"},i=void 0,l={unversionedId:"concepts-broker-load-balancing-use-cases",id:"version-3.1.x/concepts-broker-load-balancing-use-cases",title:"Use cases",description:"Below you can review common use cases for the broker load balancer.",source:"@site/versioned_docs/version-3.1.x/concepts-broker-load-balancing-use-cases.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-use-cases",permalink:"/docs/3.1.x/concepts-broker-load-balancing-use-cases",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/concepts-broker-load-balancing-use-cases.md",tags:[],version:"3.1.x",frontMatter:{id:"concepts-broker-load-balancing-use-cases",title:"Use cases",sidebar_label:"Use cases"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/3.1.x/concepts-broker-load-balancing-overview"},next:{title:"Features",permalink:"/docs/3.1.x/concepts-broker-load-balancing-features"}},s={},c=[{value:"Spread workloads for scaling",id:"spread-workloads-for-scaling",level:2},{value:"High availability with fault tolerance",id:"high-availability-with-fault-tolerance",level:2},{value:"Related topics",id:"related-topics",level:2}],p={toc:c},d="wrapper";function b(e){let{components:a,...o}=e;return(0,t.yg)(d,(0,n.A)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Below you can review common use cases for the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-overview"},"broker load balancer"),". "),(0,t.yg)("h2",{id:"spread-workloads-for-scaling"},"Spread workloads for scaling"),(0,t.yg)("p",null,"The broker load balancer routes incoming data processing requests to available brokers for stable performance, making it ideal for quick horizontal scaling \u2014 whether in response to sudden traffic spikes or deliberate business expansions. In this case, you can run high-traffic applications with a lot of concurrent data requests in a fast and reliable manner. "),(0,t.yg)("h2",{id:"high-availability-with-fault-tolerance"},"High availability with fault tolerance"),(0,t.yg)("p",null,"The broker load balancer can increase cluster availability by re-routing data loads to other available brokers if a broker fails. This failover mechanism ensures the availability of the whole system. "),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Broker load balance - high availability with fault tolerance",src:r(94301).A,width:"936",height:"586"})),(0,t.yg)("h2",{id:"related-topics"},"Related topics"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To get a comprehensive understanding and discover the key insights, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-overview"},"Broker load balancing | Overview"),". ")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To explore functionalities, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To understand advantages, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-benefits"},"Broker load balancing | Benefits"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To review various versions of broker load balancers, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-types"},"Broker load balancing | Types"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To get up quickly, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-quick-start"},"Broker load balancing | Quick start"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To migrate one broker load balancer type to another, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.1.x/concepts-broker-load-balancing-migration"},"Broker load balancing | Migration"),"."))))}b.isMDXComponent=!0},94301:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/broker-load-balancing-7-9b129d09395bdae179cfa7a7bc83c55a.png"}}]);