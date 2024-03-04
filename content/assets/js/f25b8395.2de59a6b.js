"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[77007],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=p(a),m=i,g=h["".concat(l,".").concat(m)]||h[m]||s[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[h]="string"==typeof e?e:i,o[1]=u;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(58168),i=(a(96540),a(15680));const r={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},o=void 0,u={unversionedId:"security-extending",id:"version-3.1.x/security-extending",title:"Extend Authentication and Authorization in Pulsar",description:"Pulsar provides a way to use custom authentication and authorization mechanisms.",source:"@site/versioned_docs/version-3.1.x/security-extending.md",sourceDirName:".",slug:"/security-extending",permalink:"/docs/3.1.x/security-extending",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/security-extending.md",tags:[],version:"3.1.x",frontMatter:{id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},sidebar:"docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/3.1.x/security-authorization"},next:{title:"Pulsar Perf",permalink:"/docs/3.1.x/performance-pulsar-perf"}},l={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Broker/Proxy authentication plugin",id:"brokerproxy-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}],c={toc:p},h="wrapper";function s(e){let{components:t,...a}=e;return(0,i.yg)(h,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Pulsar provides a way to use custom authentication and authorization mechanisms."),(0,i.yg)("h2",{id:"authentication"},"Authentication"),(0,i.yg)("p",null,"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Client authentication plugin ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," provides the authentication data for broker/proxy."),(0,i.yg)("li",{parentName:"ul"},"Broker/Proxy authentication plugin ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," authenticates the authentication data from clients.")),(0,i.yg)("h3",{id:"client-authentication-plugin"},"Client authentication plugin"),(0,i.yg)("p",null,"For the client library, you need to implement ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.Authentication"),". By entering the command below, you can pass this class when you create a Pulsar client."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n')),(0,i.yg)("p",null,"You can implement 2 interfaces on the client side:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/client/3.1.x/org/apache/pulsar/client/api/Authentication.html"},(0,i.yg)("inlineCode",{parentName:"a"},"Authentication"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/client/3.1.x/org/apache/pulsar/client/api/AuthenticationDataProvider.html"},(0,i.yg)("inlineCode",{parentName:"a"},"AuthenticationDataProvider")))),(0,i.yg)("p",null,"This in turn requires you to provide the client credentials in the form of ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," and also leaves the chance to return different kinds of authentication tokens for different types of connections or by passing a certificate chain to use for TLS."),(0,i.yg)("p",null,"You can find the following examples for different client authentication plugins:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java"},"Mutual TLS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java"},"Athenz")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java"},"Kerberos")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java"},"JSON Web Token (JWT)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java"},"OAuth 2.0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java"},"Basic auth"))),(0,i.yg)("h3",{id:"brokerproxy-authentication-plugin"},"Broker/Proxy authentication plugin"),(0,i.yg)("p",null,"On the broker/proxy side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."),(0,i.yg)("p",null,"In ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/broker.conf"),", you can choose to specify a list of valid providers:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Pulsar supports an authentication provider chain that contains multiple authentication providers with the same authentication method name."),(0,i.yg)("p",{parentName:"admonition"},"For example, your Pulsar cluster uses JSON Web Token (JWT) authentication (with an authentication method named ",(0,i.yg)("inlineCode",{parentName:"p"},"token"),") and you want to upgrade it to use OAuth2.0 authentication with the same authentication name. In this case, you can implement your own authentication provider ",(0,i.yg)("inlineCode",{parentName:"p"},"AuthenticationProviderOAuth2")," and configure ",(0,i.yg)("inlineCode",{parentName:"p"},"authenticationProviders")," as follows."),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"authenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken,org.apache.pulsar.broker.authentication.AuthenticationProviderOAuth2\n")),(0,i.yg)("p",{parentName:"admonition"},"As a result, brokers look up the authentication providers with the ",(0,i.yg)("inlineCode",{parentName:"p"},"token")," authentication method (JWT and OAuth2.0 authentication) when receiving requests to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"token")," authentication method. If a client cannot be authenticated via JWT authentication, OAuth2.0 authentication is used.")),(0,i.yg)("p",null,"For the implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," interface, refer to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java"},"code"),"."),(0,i.yg)("p",null,"You can find the following examples for different broker authentication plugins:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"},"Mutual TLS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"},"Athenz")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java"},"Kerberos")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"JSON Web Token (JWT)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"Basic auth"))),(0,i.yg)("h2",{id:"authorization"},"Authorization"),(0,i.yg)("p",null,'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'),(0,i.yg)("p",null,"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."),(0,i.yg)("h3",{id:"broker-authorization-plugin"},"Broker authorization plugin"),(0,i.yg)("p",null,"To provide a custom authorization provider, you need to implement the ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n")),(0,i.yg)("p",null,"For the implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, refer to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java"},"code"),"."))}s.isMDXComponent=!0}}]);