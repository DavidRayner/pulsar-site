"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=d({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=s??p;return h({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(p(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},93982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(10599),l=n(28802);const o={id:"security-tls-authentication",title:"Authentication using mTLS",sidebar_label:"Authentication using mTLS"},s=void 0,u={unversionedId:"security-tls-authentication",id:"version-3.0.x/security-tls-authentication",title:"Authentication using mTLS",description:"mTLS authentication overview",source:"@site/versioned_docs/version-3.0.x/security-tls-authentication.md",sourceDirName:".",slug:"/security-tls-authentication",permalink:"/docs/3.0.x/security-tls-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-tls-authentication.md",tags:[],version:"3.0.x",frontMatter:{id:"security-tls-authentication",title:"Authentication using mTLS",sidebar_label:"Authentication using mTLS"},sidebar:"docsSidebar",previous:{title:"Bouncy Castle Providers",permalink:"/docs/3.0.x/security-bouncy-castle"},next:{title:"Authentication using JWT",permalink:"/docs/3.0.x/security-jwt"}},c={},p=[{value:"mTLS authentication overview",id:"mtls-authentication-overview",level:2},{value:"Enable mTLS authentication on brokers",id:"enable-mtls-authentication-on-brokers",level:2},{value:"Enable mTLS authentication on proxies",id:"enable-mtls-authentication-on-proxies",level:2},{value:"Configure mTLS authentication in Pulsar clients",id:"configure-mtls-authentication-in-pulsar-clients",level:2},{value:"Configure mTLS authentication in CLI tools",id:"configure-mtls-authentication-in-cli-tools",level:2},{value:"Configure mTLS authentication with KeyStore",id:"configure-mtls-authentication-with-keystore",level:2},{value:"Configure brokers",id:"configure-brokers",level:3},{value:"Configure clients",id:"configure-clients",level:3}],m={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mtls-authentication-overview"},"mTLS authentication overview"),(0,a.kt)("p",null,"Mutual TLS (mTLS) is a mutual authentication mechanism. Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients."),(0,a.kt)("p",null,"The following figure illustrates how Pulsar processes mTLS authentication between clients and servers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pulsar mTLS authentication process",src:n(12042).Z,width:"1504",height:"327"})),(0,a.kt)("h2",{id:"enable-mtls-authentication-on-brokers"},"Enable mTLS authentication on brokers"),(0,a.kt)("p",null,"To configure brokers to authenticate clients using mTLS, add the following parameters to the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),". If you use a standalone Pulsar, you need to add these parameters to the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect brokers\nbrokerClientTlsEnabled=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/admin.cert.pem","tlsKeyFile":"/path/to/admin.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/broker.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n\n# Tls cert refresh duration in seconds (set 0 to check on every new connection)\ntlsCertRefreshCheckDurationSec=300\n')),(0,a.kt)("h2",{id:"enable-mtls-authentication-on-proxies"},"Enable mTLS authentication on proxies"),(0,a.kt)("p",null,"To configure proxies to authenticate clients using mTLS, add the following parameters to the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect proxies\ntlsEnabledWithBroker=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/admin.cert.pem","tlsKeyFile":"/path/to/admin.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/proxy.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/proxy.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n')),(0,a.kt)("h2",{id:"configure-mtls-authentication-in-pulsar-clients"},"Configure mTLS authentication in Pulsar clients"),(0,a.kt)("p",null,"When using mTLS authentication, clients connect via TLS transport. You need to configure clients to use ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"8443")," port for the web service URL, use ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar+ssl://")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"6651")," port for the broker service URL."),(0,a.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem")\n    .build();\n'))),(0,a.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n'))),(0,a.kt)(l.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/my-role.cert.pem",\n                                                         "/path/to/my-role.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n'))),(0,a.kt)(l.Z,{value:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/my-role.cert.pem',\n    privateKeyPath: '/path/to/my-role.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n"))),(0,a.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(ClientOptions{\n        URL:                   "pulsar+ssl://broker.example.com:6651/",\n        TLSTrustCertsFilePath: "/path/to/ca.cert.pem",\n        Authentication:        pulsar.NewAuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem"),\n    })\n'))),(0,a.kt)(l.Z,{value:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n')))),(0,a.kt)("h2",{id:"configure-mtls-authentication-in-cli-tools"},"Configure mTLS authentication in CLI tools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-cli-tools"},"Command-line tools")," like ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-perf/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-client/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,a.kt)("p",null,"To use mTLS authentication with the CLI tools of Pulsar, you need to add the following parameters to the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file, alongside ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-tls-transport#configure-mtls-encryption-in-cli-tools"},"the configurations to enable mTLS encryption"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem\n")),(0,a.kt)("h2",{id:"configure-mtls-authentication-with-keystore"},"Configure mTLS authentication with KeyStore"),(0,a.kt)("p",null,"Apache Pulsar supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-tls-transport"},"TLS encryption")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-tls-authentication"},"mTLS authentication")," between clients and Apache Pulsar service. By default, it uses PEM format file configuration. This section describes how to use the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_KeyStore"},"KeyStore")," type to configure mTLS authentication."),(0,a.kt)("h3",{id:"configure-brokers"},"Configure brokers"),(0,a.kt)("p",null,"Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"broker.conf")," file as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n')),(0,a.kt)("h3",{id:"configure-clients"},"Configure clients"),(0,a.kt)("p",null,"Besides configuring ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-tls-transport"},"TLS encryption"),", you need to configure the KeyStore, which contains a valid CN as client role, for clients."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-cli-tools"},"Command-line tools")," like ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-perf/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,a.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-client/"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-client")),", set the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in a Pulsar installation."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for Java client"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .enableTlsHostnameVerification(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for Java admin client"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .enableTlsHostnameVerification(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n')))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"tlsTrustStorePath")," when you set ",(0,a.kt)("inlineCode",{parentName:"p"},"useKeyStoreTls")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")))}d.isMDXComponent=!0},12042:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mTLS-authentication-09425e733cb0c7886c30d04008cf6d85.svg"}}]);