"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40273],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),y=a,d=c["".concat(s,".").concat(y)]||c[y]||g[y]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={id:"functions-worker-run-separately",title:"Run function workers separately",sidebar_label:"Run function workers separately"},i=void 0,l={unversionedId:"functions-worker-run-separately",id:"version-3.1.x/functions-worker-run-separately",title:"Run function workers separately",description:"The following diagram illustrates how function workers run as a separate process in separate machines.",source:"@site/versioned_docs/version-3.1.x/functions-worker-run-separately.md",sourceDirName:".",slug:"/functions-worker-run-separately",permalink:"/docs/3.1.x/functions-worker-run-separately",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-worker-run-separately.md",tags:[],version:"3.1.x",frontMatter:{id:"functions-worker-run-separately",title:"Run function workers separately",sidebar_label:"Run function workers separately"},sidebar:"docsSidebar",previous:{title:"Run function workers with brokers",permalink:"/docs/3.1.x/functions-worker-corun"},next:{title:"Configure temporary file path",permalink:"/docs/3.1.x/functions-worker-temp-file-path"}},s={},u=[{value:"Configure function workers to run separately",id:"configure-function-workers-to-run-separately",level:2},{value:"Configure worker parameters",id:"configure-worker-parameters",level:3},{value:"Configure function package parameters",id:"configure-function-package-parameters",level:3},{value:"Configure function metadata parameters",id:"configure-function-metadata-parameters",level:3},{value:"Enable security settings",id:"enable-security-settings",level:3},{value:"Enable TLS encryption",id:"enable-tls-encryption",level:4},{value:"Enable authentication providers",id:"enable-authentication-providers",level:4},{value:"Enable authorization providers",id:"enable-authorization-providers",level:4},{value:"Configure BookKeeper authentication",id:"configure-bookkeeper-authentication",level:3},{value:"Start function workers",id:"start-function-workers",level:2},{value:"Configure proxies for standalone function workers",id:"configure-proxies-for-standalone-function-workers",level:2}],p={toc:u},c="wrapper";function g(e){let{components:n,...o}=e;return(0,a.yg)(c,(0,r.A)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The following diagram illustrates how function workers run as a separate process in separate machines."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"assets/functions-worker-separated.svg",src:t(23840).A,width:"1300",height:"543"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Service URLs")," in the illustration represent Pulsar service URLs that Pulsar client and Pulsar admin use to connect to a Pulsar cluster.")),(0,a.yg)("p",null,"To set up function workers that run separately, complete the following steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#configure-function-workers-to-run-separately"},"Configure function workers")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#start-function-workers"},"Start function workers")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"#configure-proxies-for-standalone-function-workers"},"Configure proxies for function workers"))),(0,a.yg)("h2",{id:"configure-function-workers-to-run-separately"},"Configure function workers to run separately"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To run function workers separately, you need to keep ",(0,a.yg)("inlineCode",{parentName:"p"},"functionsWorkerEnabled")," as its default value (",(0,a.yg)("inlineCode",{parentName:"p"},"false"),") in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/broker.conf")," file.")),(0,a.yg)("h3",{id:"configure-worker-parameters"},"Configure worker parameters"),(0,a.yg)("p",null,"Configure the required parameters for workers in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"workerId"),": The identity of a worker node, which is unique across clusters. The type is string."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"workerHostname"),": The hostname of the worker node."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"workerPort"),": The port that the worker server listens on. Keep it as default if you don't customize it. Set it to ",(0,a.yg)("inlineCode",{parentName:"li"},"null")," to disable the plaintext port."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"workerPortTls"),": The TLS port that the worker server listens on. Keep it as default if you don't customize it. For more information about TLS encryption settings, refer to ",(0,a.yg)("a",{parentName:"li",href:"#enable-tls-encryption"},"settings"),".")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"When accessing function workers to manage functions, the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI or any of the clients should use the configured ",(0,a.yg)("inlineCode",{parentName:"p"},"workerHostname")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"workerPort")," to generate an ",(0,a.yg)("inlineCode",{parentName:"p"},"--admin-url"),".")),(0,a.yg)("h3",{id:"configure-function-package-parameters"},"Configure function package parameters"),(0,a.yg)("p",null,"Configure the ",(0,a.yg)("inlineCode",{parentName:"p"},"numFunctionPackageReplicas")," parameter in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. It indicates the number of replicas to store function packages."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To ensure high availability in a production deployment, set ",(0,a.yg)("inlineCode",{parentName:"p"},"numFunctionPackageReplicas")," to equal the number of bookies. The default value ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," is only for one-node cluster deployment.")),(0,a.yg)("h3",{id:"configure-function-metadata-parameters"},"Configure function metadata parameters"),(0,a.yg)("p",null,"Configure the required parameter for function metadata in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pulsarServiceUrl"),": The Pulsar service URL for your broker cluster."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pulsarWebServiceUrl"),": The Pulsar web service URL for your broker cluster."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pulsarFunctionsCluster"),": Set the value to your Pulsar cluster name (same as the ",(0,a.yg)("inlineCode",{parentName:"li"},"clusterName")," setting in the ",(0,a.yg)("inlineCode",{parentName:"li"},"conf/broker.conf")," file).")),(0,a.yg)("p",null,"If authentication is enabled on your broker cluster, you must configure the following authentication settings for the function workers to communicate with the brokers."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"brokerClientAuthenticationEnabled"),": Whether to enable the broker client authentication used by function workers to talk to brokers."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clientAuthenticationPlugin"),": The authentication plugin to be used by the Pulsar client used in worker service."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clientAuthenticationParameters"),": The authentication parameter to be used by the Pulsar client used in worker service.")),(0,a.yg)("h3",{id:"enable-security-settings"},"Enable security settings"),(0,a.yg)("p",null,"When you run a function worker separately in a cluster configured with authentication, your function worker needs to communicate with the broker and authenticate incoming requests. Thus you need to configure the properties that the broker requires for authentication and authorization."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You must configure both the function worker authentication and authorization for the server to authenticate incoming requests and configure the client to be authenticated to communicate with the broker.")),(0,a.yg)("p",null,"For example, if you use token authentication, you need to configure the following properties in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/function-worker.yml")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'brokerClientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters: file:///etc/pulsar/token/admin-token.txt\nconfigurationMetadataStoreUrl: zk:zookeeper-cluster:2181 # auth requires a connection to zookeeper\nauthenticationProviders:\n - "org.apache.pulsar.broker.authentication.AuthenticationProviderToken"\nauthorizationEnabled: true\nauthenticationEnabled: true\nsuperUserRoles:\n  - superuser\n  - proxy\nproperties:\n  tokenSecretKey: file:///etc/pulsar/jwt/secret # if using a secret token, key file must be DER-encoded\n  tokenPublicKey: file:///etc/pulsar/jwt/public.key # if using public/private key tokens, key file must be DER-encoded\n')),(0,a.yg)("p",null,"You can enable the following security settings on function workers."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#enable-tls-encryption"},"Enable TLS encryption")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#enable-authentication-providers"},"Enable authentication providers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#enable-authorization-providers"},"Enable authorization providers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.1.x/functions-deploy-cluster-encryption"},"Enable end-to-end encryption"))),(0,a.yg)("h4",{id:"enable-tls-encryption"},"Enable TLS encryption"),(0,a.yg)("p",null,"To enable TLS encryption, configure the following settings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"useTLS: true\npulsarServiceUrl: pulsar+ssl://localhost:6651/\npulsarWebServiceUrl: https://localhost:8443\n\ntlsEnabled: true\ntlsCertificateFilePath: /path/to/functions-worker.cert.pem\ntlsKeyFilePath:         /path/to/functions-worker.key-pk8.pem\ntlsTrustCertsFilePath:  /path/to/ca.cert.pem\n\n// The path to trusted certificates used by the Pulsar client to authenticate with Pulsar brokers\nbrokerClientTrustCertsFilePath: /path/to/ca.cert.pem\n")),(0,a.yg)("p",null,"For more details on TLS encryption, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-tls-transport"},"Transport Encryption using TLS"),"."),(0,a.yg)("h4",{id:"enable-authentication-providers"},"Enable authentication providers"),(0,a.yg)("p",null,"To enable authentication providers on function workers, substitute the ",(0,a.yg)("inlineCode",{parentName:"p"},"authenticationProviders")," parameter with the providers you want to enable."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"authenticationEnabled: true\nauthenticationProviders: [provider1, provider2]\n")),(0,a.yg)("p",null,"For ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-tls-authentication"},"mTLS authentication")," provider, follow the example below to add the required settings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"brokerClientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters: tlsCertFile:/path/to/admin.cert.pem,tlsKeyFile:/path/to/admin.key-pk8.pem\n\nauthenticationEnabled: true\nauthenticationProviders: ['org.apache.pulsar.broker.authentication.AuthenticationProviderTls']\n")),(0,a.yg)("p",null,"For SASL authentication provider, add ",(0,a.yg)("inlineCode",{parentName:"p"},"saslJaasClientAllowedIds")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"saslJaasServerSectionName")," under ",(0,a.yg)("inlineCode",{parentName:"p"},"properties"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"properties:\n  saslJaasClientAllowedIds: .*pulsar.*\n  saslJaasServerSectionName: Broker\n")),(0,a.yg)("p",null,"For ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/security-jwt"},"token authentication")," provider, add the required settings under ",(0,a.yg)("inlineCode",{parentName:"p"},"properties"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"properties:\n  tokenSecretKey:       file://my/secret.key\n  # If using public/private\n  # tokenPublicKey:     file://path/to/public.key\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Key files must be DER (Distinguished Encoding Rules)-encoded.")),(0,a.yg)("h4",{id:"enable-authorization-providers"},"Enable authorization providers"),(0,a.yg)("p",null,"To enable authorization on function workers, complete the following steps."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Configure ",(0,a.yg)("inlineCode",{parentName:"p"},"authorizationEnabled"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"authorizationProvider")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"configurationMetadataStoreUrl")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"functions_worker.yml")," file. The authentication provider connects to ",(0,a.yg)("inlineCode",{parentName:"p"},"configurationMetadataStoreUrl")," to receive namespace policies."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"authorizationEnabled: true\nauthorizationProvider: org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\nconfigurationMetadataStoreUrl: <meta-type>:<configuration-metadata-store-url>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Configure a list of superuser roles. The superuser roles can access any admin API. The following configuration is an example."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"superUserRoles:\n  - role1\n  - role2\n  - role3\n")))),(0,a.yg)("h3",{id:"configure-bookkeeper-authentication"},"Configure BookKeeper authentication"),(0,a.yg)("p",null,"If authentication is enabled on the BookKeeper cluster, you need to configure the following BookKeeper authentication settings for your function workers."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationPlugin"),": the authentication plugin name of BookKeeper client."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParametersName"),": the authentication plugin parameters of BookKeeper client, including names and values."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParameters"),": the authentication plugin parameters of BookKeeper client.")),(0,a.yg)("h2",{id:"start-function-workers"},"Start function workers"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Before starting function workers, make sure ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/functions-runtime"},"function runtime")," is configured.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"You can start a function worker in the background by using the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/reference-cli-tools"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-daemon start functions-worker\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"To start a function worker in the foreground, you can use the ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/pulsar-admin/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI as follows."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar functions-worker\n")))),(0,a.yg)("h2",{id:"configure-proxies-for-standalone-function-workers"},"Configure proxies for standalone function workers"),(0,a.yg)("p",null,"When you are running function workers in a separate cluster, the admin rest endpoints are split into two clusters as shown in the following figure. The ",(0,a.yg)("inlineCode",{parentName:"p"},"functions"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"function-worker"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"source"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"sink")," endpoints are now served by the worker cluster, while all the other remaining endpoints are served by the broker cluster. This requires you to use the right service URL accordingly in the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI. To address this inconvenience, you can start a proxy cluster that serves as the central entry point of the admin service for routing admin rest requests."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"assets/functions-worker-separated-proxy.svg",src:t(14574).A,width:"1300",height:"851"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If you haven't set up a proxy cluster yet, follow the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.1.x/administration-proxy"},"instructions")," to deploy one.")),(0,a.yg)("p",null,"To enable a proxy for routing function-related admin requests to function workers, you can edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file to modify the following settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-conf"},"functionWorkerWebServiceURL=<pulsar-functions-worker-web-service-url>\nfunctionWorkerWebServiceURLTLS=<pulsar-functions-worker-web-service-url>\n")))}g.isMDXComponent=!0},14574:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/function-workers-separated-with-proxy-026953ca9af6f74aafbe947fd6f47796.svg"},23840:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/function-workers-separated-67f57c127c07431c91ef54e0632de4d4.svg"}}]);