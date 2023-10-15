"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[23833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=d({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??p;return k({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},91773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(10599),o=n(28802);const l={id:"security-jwt",title:"Authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT"},s=void 0,u={unversionedId:"security-jwt",id:"version-3.0.x/security-jwt",title:"Authentication using tokens based on JSON Web Tokens",description:"Pulsar supports authenticating clients using security tokens based on JSON Web Tokens (RFC-7519), including all the algorithms that the Java JWT library supports.",source:"@site/versioned_docs/version-3.0.x/security-jwt.md",sourceDirName:".",slug:"/security-jwt",permalink:"/docs/3.0.x/security-jwt",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-jwt.md",tags:[],version:"3.0.x",frontMatter:{id:"security-jwt",title:"Authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT"},sidebar:"docsSidebar",previous:{title:"Authentication using mTLS",permalink:"/docs/3.0.x/security-tls-authentication"},next:{title:"Authentication using Athenz",permalink:"/docs/3.0.x/security-athenz"}},c={},p=[{value:"Create client certificates",id:"create-client-certificates",level:2},{value:"Create a secret key",id:"create-a-secret-key",level:3},{value:"Create a key pair",id:"create-a-key-pair",level:3},{value:"Generate tokens",id:"generate-tokens",level:3},{value:"Enable JWT authentication on brokers/proxies",id:"enable-jwt-authentication-on-brokersproxies",level:2},{value:"Configure JWT authentication in CLI Tools",id:"configure-jwt-authentication-in-cli-tools",level:2},{value:"Configure JWT authentication in Pulsar clients",id:"configure-jwt-authentication-in-pulsar-clients",level:2}],m={toc:p},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar supports authenticating clients using security tokens based on ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),"), including all the algorithms that the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jwtk/jjwt#signature-algorithms-keys"},"Java JWT library")," supports."),(0,r.kt)("p",null,'A token is a credential associated with a user. The association is done through a "principal" or "role". In the case of JWT tokens, it typically refers to a ',(0,r.kt)("strong",{parentName:"p"},"subject"),". You can use a token to identify a Pulsar client and associate it with a ",(0,r.kt)("strong",{parentName:"p"},"subject"),' that is permitted to do specific actions, such as publish messages to a topic or consume messages from a topic. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'),(0,r.kt)("p",null,"The application specifies the token when you create the client instance. The user typically gets the token string from the administrator. The compact representation of a signed JWT is a string that looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Always use ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-tls-transport"},"TLS encryption")," when connecting to the Pulsar service, because sending a token is equivalent to sending a password over the wire.")),(0,r.kt)("h2",{id:"create-client-certificates"},"Create client certificates"),(0,r.kt)("p",null,"JWT authentication supports two different kinds of keys to generate and validate the tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Symmetric: A single ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"secret"))," key."),(0,r.kt)("li",{parentName:"ul"},"Asymmetric: A key pair, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"private"))," key to generate tokens."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"public"))," key to validate tokens.")))),(0,r.kt)("h3",{id:"create-a-secret-key"},"Create a secret key"),(0,r.kt)("p",null,"The administrators create the secret key and use it to generate the client tokens. You can also configure this key for brokers to validate the clients."),(0,r.kt)("p",null,"The output file is generated in the root of your Pulsar installation directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-secret-key --output my-secret.key\n")),(0,r.kt)("p",null,"You can also provide an absolute path for the output file using the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-secret-key --output /opt/my-secret.key\n")),(0,r.kt)("p",null,"To generate a base64-encoded private key, enter the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-secret-key --output my-secret.key --base64\n")),(0,r.kt)("h3",{id:"create-a-key-pair"},"Create a key pair"),(0,r.kt)("p",null,"To use asymmetric key encryption, you need to create a pair of keys. The output file is generated in the root of your Pulsar installation directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Store ",(0,r.kt)("inlineCode",{parentName:"li"},"my-private.key")," in a safe location and only the administrators can use this private key to generate new tokens."),(0,r.kt)("li",{parentName:"ul"},"The public key file ",(0,r.kt)("inlineCode",{parentName:"li"},"my-public.key")," is distributed to all Pulsar brokers. You can publicly share it without any security concerns.")),(0,r.kt)("h3",{id:"generate-tokens"},"Generate tokens"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use this command to require the generated token to have a ",(0,r.kt)("strong",{parentName:"p"},"subject")," fieldset. This command prints the token string on ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create a token by passing the "private" key using the command below:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a token with a pre-defined TTL. Then the token is automatically invalidated."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The token itself does not have any permission associated. You need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-authorization#enable-authorization-and-assign-superusers"},"enable authorization and assign superusers"),", and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/pulsar-admin namespaces grant-permission")," command to grant permissions to the token.")),(0,r.kt)("h2",{id:"enable-jwt-authentication-on-brokersproxies"},"Enable JWT authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using JWT, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters={"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw"}\n# Either configure the token string or specify to read it from a file. The following three available formats are all valid:\n# brokerClientAuthenticationParameters={"token":"your-token-string"}\n# brokerClientAuthenticationParameters=token:your-token-string\n# brokerClientAuthenticationParameters=file:///path/to/token\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n')),(0,r.kt)("h2",{id:"configure-jwt-authentication-in-cli-tools"},"Configure JWT authentication in CLI Tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-perf/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-client/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file to use the JWT authentication with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n")),(0,r.kt)("p",null,"The token string can also be read from a file, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"authParams=file:///path/to/token/file\n")),(0,r.kt)("h2",{id:"configure-jwt-authentication-in-pulsar-clients"},"Configure JWT authentication in Pulsar clients"),(0,r.kt)("p",null,"You can use tokens to authenticate the following Pulsar clients."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\uff09\n    .build();\n')),(0,r.kt)("p",null,"Similarly, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        }))\n    .build();\n'))),(0,r.kt)(o.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n")),(0,r.kt)("p",null,"Alternatively, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n"))),(0,r.kt)(o.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n')),(0,r.kt)("p",null,"Similarly, you can also pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: pulsar.NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n        return readToken()\n    }),\n})\n'))),(0,r.kt)(o.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n'))),(0,r.kt)(o.Z,{value:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var client = PulsarClient.Builder()\n                         .AuthenticateUsingToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n                         .Build();\n')))))}d.isMDXComponent=!0}}]);