"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56981],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(s,".").concat(g)]||p[g]||y[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const i={id:"security-token-admin",title:"Token authentication admin",sidebar_label:"Token authentication admin"},o=void 0,l={unversionedId:"security-token-admin",id:"version-3.1.x/security-token-admin",title:"Token authentication admin",description:"Token Authentication Overview",source:"@site/versioned_docs/version-3.1.x/security-token-admin.md",sourceDirName:".",slug:"/security-token-admin",permalink:"/docs/3.1.x/security-token-admin",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/security-token-admin.md",tags:[],version:"3.1.x",frontMatter:{id:"security-token-admin",title:"Token authentication admin",sidebar_label:"Token authentication admin"}},s={},u=[{value:"Token Authentication Overview",id:"token-authentication-overview",level:2},{value:"Secret vs Public/Private keys",id:"secret-vs-publicprivate-keys",level:2},{value:"Secret key",id:"secret-key",level:3},{value:"Creating a secret key",id:"creating-a-secret-key",level:4},{value:"Public/Private keys",id:"publicprivate-keys",level:3},{value:"Creating a key pair",id:"creating-a-key-pair",level:4},{value:"Generating tokens",id:"generating-tokens",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Enabling Token Authentication ...",id:"enabling-token-authentication-",level:2},{value:"... on Brokers",id:"-on-brokers",level:3},{value:"... on Proxies",id:"-on-proxies",level:3}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"token-authentication-overview"},"Token Authentication Overview"),(0,r.yg)("p",null,"Pulsar supports authenticating clients using security tokens that are based on ",(0,r.yg)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),")."),(0,r.yg)("p",null,'Tokens are used to identify a Pulsar client and associate with some "principal" (or "role") which\nwill be then granted permissions to do some actions (eg: publish or consume from a topic).'),(0,r.yg)("p",null,"A user will typically be given a token string by an administrator (or some automated service)."),(0,r.yg)("p",null,"The compact representation of a signed JWT is a string that looks like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n")),(0,r.yg)("p",null,'The application specifies the token when creating the client instance. An alternative is to pass\na "token supplier", that is to say, a function that returns the token when the client library\nwill need one.'),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"always-use-tls-transport-encryption"},"Always use TLS transport encryption"),(0,r.yg)("p",{parentName:"blockquote"},"Sending a token is equivalent to sending a password over the wire. It is strongly recommended to\nalways use TLS encryption when talking to the Pulsar service. See\n",(0,r.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-tls-transport"},"Transport Encryption using TLS"))),(0,r.yg)("h2",{id:"secret-vs-publicprivate-keys"},"Secret vs Public/Private keys"),(0,r.yg)("p",null,"JWT supports two different kinds of keys to generate and validate the tokens:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Symmetric:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"there is a single ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Secret"))," key that is used both to generate and validate"))),(0,r.yg)("li",{parentName:"ul"},"Asymmetric: there is a pair of keys.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Private"))," key is used to generate tokens"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Public"))," key is used to validate tokens")))),(0,r.yg)("h3",{id:"secret-key"},"Secret key"),(0,r.yg)("p",null,"When using a secret key, the administrator will create the key and he will\nuse it to generate the client tokens. This key will be also configured to\nthe brokers to allow them to validate the clients."),(0,r.yg)("h4",{id:"creating-a-secret-key"},"Creating a secret key"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Output file will be generated in the root of your pulsar installation directory. You can also provide absolute path for the output file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-secret-key --output my-secret.key\n")),(0,r.yg)("p",null,"To generate base64 encoded private key"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n")),(0,r.yg)("h3",{id:"publicprivate-keys"},"Public/Private keys"),(0,r.yg)("p",null,"With public/private, we need to create a pair of keys. Pulsar supports all algorithms supported by the Java JWT library shown ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/jwtk/jjwt#signature-algorithms-keys"},"here")),(0,r.yg)("h4",{id:"creating-a-key-pair"},"Creating a key pair"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Output file will be generated in the root of your pulsar installation directory. You can also provide absolute path for the output file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"my-private.key")," will be stored in a safe location and only used by administrators to generate\nnew tokens."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"my-public.key")," will be distributed to all Pulsar brokers. This file can be publicly shared without\nany security concerns.")),(0,r.yg)("h2",{id:"generating-tokens"},"Generating tokens"),(0,r.yg)("p",null,'A token is a credential associated with a user. The association is done through the "principal",\nor "role". In the case of JWT tokens, this field it\'s typically referred to as ',(0,r.yg)("strong",{parentName:"p"},"subject"),", though\nit's exactly the same concept."),(0,r.yg)("p",null,"The generated token is then required to have a ",(0,r.yg)("strong",{parentName:"p"},"subject")," fieldset."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n         --subject test-user\n")),(0,r.yg)("p",null,"This will print the token string on stdout."),(0,r.yg)("p",null,'Similarly, one can create a token by passing the "private" key:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n         --subject test-user\n")),(0,r.yg)("p",null,"Finally, a token can also be created with a pre-defined TTL. After that time,\nthe token will be automatically invalidated."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n         --subject test-user \\\n         --expiry-time 1y\n")),(0,r.yg)("h2",{id:"authorization"},"Authorization"),(0,r.yg)("p",null,"The token itself doesn't have any permission associated. That will be determined by the\nauthorization engine. Once the token is created, one can grant permission for this token to do certain\nactions. Eg. :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n         --role test-user \\\n         --actions produce,consume\n")),(0,r.yg)("h2",{id:"enabling-token-authentication-"},"Enabling Token Authentication ..."),(0,r.yg)("h3",{id:"-on-brokers"},"... on Brokers"),(0,r.yg)("p",null,"To configure brokers to authenticate clients, put the following in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n")),(0,r.yg)("h3",{id:"-on-proxies"},"... on Proxies"),(0,r.yg)("p",null,"To configure proxies to authenticate clients, put the following in ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy.conf"),":"),(0,r.yg)("p",null,"The proxy will have its own token used when talking to brokers. The role token for this\nkey pair should be configured in the ",(0,r.yg)("inlineCode",{parentName:"p"},"proxyRoles")," of the brokers. See the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-authorization"},"authorization guide")," for more details."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},'# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters={"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw"}\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\n')))}y.isMDXComponent=!0}}]);