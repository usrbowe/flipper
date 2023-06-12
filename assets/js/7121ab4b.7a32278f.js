"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1841],{3905:(e,n,i)=>{i.r(n),i.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>s});var t=i(67294);function p(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a.apply(this,arguments)}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){p(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,p=function(e,n){if(null==e)return{};var i,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(p[i]=e[i]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(p[i]=e[i])}return p}var d=t.createContext({}),s=function(e){return function(n){var i=m(n.components);return t.createElement(e,a({},n,{components:i}))}},m=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=m(i),u=p,g=s["".concat(l,".").concat(u)]||s[u]||c[u]||a;return i?t.createElement(g,r(r({ref:n},d),{},{components:i})):t.createElement(g,r({ref:n},d))}));function h(e,n){var i=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=i.length,l=new Array(a);l[0]=g;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:p,l[1]=r;for(var d=2;d<a;d++)l[d]=i[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},665:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var t=i(83117),p=i(80102),a=(i(67294),i(3905)),l=["components"],r={id:"desktop-plugin-structure",title:"Plugin structure"},o=void 0,d={unversionedId:"extending/desktop-plugin-structure",id:"extending/desktop-plugin-structure",title:"Plugin structure",description:"Flipper Desktop plugins have a rigid structure. It's recommended to scaffold any new plugin using the Flipper scaffolding tooling.",source:"@site/../docs/extending/desktop-plugin-structure.mdx",sourceDirName:"extending",slug:"/extending/desktop-plugin-structure",permalink:"/docs/extending/desktop-plugin-structure",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/desktop-plugin-structure.mdx",tags:[],version:"current",frontMatter:{id:"desktop-plugin-structure",title:"Plugin structure"},sidebar:"main",previous:{title:"Dynamically Loading Plugins",permalink:"/docs/extending/loading-custom-plugins"},next:{title:"Testing",permalink:"/docs/extending/testing"}},s={},m=[{value:"Scaffolding a new plugin",id:"scaffolding-a-new-plugin",level:2},{value:"flipper-pkg",id:"flipper-pkg",level:3},{value:"scarf flipper-plugin",id:"scarf-flipper-plugin",level:3},{value:"Desktop Plugin structure",id:"desktop-plugin-structure",level:2},{value:"Anatomy of a Desktop plugin",id:"anatomy-of-a-desktop-plugin",level:2},{value:"Creating a Client Plugin",id:"creating-a-client-plugin",level:3},{value:"Creating a Device Plugin",id:"creating-a-device-plugin",level:3},{value:"Creating a simple table plugin",id:"creating-a-simple-table-plugin",level:3},{value:"Validation",id:"validation",level:2},{value:"Transpilation and bundling",id:"transpilation-and-bundling",level:2},{value:"npm dependencies",id:"npm-dependencies",level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},c=u("OssOnly"),g=u("FbInternalOnly"),h=u("FbNpmDeps"),f={toc:m};function x(e){var n=e.components,i=(0,p.Z)(e,l);return(0,a.mdx)("wrapper",(0,t.Z)({},f,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Flipper Desktop plugins have a rigid structure. It's recommended to scaffold any new plugin using the Flipper scaffolding tooling."),(0,a.mdx)("h2",{id:"scaffolding-a-new-plugin"},"Scaffolding a new plugin"),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("h3",{id:"flipper-pkg"},"flipper-pkg"),(0,a.mdx)("p",null,"The CLI tool ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg")," helps to initialize, validate, and package Flipper desktop plugins."),(0,a.mdx)("p",null,"To scaffold a new plugin run ",(0,a.mdx)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," in the directory where you want to store the plugin sources.\nNote that this should typically ",(0,a.mdx)("em",{parentName:"p"},"not")," be inside a Flipper checkout, but rather a fresh directory which you can put under your own source control.")),(0,a.mdx)(g,{mdxType:"FbInternalOnly"},(0,a.mdx)("h3",{id:"scarf-flipper-plugin"},"scarf flipper-plugin"),(0,a.mdx)("p",null,"On a Meta machine, new plugins can be scaffolded by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"scarf flipper-plugin"),". This takes care of both the Desktop and client-side setup of plugins.\nFollow the instructions offered by Scarf.")),(0,a.mdx)("h2",{id:"desktop-plugin-structure"},"Desktop Plugin structure"),(0,a.mdx)("p",null,"All Flipper Desktop plugins must be self-contained in a directory that must contain, at a minimum:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"package.json")," - the plugin packet manifest."),(0,a.mdx)("li",{parentName:"ul"},"An entry source file for your plugin (such as ",(0,a.mdx)("inlineCode",{parentName:"li"},"src/index.tsx"),").")),(0,a.mdx)("p",null,"After scaffolding a new plugin has finished, those files will exist in the relevant directory."),(0,a.mdx)("p",null,"An example ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," file could look like the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myplugin",\n  "id": "myplugin",\n  "pluginType": "client",\n  "version": "1.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "title": "My Plugin",\n  "icon": "apps",\n  "bugs": {\n    "email": "you@example.com"\n  },\n  "scripts": {\n    "lint": "flipper-pkg lint",\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "peerDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest"\n  },\n  "devDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest",\n    "flipper-pkg": "latest",\n    "react": "latest",\n    "antd": "latest"\n  }\n}\n')),(0,a.mdx)("p",null,"The following are important attributes of ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"$schema")," - must contain the URI identifying scheme according to which the plugin is defined. Currently, Flipper supports plugins defined by the specification ",(0,a.mdx)("a",{parentName:"p",href:"https://fbflipper.com/schemas/plugin-package/v2.json"},"version 2"),", while version 1 is being deprecated.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"name")," - the NPM package name. Should start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-plugin-")," by convention so the Flipper plugins can be easily find it on NPM.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"id")," - the plugin native identifier, which ",(0,a.mdx)("strong",{parentName:"p"},"must match the mobile plugin identifier")," returned by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"getId")," method of your Java plugin.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," - Specifies the plugin type: client or device. For details, see the ",(0,a.mdx)("a",{parentName:"p",href:"#anatomy-of-a-desktop-plugin"},"Anatomy of a Desktop plugin"),", below.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"main"),' - points to the plugin bundle which is loaded by Flipper. The "flipper-pkg" utility uses this field to determine output location during plugin bundling.')),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundlerEntry")," - points to the source entry point used for plugin code bundling. ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg")," takes the path specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundlerEntry")," as source, transpiles and bundles it, and saves the output to the path specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},"main"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"keywords")," - the field must contain the ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-plugin")," keyword, otherwise Flipper won't discover the plugin. Additionally, the field can also contain any other keywords for better plugin discoverability.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"title")," - shown in the main sidebar as the human-readable name of the plugin.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"icon")," - determines the plugin icon that is displayed in the main sidebar. The list of available icons is static for now (see ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/static/icons.json"},"icons.json")," in GitHub).")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"bugs")," - specify an email and/or URL where plugin bugs should be reported."))),(0,a.mdx)("p",null,"In ",(0,a.mdx)("inlineCode",{parentName:"p"},"index.tsx")," you define the plugin in JavaScript, as shown in the following example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"export function plugin(client) {\n  return {};\n}\n\nexport function Component() {\n  return 'hello world';\n}\n")),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Some public plugins use a ",(0,a.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," base class. That format is deprecated.")),(0,a.mdx)("h2",{id:"anatomy-of-a-desktop-plugin"},"Anatomy of a Desktop plugin"),(0,a.mdx)("p",null,"Flipper Desktop plugins come in three possible flavors:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("strong",{parentName:"li"},"Client plugins")," - connects to a specific client plugin running in an app (recommended)."),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("strong",{parentName:"li"},"Device plugins")," - doesn't connect to a specific client and doesn't have a native counterpart but shows data about the device obtained through some other means, like device logs, device temperatures, and so on."),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("strong",{parentName:"li"},"Table plugin")," - a simplified version of a client plugin that merely displays incoming data from a client plugin in a table.")),(0,a.mdx)("h3",{id:"creating-a-client-plugin"},"Creating a Client Plugin"),(0,a.mdx)("p",null,"A plugin always exposes two elements from its entry module (typically ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/index.tsx"),"), ",(0,a.mdx)("inlineCode",{parentName:"p"},"plugin")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"Component"),", as shown in the following snippet:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {PluginClient} from 'flipper-plugin';\n\nexport function plugin(client: PluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),(0,a.mdx)(g,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Client plugins must have the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"client")," and should specify supported apps using the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedApps")," in package.json."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedApps")," property should contain an array of supported apps, each defined as a conjunction of app properties, using the following format:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},'{"appID": <"Facebook" | "Instagram" | "Messenger">,  "os": <"Android" | "iOS" | "Metro">, "type": <"physical" | "emulator"> }\n')),(0,a.mdx)("p",null,"For example, the array ",(0,a.mdx)("inlineCode",{parentName:"p"},'{ "appID": "Facebook", "os": "Android", "type": "emulator" }')," indicates that the Facebook app must work on Android AND must be an emulator in order to debug it using the plugin."),(0,a.mdx)("p",null,"Note that if the ",(0,a.mdx)("inlineCode",{parentName:"p"},"os")," field is missing, it indicates that both Android and iOS are supported by the app and that a specific plugin, working for a physical device, also works for the emulator. In such a case, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"type")," field is assumed to be 'true' for both physical and emulator devices, unless only one of them is specifically stated in the .json file."),(0,a.mdx)("p",null,"To specify that a plugin supports Facebook on Android/iOS physical/emulator devices, Messenger on only Android physical/emulator and does not support Instagram, the plugin package.json should look like the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myclientplugin",\n  "id": "myclientplugin",\n  "pluginType": "client",\n  "supportedApps": [\n    {"AppID": "Facebook"},\n    {"AppID": "Messenger", "os": "Android"}\n  ]\n...\n}\n'))),(0,a.mdx)("p",null,"For details on how to write custom Flipper plugins, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom"},"Building a Desktop Plugin - Custom UI")," tutorial page."),(0,a.mdx)(g,{mdxType:"FbInternalOnly"},(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"After adding new plugins, the metadata of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedApps")," field needs to be updated.\nThis has to be done in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json")," file in the directory by the name of the plugin under ",(0,a.mdx)("inlineCode",{parentName:"p"},"plugins/fb/\\{directory name\\}")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"plugins/public/\\{directory name\\}/fb"),"."),(0,a.mdx)("p",{parentName:"admonition"},"If an App is not listed in the supportedApps definition, it may still be supported by Flipper; it could be the case that the plugin was recently added and the .json files were not updated."),(0,a.mdx)("p",{parentName:"admonition"},"Plugins will work for apps that register them, even when they are not registered here in the metadata. The most important reason to add supported apps to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"suppertedApps")," is to allow Flipper to signal to the user which plugins are supposed to work on which apps during troubleshooting."))),(0,a.mdx)("h3",{id:"creating-a-device-plugin"},"Creating a Device Plugin"),(0,a.mdx)("p",null,"Flipper also supports so-called device plugins (plugins that are available for an entire device) but don't receive a connection to a running app, so are a bit more limited in general."),(0,a.mdx)("p",null,"Their entry module anatomy is as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {DevicePluginClient} from 'flipper-plugin';\n\nexport function devicePlugin(client: DevicePluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),(0,a.mdx)("p",null,"Client plugins must have the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"pluginType")," set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"device")," and should specify supported devices using the property ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedDevices")," in package.json."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"supportedDevices")," property should contain an array of supported devices, each defined as a conjunction of device properties, using the following format:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},'{ "os": <"Android" | "iOS" | "Metro">, "type": <"physical" | "emulator">, "archived": <true | false> }\n')),(0,a.mdx)("p",null,"For example, the array ",(0,a.mdx)("inlineCode",{parentName:"p"},'{ "os": "Android", "type": "emulator" }')," indicates that device must work on Android AND must be an emulator in order to debug it using the plugin."),(0,a.mdx)("p",null,"To specify that a plugin supports all types of Android devices, and physical iOS devices, and does not support imported (archived) data, the plugin package.json should look like the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-mydeviceplugin",\n  "id": "mydeviceplugin",\n  "pluginType": "device",\n  "supportedDevices": [\n    {"os": "Android", "archived": false},\n    {"os": "iOS", "type": "physical", "archived": false}\n  ]\n...\n}\n')),(0,a.mdx)("admonition",{title:"rmation",type:"info"},(0,a.mdx)("p",{parentName:"admonition"},"Generally, device plugins function in a similar manner to normal client plugins.")),(0,a.mdx)("p",null,"The available APIs for device plugins are listed in the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#devicepluginclient"},"Desktop Plugin API")," page."),(0,a.mdx)("h3",{id:"creating-a-simple-table-plugin"},"Creating a simple table plugin"),(0,a.mdx)("p",null,"Flipper provides a standard abstraction to render data received from a Client plugin in a table, see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#createtableplugin"},"createTablePlugin")," in the 'Desktop Plugin API' page."),(0,a.mdx)("h2",{id:"validation"},"Validation"),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"Plugin definition can be validated using command ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg lint"),". The command shows all the mismatches that need to be fixed to make the plugin definition valid.")),(0,a.mdx)(g,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"Make sure to address any lint errors shown in the IDE or surfaced on phabricator.\nTo manually run the linter run ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn lint")," in ",(0,a.mdx)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop"),".")),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("h2",{id:"transpilation-and-bundling"},"Transpilation and bundling"),(0,a.mdx)("p",null,"Flipper has tooling for transpiling and bundling that enables the creation of plugins in plain E",(0,a.mdx)("a",{parentName:"p",href:"https://internalfb.com/S6"},"S6")," JavaScript or ",(0,a.mdx)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,a.mdx)("p",null,"The following are recommended:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Use ",(0,a.mdx)("strong",{parentName:"li"},"TypeScript")," for the best development experience."),(0,a.mdx)("li",{parentName:"ul"},"Use ",(0,a.mdx)("inlineCode",{parentName:"li"},".tsx")," when using TypeScript, which adds support for inline React expressions.")),(0,a.mdx)("p",null,"You may recall that the Flipper development build automatically transpiles and bundles plugins on loading. It's capable of all E",(0,a.mdx)("a",{parentName:"p",href:"https://internalfb.com/S6"},"S6")," functionality, Flow annotations, TypeScript, as well as JSX, and applies the required babel-transforms."),(0,a.mdx)("p",null,"In contrast, the Flipper release build does not transpile or bundle plugins on loading. For production usage, plugins should be bundled before publishing using ",(0,a.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/package/flipper-pkg"},"flipper-pkg"),". This utility applies the same modifications as the plugin loader of the development build."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg")," tool is published to npm and should be installed as a ",(0,a.mdx)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package."),(0,a.mdx)("p",null,"Then, to bundle the plugin, execute the following command in its folder:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn flipper-pkg bundle\n")),(0,a.mdx)("p",null,"This command reads the ",(0,a.mdx)("inlineCode",{parentName:"p"},"package.json"),", takes the path specified in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipperBundleEntry")," field as entry point, transpiles and bundles all the required code, and outputs the produced bundle to the path specified in field ",(0,a.mdx)("inlineCode",{parentName:"p"},"main"),"."),(0,a.mdx)("p",null,"You can get the list of other available commands by invoking ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg help"),", and get detailed description for any command by invoking ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper-pkg help [COMMAND]"),". For usage details, see the ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/flipper-pkg"},"flipper-pkg")," page on the npmjs.com web site.")),(0,a.mdx)("h2",{id:"npm-dependencies"},"npm dependencies"),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("p",null,"If you need any dependencies in your plugin, you can install them using ",(0,a.mdx)("inlineCode",{parentName:"p"},"yarn add"),".")),(0,a.mdx)(h,{mdxType:"FbNpmDeps"}),(0,a.mdx)(c,{mdxType:"OssOnly"},(0,a.mdx)("admonition",{type:"caution"},(0,a.mdx)("p",{parentName:"admonition"},"Flipper plugins should be designed to work inside browsers as well, as Flipper isn't guaranteed to be always running on top of Electron. For that reason, you should avoid using Node.js APIs directly (such as modules like ",(0,a.mdx)("inlineCode",{parentName:"p"},"fs"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"child_process"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"path"),"), or packages that depend on them. For alternative APIs, see ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/node-apis"},"using Node.js APIs")," in Flipper plugins."))))}x.isMDXComponent=!0}}]);