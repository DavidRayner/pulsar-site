"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78416],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(58168),r=t(96540),o=t(20053),i=t(23104),l=t(56347),s=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,u]=m({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var y=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==l&&(p(n),s(a))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,o.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function x(e){const n=f(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(v,(0,a.A)({},e,n)),r.createElement(b,(0,a.A)({},e,n)))}function N(e){const n=(0,y.A)();return r.createElement(x,(0,a.A)({key:String(n)},e))}},81511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),o=t(11470),i=t(19365);const l={id:"functions-develop-api",title:"Use APIs",sidebar_label:"Use APIs"},s=void 0,u={unversionedId:"functions-develop-api",id:"version-3.0.x/functions-develop-api",title:"Use APIs",description:"The following table outlines the APIs that you can use to develop Pulsar Functions in Java, Python, and Go.",source:"@site/versioned_docs/version-3.0.x/functions-develop-api.md",sourceDirName:".",slug:"/functions-develop-api",permalink:"/docs/3.0.x/functions-develop-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-develop-api.md",tags:[],version:"3.0.x",frontMatter:{id:"functions-develop-api",title:"Use APIs",sidebar_label:"Use APIs"},sidebar:"docsSidebar",previous:{title:"How to develop",permalink:"/docs/3.0.x/functions-develop"},next:{title:"Pass user-defined configurations",permalink:"/docs/3.0.x/functions-develop-user-defined-configs"}},c={},p=[{value:"Use language-native interface for Java/Python",id:"use-language-native-interface-for-javapython",level:2},{value:"Use SDK for Java/Python/Go",id:"use-sdk-for-javapythongo",level:2},{value:"Use extended SDK for Java",id:"use-extended-sdk-for-java",level:2}],d={toc:p},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The following table outlines the APIs that you can use to develop Pulsar Functions in Java, Python, and Go."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Interface"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Use case"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#use-language-native-interface-for-javapython"},"Language-native interface for Java/Python")),(0,r.yg)("td",{parentName:"tr",align:null},"No Pulsar-specific libraries or special dependencies required (only core libraries)."),(0,r.yg)("td",{parentName:"tr",align:null},"Functions that do not require access to the ",(0,r.yg)("a",{parentName:"td",href:"/docs/3.0.x/functions-concepts#context"},"context"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#use-sdk-for-javapythongo"},"Pulsar Functions SDK for Java/Python/Go")),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar-specific libraries that provide a range of functionality not available in the language-native interfaces,  such as state management or user configuration."),(0,r.yg)("td",{parentName:"tr",align:null},"Functions that require access to the ",(0,r.yg)("a",{parentName:"td",href:"/docs/3.0.x/functions-concepts#context"},"context"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#use-extended-sdk-for-java"},"Extended Pulsar Functions SDK for Java")),(0,r.yg)("td",{parentName:"tr",align:null},"An extension to Pulsar-specific libraries, providing the initialization and close interfaces in Java."),(0,r.yg)("td",{parentName:"tr",align:null},"Functions that require initializing and releasing external resources.")))),(0,r.yg)("h2",{id:"use-language-native-interface-for-javapython"},"Use language-native interface for Java/Python"),(0,r.yg)("p",null,"The language-native interface provides a simple and clean approach to writing Java/Python functions, by adding an exclamation point to all incoming strings and publishing the output string to a topic. It has no external dependencies."),(0,r.yg)("p",null,"The following examples are language-native functions."),(0,r.yg)(o.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("p",null,'To use a piece of Java code as a "language-native" function, you need to implement the ',(0,r.yg)("inlineCode",{parentName:"p"},"java.util.Function")," interface. You can include any sort of complex logic inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"apply")," method to provide more processing capabilities."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) {\n        return String.format("%s!", input);\n    }\n}\n')),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/JavaNativeExclamationFunction.java"},"code example"),".")),(0,r.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,r.yg)("p",null,'To use a piece of Python code as a "language-native" function, you must have a method named ',(0,r.yg)("inlineCode",{parentName:"p"},"process")," as follows. It appends an exclamation point to any string value it receives."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'def process(input):\n    return "{}!".format(input)\n')),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/native_exclamation_function.py"},"code example"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Write Pulsar Functions in Python 3. To make sure your functions can run, you need to have Python 3 installed for functions workers and set Python 3 as the default interpreter.")))),(0,r.yg)("h2",{id:"use-sdk-for-javapythongo"},"Use SDK for Java/Python/Go"),(0,r.yg)("p",null,"The implementation of Pulsar Functions SDK specifies a functional interface that includes the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/functions-concepts#context"},"context")," object as a parameter."),(0,r.yg)("p",null,"The following examples use Pulsar Functions SDK for different languages."),(0,r.yg)(o.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("p",null,"When developing a function using the Java SDK, you need to implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface. It specifies only one method that you need to implement called ",(0,r.yg)("inlineCode",{parentName:"p"},"process"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String process(String input, Context context) {\n        return String.format("%s!", input);\n    }\n}\n')),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/ExclamationFunction.java"},"code example"),"."),(0,r.yg)("p",null,"The return type of the function can be wrapped in a ",(0,r.yg)("inlineCode",{parentName:"p"},"Record")," generic which gives you more control over the output messages, such as topics, schemas, properties, and so on.\nUse the ",(0,r.yg)("inlineCode",{parentName:"p"},"Context::newOutputRecordBuilder")," method to build this ",(0,r.yg)("inlineCode",{parentName:"p"},"Record")," output."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import java.util.HashMap;\nimport java.util.Map;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.apache.pulsar.functions.api.Record;\n\npublic class RecordFunction implements Function<String, Record<String>> {\n\n    @Override\n    public Record<String> process(String input, Context context) throws Exception {\n        String output = String.format("%s!", input);\n        Map<String, String> properties = new HashMap<>(context.getCurrentRecord().getProperties());\n        context.getCurrentRecord().getTopicName().ifPresent(topic -> properties.put("input_topic", topic));\n\n        return context.newOutputRecordBuilder(Schema.STRING)\n                .value(output)\n                .properties(properties)\n                .build();\n    }\n}\n')),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/RecordFunction.java"},"code example"),".")),(0,r.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,r.yg)("p",null,"To develop a function using the Python SDK, you need to add the pulsar client dependency to your Python installation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass ExclamationFunction(Function):\n  def __init__(self):\n    pass\n\n  def process(self, input, context):\n    return input + '!'\n")),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/exclamation_function.py"},"code example"),".")),(0,r.yg)(i.A,{value:"Go",mdxType:"TabItem"},(0,r.yg)("p",null,"To develop a function using the Go SDK, you need to add the pulsar client dependency to your Go installation and provide the name of the function to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pf.Start()")," method inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"main()")," method. This registers the function with the Pulsar Functions framework and ensures that the specified function can be invoked when a new message arrives."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, in []byte) error{\n    fmt.Println(string(in) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n')),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/77cf09eafa4f1626a53a1fe2e65dd25f377c1127/pulsar-function-go/examples/inputFunc/inputFunc.go#L20-L36"},"code example"),"."))),(0,r.yg)("h2",{id:"use-extended-sdk-for-java"},"Use extended SDK for Java"),(0,r.yg)("p",null,"This extended Pulsar Functions SDK provides two additional interfaces to initialize and release external resources."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"By using the ",(0,r.yg)("inlineCode",{parentName:"li"},"initialize")," interface, you can initialize external resources which only need one-time initialization when the function instance starts."),(0,r.yg)("li",{parentName:"ul"},"By using the ",(0,r.yg)("inlineCode",{parentName:"li"},"close")," interface, you can close the referenced external resources when the function instance closes.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The extended Pulsar Functions SDK for Java is only available in Pulsar 2.10.0 or later versions. Before using it, you need to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0.x/functions-worker"},"set up function workers")," in Pulsar 2.10.0 or later versions.")),(0,r.yg)("p",null,"The following example uses the extended interface of Pulsar Functions SDK for Java to initialize RedisClient when the function instance starts and release it when the function instance closes."),(0,r.yg)(o.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport io.lettuce.core.RedisClient;\n\npublic class InitializableFunction implements Function<String, String> {\n    private RedisClient redisClient;\n\n    private void initRedisClient(Map<String, Object> connectInfo) {\n        redisClient = RedisClient.create(connectInfo.get("redisURI"));\n    }\n\n    @Override\n    public void initialize(Context context) {\n        Map<String, Object> connectInfo = context.getUserConfigMap();\n        redisClient = initRedisClient(connectInfo);\n    }\n\n    @Override\n    public String process(String input, Context context) {\n        String value = client.get(key);\n        return String.format("%s-%s", input, value);\n    }\n\n    @Override\n    public void close() {\n        redisClient.close();\n    }\n}\n')))))}m.isMDXComponent=!0}}]);