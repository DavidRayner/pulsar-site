"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21224],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),o=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=o(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,y=m["".concat(i,".").concat(c)]||m[c]||g[c]||p;return n?t.createElement(y,l(l({ref:a},u),{},{components:n})):t.createElement(y,l({ref:a},u))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<p;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30168:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var t=n(58168),r=(n(96540),n(15680));const p={id:"kubernetes-helm",title:"Get started in Kubernetes",sidebar_label:"Run Pulsar in Kubernetes"},l=void 0,s={unversionedId:"kubernetes-helm",id:"version-3.0.x/kubernetes-helm",title:"Get started in Kubernetes",description:"This page has been deprecated and is no longer updated. For the latest and complete information about running Pulsar in Kubernetes, see the quick start guide.",source:"@site/versioned_docs/version-3.0.x/kubernetes-helm.md",sourceDirName:".",slug:"/kubernetes-helm",permalink:"/docs/3.0.x/kubernetes-helm",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/kubernetes-helm.md",tags:[],version:"3.0.x",frontMatter:{id:"kubernetes-helm",title:"Get started in Kubernetes",sidebar_label:"Run Pulsar in Kubernetes"}},i={},o=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Step 0: Prepare a Kubernetes cluster",id:"step-0-prepare-a-kubernetes-cluster",level:2},{value:"Step 1: Install Pulsar Helm chart",id:"step-1-install-pulsar-helm-chart",level:2},{value:"Step 2: Use pulsar-admin to create Pulsar tenants/namespaces/topics",id:"step-2-use-pulsar-admin-to-create-pulsar-tenantsnamespacestopics",level:2},{value:"Step 3: Use Pulsar client to produce and consume messages",id:"step-3-use-pulsar-client-to-produce-and-consume-messages",level:2},{value:"Step 4: Use Pulsar Manager to manage the cluster",id:"step-4-use-pulsar-manager-to-manage-the-cluster",level:2},{value:"Step 5: Use Prometheus and Grafana to monitor cluster",id:"step-5-use-prometheus-and-grafana-to-monitor-cluster",level:2}],u={toc:o},m="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This page has been deprecated and is no longer updated. For the latest and complete information about running Pulsar in Kubernetes, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/getting-started-helm"},"quick start guide"),".")),(0,r.yg)("p",null,"This section guides you through every step of installing and running Apache Pulsar with Helm on Kubernetes quickly, including the following sections:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install the Apache Pulsar on Kubernetes using Helm"),(0,r.yg)("li",{parentName:"ul"},"Start and stop Apache Pulsar"),(0,r.yg)("li",{parentName:"ul"},"Create topics using ",(0,r.yg)("inlineCode",{parentName:"li"},"pulsar-admin")),(0,r.yg)("li",{parentName:"ul"},"Produce and consume messages using Pulsar clients"),(0,r.yg)("li",{parentName:"ul"},"Monitor Apache Pulsar status with Prometheus and Grafana")),(0,r.yg)("p",null,"For deploying a Pulsar cluster for production usage, read the documentation on ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/helm-deploy"},"how to configure and install a Pulsar Helm chart"),"."),(0,r.yg)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Kubernetes server 1.18.0+"),(0,r.yg)("li",{parentName:"ul"},"kubectl 1.18.0+"),(0,r.yg)("li",{parentName:"ul"},"Helm 3.0+")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For the following steps, step 2 and step 3 are for ",(0,r.yg)("strong",{parentName:"p"},"developers")," and step 4 and step 5 are for ",(0,r.yg)("strong",{parentName:"p"},"administrators"),".")),(0,r.yg)("h2",{id:"step-0-prepare-a-kubernetes-cluster"},"Step 0: Prepare a Kubernetes cluster"),(0,r.yg)("p",null,"Before installing a Pulsar Helm chart, you have to create a Kubernetes cluster. You can follow ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/helm-prepare"},"the instructions")," to prepare a Kubernetes cluster."),(0,r.yg)("p",null,"We use ",(0,r.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," in this quick start guide. To prepare a Kubernetes cluster, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a Kubernetes cluster on Minikube."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube start --memory=8192 --cpus=4 --kubernetes-version=<k8s-version>\n")),(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<k8s-version>")," can be any ",(0,r.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/reference/configuration/kubernetes/"},"Kubernetes version supported by your Minikube installation"),", such as ",(0,r.yg)("inlineCode",{parentName:"p"},"v1.16.1"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl")," to use Minikube."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl config use-context minikube\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"To use the ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"Kubernetes Dashboard")," with the local Kubernetes cluster on Minikube, enter the command below:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube dashboard\n")),(0,r.yg)("p",{parentName:"li"},"The command automatically triggers opening a webpage in your browser."))),(0,r.yg)("h2",{id:"step-1-install-pulsar-helm-chart"},"Step 1: Install Pulsar Helm chart"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add Pulsar charts repo."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm repo add apache https://pulsar.apache.org/charts\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Clone the Pulsar Helm chart repository."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the script ",(0,r.yg)("inlineCode",{parentName:"p"},"prepare_helm_release.sh")," to create secrets required for installing the Apache Pulsar Helm chart. The username ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," and password ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," are used for logging into the Grafana dashboard and Pulsar Manager."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./scripts/pulsar/prepare_helm_release.sh \\\n    -n pulsar \\\n    -k pulsar-mini \\\n    -c\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the Pulsar Helm chart to install a Pulsar cluster to Kubernetes."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install \\\n    --values examples/values-minikube.yaml \\\n    --namespace pulsar \\\n    pulsar-mini apache/pulsar\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the status of all pods."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n pulsar\n")),(0,r.yg)("p",{parentName:"li"},"If all pods start up successfully, you can see that the ",(0,r.yg)("inlineCode",{parentName:"p"},"STATUS")," is changed to ",(0,r.yg)("inlineCode",{parentName:"p"},"Running")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Completed"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                                         READY   STATUS      RESTARTS   AGE\npulsar-mini-bookie-0                         1/1     Running     0          9m27s\npulsar-mini-bookie-init-5gphs                0/1     Completed   0          9m27s\npulsar-mini-broker-0                         1/1     Running     0          9m27s\npulsar-mini-grafana-6b7bcc64c7-4tkxd         1/1     Running     0          9m27s\npulsar-mini-prometheus-5fcf5dd84c-w8mgz      1/1     Running     0          9m27s\npulsar-mini-proxy-0                          1/1     Running     0          9m27s\npulsar-mini-pulsar-init-t7cqt                0/1     Completed   0          9m27s\npulsar-mini-pulsar-manager-9bcbb4d9f-htpcs   1/1     Running     0          9m27s\npulsar-mini-toolset-0                        1/1     Running     0          9m27s\npulsar-mini-zookeeper-0                      1/1     Running     0          9m27s\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the status of all services in the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get services -n pulsar\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                         TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE\npulsar-mini-bookie           ClusterIP      None             <none>        3181/TCP,8000/TCP             11m\npulsar-mini-broker           ClusterIP      None             <none>        8080/TCP,6650/TCP             11m\npulsar-mini-grafana          LoadBalancer   10.106.141.246   <pending>     3000:31905/TCP                11m\npulsar-mini-prometheus       ClusterIP      None             <none>        9090/TCP                      11m\npulsar-mini-proxy            LoadBalancer   10.97.240.109    <pending>     80:32305/TCP,6650:31816/TCP   11m\npulsar-mini-pulsar-manager   LoadBalancer   10.103.192.175   <pending>     9527:30190/TCP                11m\npulsar-mini-toolset          ClusterIP      None             <none>        <none>                        11m\npulsar-mini-zookeeper        ClusterIP      None             <none>        2888/TCP,3888/TCP,2181/TCP    11m\n")))),(0,r.yg)("h2",{id:"step-2-use-pulsar-admin-to-create-pulsar-tenantsnamespacestopics"},"Step 2: Use pulsar-admin to create Pulsar tenants/namespaces/topics"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," is the CLI (command-Line Interface) tool for Pulsar. In this step, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," to create resources, including tenants, namespaces, and topics."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"toolset")," container."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n pulsar pulsar-mini-toolset-0 -- /bin/bash\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"toolset")," container, create a tenant named ",(0,r.yg)("inlineCode",{parentName:"p"},"apache"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants create apache\n")),(0,r.yg)("p",{parentName:"li"},"Then you can list the tenants to see if the tenant is created successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants list\n")),(0,r.yg)("p",{parentName:"li"},"You should see a similar output as below. The tenant ",(0,r.yg)("inlineCode",{parentName:"p"},"apache")," has been successfully created."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'"apache"\n"public"\n"pulsar"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"toolset")," container, create a namespace named ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," in the tenant ",(0,r.yg)("inlineCode",{parentName:"p"},"apache"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces create apache/pulsar\n")),(0,r.yg)("p",{parentName:"li"},"Then you can list the namespaces of tenant ",(0,r.yg)("inlineCode",{parentName:"p"},"apache")," to see if the namespace is created successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list apache\n")),(0,r.yg)("p",{parentName:"li"},"You should see a similar output as below. The namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/pulsar")," has been successfully created."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'"apache/pulsar"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"toolset")," container, create a topic ",(0,r.yg)("inlineCode",{parentName:"p"},"test-topic")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"4")," partitions in the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create-partitioned-topic apache/pulsar/test-topic -p 4\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"toolset")," container, list all the partitioned topics in the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics list-partitioned-topics apache/pulsar\n")),(0,r.yg)("p",{parentName:"li"},"Then you can see all the partitioned topics in the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'"persistent://apache/pulsar/test-topic"\n')))),(0,r.yg)("h2",{id:"step-3-use-pulsar-client-to-produce-and-consume-messages"},"Step 3: Use Pulsar client to produce and consume messages"),(0,r.yg)("p",null,"You can use the Pulsar client to create producers and consumers to produce and consume messages."),(0,r.yg)("p",null,"By default, the Pulsar Helm chart exposes the Pulsar cluster through a Kubernetes ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),". In Minikube, you can use the following command to check the proxy service."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get services -n pulsar | grep pulsar-mini-proxy\n")),(0,r.yg)("p",null,"You will see a similar output as below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pulsar-mini-proxy            LoadBalancer   10.97.240.109    <pending>     80:32305/TCP,6650:31816/TCP   28m\n")),(0,r.yg)("p",null,"This output tells what are the node ports that Pulsar cluster's binary port and HTTP port are mapped to. The port after ",(0,r.yg)("inlineCode",{parentName:"p"},"80:")," is the HTTP port while the port after ",(0,r.yg)("inlineCode",{parentName:"p"},"6650:")," is the binary port."),(0,r.yg)("p",null,"Then you can find the IP address and exposed ports of your Minikube server by running the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube service pulsar-mini-proxy -n pulsar\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"|-----------|-------------------|-------------|-------------------------|\n| NAMESPACE |       NAME        | TARGET PORT |           URL           |\n|-----------|-------------------|-------------|-------------------------|\n| pulsar    | pulsar-mini-proxy | http/80     | http://172.17.0.4:32305 |\n|           |                   | pulsar/6650 | http://172.17.0.4:31816 |\n|-----------|-------------------|-------------|-------------------------|\n\ud83c\udfc3  Starting tunnel for service pulsar-mini-proxy.\n|-----------|-------------------|-------------|------------------------|\n| NAMESPACE |       NAME        | TARGET PORT |          URL           |\n|-----------|-------------------|-------------|------------------------|\n| pulsar    | pulsar-mini-proxy |             | http://127.0.0.1:61853 |\n|           |                   |             | http://127.0.0.1:61854 |\n|-----------|-------------------|-------------|------------------------|\n")),(0,r.yg)("p",null,"At this point, you can get the service URLs to connect to your Pulsar client. Here are URL examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"webServiceUrl=http://127.0.0.1:61853/\nbrokerServiceUrl=pulsar://127.0.0.1:61854/\n")),(0,r.yg)("p",null,"Then you can proceed with the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the Apache Pulsar tarball from the ",(0,r.yg)("a",{parentName:"p",href:"/download/"},"downloads page"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Decompress the tarball based on your download file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tar -xf <file-name>.tar.gz\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Expose ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_HOME"),"."),(0,r.yg)("p",{parentName:"li"},"(1) Enter the directory of the decompressed download file."),(0,r.yg)("p",{parentName:"li"},"(2) Expose ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_HOME")," as the environment variable."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export PULSAR_HOME=$(pwd)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure the Pulsar client."),(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"${PULSAR_HOME}/conf/client.conf")," file, replace ",(0,r.yg)("inlineCode",{parentName:"p"},"webServiceUrl")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"brokerServiceUrl")," with the service URLs you get from the above steps.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a subscription to consume messages from ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/pulsar/test-topic"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s sub apache/pulsar/test-topic  -n 0\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal. In the new terminal, create a producer and send 10 messages to the ",(0,r.yg)("inlineCode",{parentName:"p"},"test-topic")," topic."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Verify the results."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"From the producer side"),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"  The messages have been produced successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"18:15:15.489 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 10 messages successfully produced\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"From the consumer side"),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"  At the same time, you can receive the messages as below."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n")))))),(0,r.yg)("h2",{id:"step-4-use-pulsar-manager-to-manage-the-cluster"},"Step 4: Use Pulsar Manager to manage the cluster"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/administration-pulsar-manager"},"Pulsar Manager")," is a web-based GUI management tool for managing and monitoring Pulsar."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"By default, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Pulsar Manager")," is exposed as a separate ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),". You can open the Pulsar Manager UI using the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube service -n pulsar pulsar-mini-pulsar-manager\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The Pulsar Manager UI will be open in your browser. You can use the username ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," and password ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," to log into Pulsar Manager.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In Pulsar Manager UI, you can create an environment."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"New Environment")," button in the top-left corner."),(0,r.yg)("li",{parentName:"ul"},"Type ",(0,r.yg)("inlineCode",{parentName:"li"},"pulsar-mini")," for the field ",(0,r.yg)("inlineCode",{parentName:"li"},"Environment Name")," in the popup window."),(0,r.yg)("li",{parentName:"ul"},"Type ",(0,r.yg)("inlineCode",{parentName:"li"},"http://pulsar-mini-broker:8080")," for the field ",(0,r.yg)("inlineCode",{parentName:"li"},"Service URL")," in the popup window."),(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"Confirm")," button in the popup window."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After successfully creating an environment, you are redirected to the ",(0,r.yg)("inlineCode",{parentName:"p"},"tenants")," page of that environment. Then you can create ",(0,r.yg)("inlineCode",{parentName:"p"},"tenants"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"namespaces")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"topics")," using the Pulsar Manager."))),(0,r.yg)("h2",{id:"step-5-use-prometheus-and-grafana-to-monitor-cluster"},"Step 5: Use Prometheus and Grafana to monitor cluster"),(0,r.yg)("p",null,"Grafana is an open-source visualization tool, which can be used for visualizing time series data into dashboards."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"By default, the Grafana is exposed as a separate ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),". You can open the Grafana UI using the following command:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube service pulsar-mini-grafana -n pulsar\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The Grafana UI is open in your browser. You can use the username ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," and password ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," to log into the Grafana Dashboard.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can view dashboards for different components of a Pulsar cluster."))))}g.isMDXComponent=!0}}]);