"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[605],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=l,v=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return t?n.createElement(v,s(s({ref:a},u),{},{components:t})):n.createElement(v,s({ref:a},u))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),l=t(86010);const r="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(87462),l=t(67294),r=t(86010),s=t(72389),i=t(67392),o=t(7094),p=t(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:s,values:d,groupId:c,className:v}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,i.l)(b,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,o.U)(),[y,N]=(0,l.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==y&&b.some((a=>a.value===e))&&N(e)}const E=e=>{const a=e.currentTarget,t=I.indexOf(a),n=b[t].value;n!==y&&(x(a),N(n),null!=c&&T(c,String(n)))},w=e=>{let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},v)},b.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>I.push(e),onKeyDown:w,onClick:E},s,{className:(0,r.Z)("tabs__item",m,s?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function c(e){const a=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},95629:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=t(87462),l=(t(67294),t(3905)),r=t(65488),s=t(85162);const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},o=void 0,p={unversionedId:"admin-api-tenants",id:"admin-api-tenants",title:"Managing Tenants",description:"This page only shows some frequently used operations.",source:"@site/docs/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/next/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-tenants.md",tags:[],version:"current",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},sidebar:"docsSidebar",previous:{title:"Clusters",permalink:"/docs/next/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/next/admin-api-brokers"}},u={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],d={toc:m};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"li"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin doc")),(0,l.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"li"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc."),(0,l.kt)("li",{parentName:"ul"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"li"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"Java admin API doc"),"."))),(0,l.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Admin roles"),(0,l.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,l.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"You can list all of the tenants associated with an ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"list"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants list\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"my-tenant-1\nmy-tenant-2\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.2&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenants();\n")))),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("p",null,"You can create a new tenant."),(0,l.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"create"))," subcommand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant\n")),(0,l.kt)("p",null,"When creating a tenant, you can optionally assign admin roles using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--admin-roles"),"\nflag, and clusters using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--allowed-clusters")," flag. You can specify multiple values\nas a comma-separated list. Here are some examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    --admin-roles role1,role2,role3 \\\n    --allowed-clusters cluster1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants create my-tenant \\\n    -r role1 \\\n    -c cluster1\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.2&apiversion=v2#operation/createTenant"},"PUT /admin/v2/tenants/:tenant"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().createTenant(tenantName, tenantInfo);\n")))),(0,l.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,l.kt)("p",null,"You can fetch the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,l.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants get my-tenant\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.2&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:tenant"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().getTenantInfo(tenantName);\n")))),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"delete"))," subcommand and specify the name of the tenant."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants delete my-tenant\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.2&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:tenant"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"admin.Tenants().deleteTenant(tenantName);\n")))),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"You can update a tenant's configuration."),(0,l.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"update"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin tenants update my-tenant \\\n    --admin-roles role1,role2 \\\n    --allowed-clusters cluster1,cluster2\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.2&apiversion=v2#operation/updateTenant"},"POST /admin/v2/tenants/:tenant"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"admin.tenants().updateTenant(tenantName, tenantInfo);\n")))))}c.isMDXComponent=!0}}]);