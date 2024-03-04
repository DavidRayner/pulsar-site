"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42601],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),y=u(t),m=a,s=y["".concat(o,".").concat(m)]||y[m]||d[m]||r;return t?l.createElement(s,i(i({ref:n},p),{},{components:t})):l.createElement(s,i({ref:n},p))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[y]="string"==typeof e?e:a,i[1]=g;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>g,toc:()=>u});var l=t(58168),a=(t(96540),t(15680));const r={id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector"},i=void 0,g={unversionedId:"io-influxdb-sink",id:"version-3.0.x/io-influxdb-sink",title:"InfluxDB sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.0.x/io-influxdb-sink.md",sourceDirName:".",slug:"/io-influxdb-sink",permalink:"/docs/3.0.x/io-influxdb-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/io-influxdb-sink.md",tags:[],version:"3.0.x",frontMatter:{id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector"}},o={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"InfluxDBv2",id:"influxdbv2",level:4},{value:"InfluxDBv1",id:"influxdbv1",level:4},{value:"Example",id:"example",level:3},{value:"InfluxDBv2",id:"influxdbv2-1",level:4},{value:"InfluxDBv1",id:"influxdbv1-1",level:4}],p={toc:u},y="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,a.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,a.yg)("p",null,"The InfluxDB sink connector pulls messages from Pulsar topics and persists the messages to InfluxDB."),(0,a.yg)("p",null,"The InfluxDB sink provides different configurations for InfluxDBv1 and v2 respectively."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The configuration of the InfluxDB sink connector has the following properties."),(0,a.yg)("h3",{id:"property"},"Property"),(0,a.yg)("h4",{id:"influxdbv2"},"InfluxDBv2"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"token")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The authentication token used to authenticate to InfluxDB.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"organization")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The InfluxDB organization to write to.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"bucket")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The InfluxDB bucket to write to.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"precision")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"ns"),(0,a.yg)("td",{parentName:"tr",align:null},"The timestamp precision for writing data to InfluxDB. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Below are the available options:",(0,a.yg)("li",null,"ns",(0,a.yg)("br",null)),(0,a.yg)("li",null,"us",(0,a.yg)("br",null)),(0,a.yg)("li",null,"ms",(0,a.yg)("br",null)),(0,a.yg)("li",null,"s"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"logLevel")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"NONE"),(0,a.yg)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Below are the available options:",(0,a.yg)("li",null,"NONE",(0,a.yg)("br",null)),(0,a.yg)("li",null,"BASIC",(0,a.yg)("br",null)),(0,a.yg)("li",null,"HEADERS",(0,a.yg)("br",null)),(0,a.yg)("li",null,"FULL"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"gzipEnable")),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"1000L"),(0,a.yg)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"200"),(0,a.yg)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,a.yg)("h4",{id:"influxdbv1"},"InfluxDBv1"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"username")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The username used to authenticate to InfluxDB.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"password")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The password used to authenticate to InfluxDB.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"database")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The InfluxDB to which write messages.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"consistencyLevel")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"ONE"),(0,a.yg)("td",{parentName:"tr",align:null},"The consistency level for writing data to InfluxDB. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Below are the available options:",(0,a.yg)("li",null,"ALL",(0,a.yg)("br",null)),(0,a.yg)("li",null," ANY",(0,a.yg)("br",null)),(0,a.yg)("li",null,"ONE",(0,a.yg)("br",null)),(0,a.yg)("li",null,"QUORUM "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"logLevel")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"NONE"),(0,a.yg)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Below are the available options:",(0,a.yg)("li",null,"NONE",(0,a.yg)("br",null)),(0,a.yg)("li",null,"BASIC",(0,a.yg)("br",null)),(0,a.yg)("li",null,"HEADERS",(0,a.yg)("br",null)),(0,a.yg)("li",null,"FULL"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"retentionPolicy")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"autogen"),(0,a.yg)("td",{parentName:"tr",align:null},"The retention policy for InfluxDB.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"gzipEnable")),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"1000L"),(0,a.yg)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"200"),(0,a.yg)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Before using the InfluxDB sink connector, you need to create a configuration file through one of the following methods."),(0,a.yg)("h4",{id:"influxdbv2-1"},"InfluxDBv2"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JSON"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "influxdbUrl": "http://localhost:9999",\n      "organization": "example-org",\n      "bucket": "example-bucket",\n      "token": "xxxx",\n      "precision": "ns",\n      "logLevel": "NONE",\n      "gzipEnable": false,\n      "batchTimeMs": 1000,\n      "batchSize": 100\n   }\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"YAML"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    influxdbUrl: "http://localhost:9999"\n    organization: "example-org"\n    bucket: "example-bucket"\n    token: "xxxx"\n    precision: "ns"\n    logLevel: "NONE"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n')))),(0,a.yg)("h4",{id:"influxdbv1-1"},"InfluxDBv1"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JSON"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "influxdbUrl": "http://localhost:8086",\n      "database": "test_db",\n      "consistencyLevel": "ONE",\n      "logLevel": "NONE",\n      "retentionPolicy": "autogen",\n      "gzipEnable": false,\n      "batchTimeMs": 1000,\n      "batchSize": 100\n   }\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"YAML"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    influxdbUrl: "http://localhost:8086"\n    database: "test_db"\n    consistencyLevel: "ONE"\n    logLevel: "NONE"\n    retentionPolicy: "autogen"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n')))))}d.isMDXComponent=!0}}]);