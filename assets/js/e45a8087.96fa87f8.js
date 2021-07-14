(self.webpackChunk=self.webpackChunk||[]).push([[6466],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var r=t(9973),o=t(7294),i=t(3727),s=t(3919),a=t(412),l=(0,o.createContext)({collectLink:function(){}}),c=t(4996);const p=function(e){var n,t,p,u=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,b=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,c.useBaseUrlUtils)().withBaseUrl,w=(0,o.useContext)(l),x=d||m,C=(0,s.Z)(x),O=null==x?void 0:x.replace("pathname://",""),N=void 0!==O?(t=O,v&&function(e){return e.startsWith("/")}(t)?k(t):t):void 0,j=(0,o.useRef)(!1),S=u?i.OL:i.rU,P=a.default.canUseIntersectionObserver;(0,o.useEffect)((function(){return!P&&C&&null!=N&&window.docusaurus.prefetch(N),function(){P&&p&&p.disconnect()}}),[N,P,C]);var E=null!==(n=null==N?void 0:N.startsWith("#"))&&void 0!==n&&n,F=!N||!C||E;return N&&C&&!E&&!h&&w.collectLink(N),F?o.createElement("a",Object.assign({href:N},x&&!C&&{target:"_blank",rel:"noopener noreferrer"},b)):o.createElement(S,Object.assign({},b,{onMouseEnter:function(){j.current||null==N||(window.docusaurus.preload(N),j.current=!0)},innerRef:function(e){var n,t;P&&e&&C&&(n=e,t=function(){null!=N&&window.docusaurus.prefetch(N)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(n),p.disconnect(),t())}))}))).observe(n))},to:N||""},u&&{isActive:g,activeClassName:f}))}},3919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>o})},4996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>s});var r=t(2263),o=t(3919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,s=i.forcePrependBaseUrl,a=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+p:p}(i,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},1009:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var r=t(4034),o=t(9973),i=(t(7294),t(3905)),s=t(4996),a=t(6742),l={id:"styling-components",title:"Styling Components"},c={unversionedId:"extending/styling-components",id:"extending/styling-components",isDocsHomePage:!1,title:"Styling Components",description:"Flipper ships with its own design system which is based on Ant Design.",source:"@site/../docs/extending/styling-components.mdx",sourceDirName:"extending",slug:"/extending/styling-components",permalink:"/docs/extending/styling-components",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/styling-components.mdx",version:"current",frontMatter:{id:"styling-components",title:"Styling Components"},sidebar:"extending",previous:{title:"Desktop Plugin API",permalink:"/docs/extending/flipper-plugin"},next:{title:"UI Components",permalink:"/docs/extending/ui-components"}},p=[{value:"Basic tags",id:"basic-tags",children:[]},{value:"Extending Flipper Components",id:"extending-flipper-components",children:[]},{value:"CSS",id:"css",children:[]},{value:"Colors",id:"colors",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flipper ships with its own design system which is based on ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),".\nIn general, custom styling should be needed rarily, as Ant Design provides a very extensive set of ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/overview/"},"components"),"."),(0,i.kt)("p",null,"To build plugin layout and data visualization Flipper ships with an additional set of components through the ",(0,i.kt)("inlineCode",{parentName:"p"},"flipper-plugin")," package.\nThe list of available additional components can be found in the ",(0,i.kt)(a.default,{to:(0,s.default)("/docs/extending/flipper-plugin#ui-components"),mdxType:"Link"},"API Reference")," and are further documented\nin the Flipper Style Guide which can be found in Flipper under ",(0,i.kt)("inlineCode",{parentName:"p"},"View > Flipper style guide"),"."),(0,i.kt)("p",null,"In case you still need customly styled components,\nwe are using ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh"},"emotion")," to style our components. For more details on how this works, please refer to emotion's documentation. We heavily use their ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/styled"},"Styled Components")," approach, which allows you to extend our and Ant's built-in components."),(0,i.kt)("h2",{id:"basic-tags"},"Basic tags"),(0,i.kt)("p",null,"For basic building blocks (views, texts, ...) you can use the styled object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {styled} from 'flipper-plugin';\n\nconst MyView = styled.div({\n  fontSize: 10,\n  color: colors.red\n});\nconst MyText = styled.span({ ... });\nconst MyImage = styled.img({ ... });\nconst MyInput = styled.input({ ... });\n")),(0,i.kt)("h2",{id:"extending-flipper-components"},"Extending Flipper Components"),(0,i.kt)("p",null,"In some cases it is required to customize Ant or Flipper's components in some way. For example changing colors, alignment, or wrapping behavior.\nFlippers components can be wrapped using the ",(0,i.kt)("inlineCode",{parentName:"p"},"styled")," function which allows adding or overwriting existing style rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {Layout, styled} from 'flipper-plugin';\n\nconst Container = styled(Layout.Container)({\n  alignItems: 'center',\n});\n\nfunction MyComponent {\n  return <Container>...</Container>;\n}\n")),(0,i.kt)("h2",{id:"css"},"CSS"),(0,i.kt)("p",null,"The CSS-in-JS object passed to the styled components takes just any CSS rule, with the difference that it uses camel cased keys for the properties. Pixel-values can be numbers, any other values need to be strings."),(0,i.kt)("p",null,"The style object can also be returned from a function for dynamic values. Props can be passed to the styled component using React."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyView = styled.div(\n  props => ({\n    fontSize: 10,\n    color:  => (props.disabled ? 'red' : 'black'),\n  })\n);\n\n// usage\n<MyView disabled />\n")),(0,i.kt)("p",null,"Pseudo-classes can be used like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"'&:hover': {color: 'red'}`\n")),(0,i.kt)("p",null,"Children can be matched by using normal CSS selectors. This makes it possible to customize Ant components as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"'.ant-btn-primary': {color: 'yellow'}\n")),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," module contains all standard colors used by Flipper. All available colors can be previewed by starting Flipper and opening ",(0,i.kt)("inlineCode",{parentName:"p"},"View > Flipper Style Guide"),".\nThe colors exposed here will handle dark mode automatically, so it is recommended to use those colors over hardcoded ones."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {theme} from 'flipper-plugin'\n")))}d.isMDXComponent=!0}}]);