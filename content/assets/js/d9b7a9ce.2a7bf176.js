"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=u??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,i]),tabValues:i}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},22416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(10599),l=n(28802);const o={id:"security-oauth2",title:"Authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens"},u=void 0,s={unversionedId:"security-oauth2",id:"version-2.11.x/security-oauth2",title:"Authentication using OAuth 2.0 access tokens",description:'Pulsar supports authenticating clients using OAuth 2.0 access tokens. Using an access token obtained from an OAuth 2.0 authorization service (acts as a token issuer), you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or consuming messages from a topic.',source:"@site/versioned_docs/version-2.11.x/security-oauth2.md",sourceDirName:".",slug:"/security-oauth2",permalink:"/docs/2.11.x/security-oauth2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-oauth2.md",tags:[],version:"2.11.x",frontMatter:{id:"security-oauth2",title:"Authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens"},sidebar:"docsSidebar",previous:{title:"Authentication using Kerberos",permalink:"/docs/2.11.x/security-kerberos"},next:{title:"Authentication using HTTP basic",permalink:"/docs/2.11.x/security-basic-auth"}},c={},p=[{value:"Enable OAuth2 authentication on brokers/proxies",id:"enable-oauth2-authentication-on-brokersproxies",level:2},{value:"Configure OAuth2 authentication in Pulsar clients",id:"configure-oauth2-authentication-in-pulsar-clients",level:2},{value:"Configure OAuth2 authentication in CLI tools",id:"configure-oauth2-authentication-in-cli-tools",level:2},{value:"Authentication types",id:"authentication-types",level:4}],h={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Pulsar supports authenticating clients using OAuth 2.0 access tokens. Using an access token obtained from an OAuth 2.0 authorization service (acts as a token issuer), you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or consuming messages from a topic.'),(0,r.kt)("p",null,"After communicating with the OAuth 2.0 server, the Pulsar client gets an access token from the server and passes this access token to brokers for authentication. By default, brokers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProviderToken"),". Alternatively, you can customize the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationProvider"),"."),(0,r.kt)("h2",{id:"enable-oauth2-authentication-on-brokersproxies"},"Enable OAuth2 authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using OAuth2, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2\nbrokerClientAuthenticationParameters={"privateKey":"file:///path/to/privateKey","audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/","issuerUrl":"https://dev-kt-aa9ne.us.auth0.com"}\n# brokerClientAuthenticationParameters={"privateKey":"data:application/json;base64,privateKey-body-to-base64","audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/","issuerUrl":"https://dev-kt-aa9ne.us.auth0.com"}\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n')),(0,r.kt)("h2",{id:"configure-oauth2-authentication-in-pulsar-clients"},"Configure OAuth2 authentication in Pulsar clients"),(0,r.kt)("p",null,"You can use the OAuth2 authentication provider with the following Pulsar clients."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.impl.auth.oauth2.AuthenticationFactoryOAuth2;\n\nURL issuerUrl = new URL("https://dev-kt-aa9ne.us.auth0.com");\nURL credentialsUrl = new URL("file:///path/to/KeyFile.json");\nString audience = "https://dev-kt-aa9ne.us.auth0.com/api/v2/";\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactoryOAuth2.clientCredentials(issuerUrl, credentialsUrl, audience))\n    .build();\n')),(0,r.kt)("p",null,"In addition, you can also use the encoded parameters to configure authentication for Pulsar Java client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Authentication auth = AuthenticationFactory\n    .create(AuthenticationOAuth2.class.getName(), "{"type":"client_credentials","privateKey":"./key/path/..","issuerUrl":"...","audience":"..."}");\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(auth)\n    .build();\n'))),(0,r.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationOauth2\n\nparams = \'\'\'\n{\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "/path/to/privateKey",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"\n}\n\'\'\'\n\nclient = Client("pulsar://my-cluster:6650", authentication=AuthenticationOauth2(params))\n'))),(0,r.kt)(l.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nstd::string params = R"({\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "../../pulsar-broker/src/test/resources/authentication/token/cpp_credentials_file.json",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"})";\n\nconfig.setAuth(pulsar::AuthOauth2::create(params));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n'))),(0,r.kt)(l.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const Pulsar = require('pulsar-client');\n    const issuer_url = process.env.ISSUER_URL;\n    const private_key = process.env.PRIVATE_KEY;\n    const audience = process.env.AUDIENCE;\n    const scope = process.env.SCOPE;\n    const service_url = process.env.SERVICE_URL;\n    const client_id = process.env.CLIENT_ID;\n    const client_secret = process.env.CLIENT_SECRET;\n    (async () => {\n      const params = {\n        issuer_url: issuer_url\n      }\n      if (private_key.length > 0) {\n        params['private_key'] = private_key\n      } else {\n        params['client_id'] = client_id\n        params['client_secret'] = client_secret\n      }\n      if (audience.length > 0) {\n        params['audience'] = audience\n      }\n      if (scope.length > 0) {\n        params['scope'] = scope\n      }\n      const auth = new Pulsar.AuthenticationOauth2(params);\n      // Create a client\n      const client = new Pulsar.Client({\n        serviceUrl: service_url,\n        tlsAllowInsecureConnection: true,\n        authentication: auth,\n      });\n      await client.close();\n    })();\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The support for OAuth2 authentication is only available in Node.js client 1.6.2 and later versions."))),(0,r.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'oauth := pulsar.NewAuthenticationOAuth2(map[string]string{\n        "type":       "client_credentials",\n        "issuerUrl":  "https://dev-kt-aa9ne.us.auth0.com",\n        "audience":   "https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n        "privateKey": "/path/to/privateKey",\n        "clientId":   "0Xx...Yyxeny",\n    })\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL:              "pulsar://my-cluster:6650",\n        Authentication:   oauth,\n})\n')))),(0,r.kt)("h2",{id:"configure-oauth2-authentication-in-cli-tools"},"Configure OAuth2 authentication in CLI tools"),(0,r.kt)("p",null,"This section describes how to use Pulsar CLI tools to connect a cluster through OAuth2 authentication plugin."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"pulsar-client",value:"pulsar-client"},{label:"pulsar-perf",value:"pulsar-perf"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-admin --admin-url https://streamnative.cloud:443 \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    tenants list\n'))),(0,r.kt)(l.Z,{value:"pulsar-client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-client \\\n    --url SERVICE_URL \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    produce test-topic -m "test-message" -n 10\n'))),(0,r.kt)(l.Z,{value:"pulsar-perf",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'bin/pulsar-perf produce --service-url pulsar+ssl://streamnative.cloud:6651 \\\n    --auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n    --auth-params \'{"privateKey":"file:///path/to/key/file.json",\n        "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n        "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n    -r 1000 -s 1024 test-topic\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"admin-url")," parameter to the Web service URL. A Web service URL is a combination of the protocol, hostname and port ID, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar://localhost:6650"),"."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"privateKey"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"issuerUrl"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"audience")," parameters to the values based on the configuration in the key file. For details, see ",(0,r.kt)("a",{parentName:"li",href:"#authentication-types"},"authentication types"),".")),(0,r.kt)("h4",{id:"authentication-types"},"Authentication types"),(0,r.kt)("p",null,"Currently, Pulsar clients only support the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_credentials")," authentication type. The authentication type determines how to obtain an access token through an OAuth 2.0 authorization service."),(0,r.kt)("p",null,"The following table outlines the parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_credentials")," authentication type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Required or not"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 authentication type."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client_credentials")," (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"issuerUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the authentication provider which allows the Pulsar client to obtain an access token."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://accounts.google.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"privateKey")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to the JSON credentials file."),(0,r.kt)("td",{parentName:"tr",align:null},"Support the following pattern formats: ",(0,r.kt)("br",null)," ",(0,r.kt)("li",null," ",(0,r.kt)("inlineCode",{parentName:"td"},"file:///path/to/file")," "),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"file:/path/to/file")," "),(0,r.kt)("li",null," ",(0,r.kt)("inlineCode",{parentName:"td"},"data:application/json;base64,<base64-encoded value>")," ")),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audience")),(0,r.kt)("td",{parentName:"tr",align:null},'The OAuth 2.0 "resource server" identifier for a Pulsar cluster.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://broker.example.com")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scope")),(0,r.kt)("td",{parentName:"tr",align:null},"The scope of an access request. ",(0,r.kt)("br",null),"For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-3.3"},"access token scope"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"api://pulsar-cluster-1/.default"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("p",null,"The credentials file ",(0,r.kt)("inlineCode",{parentName:"p"},"credentials_file.json")," contains the service account credentials used with the client authentication type. The following is an example of the credentials file. The authentication type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"client_credentials"),' by default. And the fields "client_id" and "client_secret" are required.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "client_credentials",\n  "client_id": "d9ZyX97q1ef8Cr81WHVC4hFQ64vSlDK3",\n  "client_secret": "on1uJ...k6F6R",\n  "client_email": "1234567890-abcdefghijklmnopqrstuvwxyz@developer.gserviceaccount.com",\n  "issuer_url": "https://accounts.google.com"\n}\n')),(0,r.kt)("p",null,"The following is an example of a typical original OAuth2 request, which is used to obtain an access token from the OAuth2 server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://dev-kt-aa9ne.us.auth0.com/oauth/token \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n  "client_id":"Xd23RHsUnvUlP7wchjNYOaIfazgeHd9x",\n  "client_secret":"rT7ps7WY8uhdVuBTKWZkttwLdQotmdEliaM5rLfmgNibvqziZ-g07ZH52N_poGAb",\n  "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n  "grant_type":"client_credentials"}\'\n')),(0,r.kt)("p",null,"In the above example, the mapping relationship is shown below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"issuerUrl")," parameter is mapped to ",(0,r.kt)("inlineCode",{parentName:"li"},"--url https://dev-kt-aa9ne.us.auth0.com"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"privateKey")," parameter should contain the ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret")," fields at least."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"audience")," parameter is mapped to  ",(0,r.kt)("inlineCode",{parentName:"li"},'"audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"'),". This field is only used by some identity providers.")))}m.isMDXComponent=!0}}]);