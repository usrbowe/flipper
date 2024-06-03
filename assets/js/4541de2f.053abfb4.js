"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(r),s=a,m=c["".concat(l,".").concat(s)]||c[s]||f[s]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16695:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>m});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=r(44996),i=r(39960),u=r(74866),p=r(85162),c=["components"],d={},s=void 0,f={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx",description:"To use the Network plugin, you need to add the plugin to your Flipper client instance.",frontMatter:{}},m=[{value:"Android",id:"android",level:2},{value:"OkHttp Integration",id:"okhttp-integration",level:3},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",level:3},{value:"iOS",id:"ios",level:2},{value:"Protobuf + Retrofit Setup",id:"protobuf--retrofit-setup",level:2},{value:"Gradle Dependencies",id:"gradle-dependencies",level:3},{value:"Sending Retrofit Service",id:"sending-retrofit-service",level:3}],v={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To use the ",(0,o.mdx)(i.default,{to:(0,l.default)("/docs/features/plugins/network"),mdxType:"Link"},"Network plugin"),", you need to add the plugin to your Flipper client instance."),(0,o.mdx)("h2",{id:"android"},"Android"),(0,o.mdx)("p",null,"The network plugin is shipped as a separate Maven artifact, as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.254.0'\n}\n")),(0,o.mdx)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to the client:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,o.mdx)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,o.mdx)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack, as shown in the following snippet:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,o.mdx)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,o.mdx)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,o.mdx)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,o.mdx)("p",null,"Then call ",(0,o.mdx)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,o.mdx)("h2",{id:"ios"},"iOS"),(0,o.mdx)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,o.mdx)("p",null,"Initialize the plugin in the following way by updating AppDelegate.m:"),(0,o.mdx)(u.default,{defaultValue:"objc",values:[{label:"ObjC",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.mdx)(p.default,{value:"objc",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n"))),(0,o.mdx)(p.default,{value:"swift",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n")))),(0,o.mdx)("h2",{id:"protobuf--retrofit-setup"},"Protobuf + Retrofit Setup"),(0,o.mdx)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,o.mdx)("p",null,"Ensure that you already have an explicit dependency in your application's ",(0,o.mdx)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, as shown in the following example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n  implementation "com.squareup.retrofit2:retrofit:2.9.0"\n  implementation "com.squareup.retrofit2:converter-protobuf:2.9.0"\n\n  // update version below to match latest Flipper client app\n  debugImplementation "com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.84.0"\n}\n')),(0,o.mdx)("h3",{id:"sending-retrofit-service"},"Sending Retrofit Service"),(0,o.mdx)("p",null,"If you have a Retrofit service interface ",(0,o.mdx)("inlineCode",{parentName:"p"},"PersonService")," which has Protobuf body or return types then at the time you create your implementation, call the plugin with your ",(0,o.mdx)("inlineCode",{parentName:"p"},"baseURL")," and service class, as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n...\nval personService = retrofit.create(PersonService::class.java)\nSendProtobufToFlipperFromRetrofit(baseUrl, PersonService::class.java)\n")))}b.isMDXComponent=!0},85162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.default)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(83117),a=r(67294),o=r(86010),l=r(12466),i=r(76775),u=r(91980),p=r(67392),c=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,r,n,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,p=e.groupId,d=s(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),b=v[0],g=v[1],h=m({queryString:u,groupId:p}),y=h[0],w=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],N=k[1],O=function(){var e=null!=y?y:x;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){O&&g(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),N(e)}),[w,N,d]),tabValues:d}}var b=r(72389);const g="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,p=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var t=e.currentTarget,r=c.indexOf(t),n=p[r].value;n!==i&&(d(t),u(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":r},t)},p.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:s},l,{className:(0,o.default)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function w(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=v(e);return a.createElement("div",{className:(0,o.default)("tabs-container",g)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function x(e){var t=(0,b.default)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}}}]);