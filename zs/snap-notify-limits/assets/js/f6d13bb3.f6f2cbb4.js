"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={description:"Solve common issues.",sidebar_position:1},l="Troubleshoot common issues",p={unversionedId:"how-to/debug-a-snap/common-issues",id:"how-to/debug-a-snap/common-issues",title:"Troubleshoot common issues",description:"Solve common issues.",source:"@site/snaps/how-to/debug-a-snap/common-issues.md",sourceDirName:"how-to/debug-a-snap",slug:"/how-to/debug-a-snap/common-issues",permalink:"/zs/snap-notify-limits/snaps/how-to/debug-a-snap/common-issues",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/debug-a-snap/common-issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Solve common issues.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Debug a Snap",permalink:"/zs/snap-notify-limits/snaps/how-to/debug-a-snap/"},next:{title:"Publish a Snap",permalink:"/zs/snap-notify-limits/snaps/how-to/publish-a-snap"}},u={},c=[{value:"Fix build and evaluation issues",id:"fix-build-and-evaluation-issues",level:2},{value:"Use other build tools",id:"use-other-build-tools",level:3},{value:"Patch dependencies",id:"patch-dependencies",level:2},{value:"Patch the use of XMLHttpRequest",id:"patch-the-use-of-xmlhttprequest",level:3},{value:"cross-fetch",id:"cross-fetch",level:4},{value:"axios",id:"axios",level:4}],m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshoot-common-issues"},"Troubleshoot common issues"),(0,r.kt)("p",null,"This page describes common issues you may encounter when developing a Snap, and how to resolve them."),(0,r.kt)("p",null,"If you encounter any issues that you can't solve on your own, please\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/issues"},"open a GitHub issue"),"."),(0,r.kt)("h2",{id:"fix-build-and-evaluation-issues"},"Fix build and evaluation issues"),(0,r.kt)("p",null,"Because ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/learn/about-snaps/execution-environment"},"Secure ECMAScript (SES)")," adds additional restrictions\non the JavaScript runtime on top of strict mode, code that executes normally under strict mode might\nnot under SES.\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap build"))," by default attempts to execute a\nSnap in a stubbed SES environment.\nYou can also disable this behavior and run the evaluation step separately using\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/reference/cli/subcommands#e-eval"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap eval")),".\nIf an error is thrown during this step, it's likely due to a SES incompatibility, and you must fix\nthe issues manually.\nThese incompatibilities tend to occur in dependencies."),(0,r.kt)("p",null,"The errors you get from SES are usually easy to fix.\nThe actual file, function, and variable names in the ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," error stack trace might not make sense\nto you, but the line numbers should correspond to your Snap ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/learn/about-snaps/files#bundle-file"},"bundle file"),".\nThus, you can identify if the error is due to your code or one of your dependencies.\nIf the problem is in a dependency, you can try a different version or to fix the issue locally by\nusing tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/patch-package"},(0,r.kt)("inlineCode",{parentName:"a"},"patch-package"))," (see how to\n",(0,r.kt)("a",{parentName:"p",href:"#patch-dependencies"},"patch dependencies"),") or by modifying the bundle file directly."),(0,r.kt)("p",null,'To give you an idea of a common error and how to fix it, "sloppily" declared variables (i.e.\nassigning to a new variable without an explicit variable declaration) are forbidden in strict mode,\nand therefore in SES as well.\nIf you get an error during the ',(0,r.kt)("inlineCode",{parentName:"p"},"eval")," step that says something like ",(0,r.kt)("inlineCode",{parentName:"p"},"variableName is not defined"),",\nsimply prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"var variableName;")," to your Snap bundle may solve the problem.\n(This actually happened so frequently with ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"regeneratorRuntime")," that\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn mm-snap build")," automatically handles that one.)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Run ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/reference/cli/subcommands#m-manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix"))," if you modified\nyour Snap bundle after building.\nOtherwise your manifest ",(0,r.kt)("inlineCode",{parentName:"p"},"shasum")," value won't be correct, and attempting to install your Snap fails.")),(0,r.kt)("h3",{id:"use-other-build-tools"},"Use other build tools"),(0,r.kt)("p",null,"If you prefer building your Snap with a build system you're more comfortable with, Snaps implements\nplugins for several other build systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/snaps-webpack-plugin"},"Webpack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/rollup-plugin-snaps"},"Rollup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@metamask/snaps-browserify-plugin"},"Browserify"))),(0,r.kt)("p",null,"For examples on how to set up these build systems yourself, please see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/tree/main/packages/examples/examples"},"examples"),"."),(0,r.kt)("p",null,"We recommend running ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/reference/cli/subcommands#m-manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nafter creating your bundle to make sure your manifest ",(0,r.kt)("inlineCode",{parentName:"p"},"shasum")," value is correct.\nYou might also benefit from running ",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/reference/cli/subcommands#e-eval"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn mm-snap eval")),"\nto detect any SES issues up front."),(0,r.kt)("h2",{id:"patch-dependencies"},"Patch dependencies"),(0,r.kt)("p",null,"Some dependencies might use APIs that aren't available in the\n",(0,r.kt)("a",{parentName:"p",href:"/zs/snap-notify-limits/snaps/learn/about-snaps/execution-environment"},"Snaps execution environment"),".\nTo work around this, we recommend checking if another library is available that makes use of those APIs."),(0,r.kt)("p",null,"If you can't find another library (or version) that works with the Snaps execution environment, you\ncan patch the dependency yourself using ",(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/patch-package"},(0,r.kt)("inlineCode",{parentName:"a"},"patch-package")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"patch-package")," allows you to make changes to your dependencies, saving the changes as a patch and\nreplaying it when installing dependencies."),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"patch-package")," using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D patch-package postinstall-postinstall\n")),(0,r.kt)("p",null,"Then add a postinstall script to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},' "scripts": {\n+  "postinstall": "patch-package"\n }\n')),(0,r.kt)("p",null,"Now you can make changes to your dependencies inside ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," and run\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn patch-package package-name")," to save the changes as a patch.\nThis creates a ",(0,r.kt)("inlineCode",{parentName:"p"},".patch")," file containing your dependency patch.\nThese patches can be committed to your Git repository and are replayed when you re-install your dependencies."),(0,r.kt)("h3",{id:"patch-the-use-of-xmlhttprequest"},"Patch the use of XMLHttpRequest"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," API is not exposed in the Snaps execution environment and won't be in the future.\nBecause of this, you may run into issues with dependencies in your dependency tree attempting to\nuse this API for their network requests."),(0,r.kt)("p",null,"The following are examples of popular libraries that use ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," and are thus ",(0,r.kt)("strong",{parentName:"p"},"not"),"\ncompatible with the Snaps execution environment.\nThis section also describes patching strategies for fixing dependencies that try to use these libraries."),(0,r.kt)("h4",{id:"cross-fetch"},"cross-fetch"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cross-fetch")," is a popular library used for cross-platform access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API across multiple\nenvironments.\nUnder the hood, however, the library uses ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," and thus causes issues when used in a Snap."),(0,r.kt)("p",null,"You can easily patch this issue using ",(0,r.kt)("inlineCode",{parentName:"p"},"patch-package"),".\nOpen ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/cross-fetch/browser-ponyfill.js")," and find the following lines near the bottom of\nthe file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Choose between native implementation (global) or custom implementation (__self__)\n// var ctx = global.fetch ? global : __self__;\nvar ctx = __self__; // this line disable service worker support temporarily\n")),(0,r.kt)("p",null,"You can replace that with the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Choose between native implementation (global) or custom implementation (__self__)\nvar ctx = global.fetch\n  ? { ...global, fetch: global.fetch.bind(global) }\n  : __self__;\n// var ctx = __self__; // this line disable service worker support temporarily\n")),(0,r.kt)("p",null,"After replacing it, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn patch-package cross-fetch"),", which saves the patch for future use."),(0,r.kt)("p",null,"Alternatively, you can use the following patch, copy and paste it to\n",(0,r.kt)("inlineCode",{parentName:"p"},"patches/cross-fetch+3.1.5.patch"),", and re-install your dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"diff --git a/node_modules/cross-fetch/dist/browser-ponyfill.js b/node_modules/cross-fetch/dist/browser-ponyfill.js\nindex f216aa3..6b3263b 100644\n--- a/node_modules/cross-fetch/dist/browser-ponyfill.js\n+++ b/node_modules/cross-fetch/dist/browser-ponyfill.js\n@@ -543,8 +543,8 @@ __self__.fetch.ponyfill = true;\n // Remove \"polyfill\" property added by whatwg-fetch\n delete __self__.fetch.polyfill;\n // Choose between native implementation (global) or custom implementation (__self__)\n-// var ctx = global.fetch ? global : __self__;\n-var ctx = __self__; // this line disable service worker support temporarily\n+var ctx = global.fetch ? { ...global, fetch: global.fetch.bind(global) } : __self__;\n+// var ctx = __self__; // this line disable service worker support temporarily\n exports = ctx.fetch // To enable: import fetch from 'cross-fetch'\n exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.\n exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'\n")),(0,r.kt)("p",null,"Using either of these methods allows your dependencies to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," API correctly and\n",(0,r.kt)("inlineCode",{parentName:"p"},"cross-fetch")," compatible with the Snaps execution environment."),(0,r.kt)("h4",{id:"axios"},"axios"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"axios")," is a popular networking library that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," under the hood."),(0,r.kt)("p",null,"Currently, there's no known way of patching ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," to work with the Snaps execution environment.\nInstead, you must replace ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," with another library such as ",(0,r.kt)("inlineCode",{parentName:"p"},"isomorphic-fetch")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"isomorphic-unfetch"),", or simply use the Snaps execution environment global ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,r.kt)("p",null,"The following is an example of how you can rewrite your dependency to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In a production environment this may be a large task depending on the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),".")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"axios",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const instance = axios.create({\n  baseURL: 'https://api.github.com/',\n});\n\ninstance\n  .get('users/MetaMask')\n  .then((res) => {\n    if (res.status >= 400) {\n      throw new Error('Bad response from server');\n    }\n    return res.data;\n  })\n  .then((user) => {\n    console.log(user);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n"))),(0,r.kt)(s.Z,{value:"fetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('https://api.github.com/users/MetaMask')\n  .then((res) => {\n    if (!res.ok) {\n      throw new Error('Bad response from server');\n    }\n    return res.json();\n  })\n  .then((json) => console.log(json))\n  .catch((err) => console.error(err));\n")))),(0,r.kt)("p",null,"For more information, see how to\n",(0,r.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper"},"replace axios with a simple custom fetch wrapper"),"."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(70989),l=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(m(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",p.tabList)},r.createElement(u,(0,a.Z)({},e,t)),r.createElement(c,(0,a.Z)({},e,t)))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(67294),r=n(16550),o=n(91980),s=n(67392),i=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[m,d]=c({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=m??h;return u({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}}}]);