"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={description:"Learn about the user interface of a Snap.",sidebar_position:3},i="Snaps user interface",o={unversionedId:"concepts/user-interface",id:"concepts/user-interface",title:"Snaps user interface",description:"Learn about the user interface of a Snap.",source:"@site/snaps/concepts/user-interface.md",sourceDirName:"concepts",slug:"/concepts/user-interface",permalink:"/zs/signature-insights-docs/snaps/concepts/user-interface",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/user-interface.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the user interface of a Snap.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps lifecycle",permalink:"/zs/signature-insights-docs/snaps/concepts/lifecycle"},next:{title:"Snaps execution environment",permalink:"/zs/signature-insights-docs/snaps/concepts/execution-environment"}},c={},p=[],u={toc:p},l="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-user-interface"},"Snaps user interface"),(0,a.kt)("p",null,"Any Snap must represent itself and what it does to the end user.\nUsing the MetaMask settings page, the user can see their installed Snaps.\nFor each Snap, the user can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See most of its manifest data."),(0,a.kt)("li",{parentName:"ul"},"See its execution status (running, stopped, or crashed)."),(0,a.kt)("li",{parentName:"ul"},"Enable and disable the Snap.")),(0,a.kt)("p",null,"Other than the settings page, a Snap can modify the MetaMask UI using\n",(0,a.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/how-to/use-custom-ui"},"custom UI")," in only two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By opening a dialog using the ",(0,a.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/reference/rpc-api#snap_dialog"},(0,a.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method."),(0,a.kt)("li",{parentName:"ul"},"By returning transaction insights from the ",(0,a.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/reference/exports#ontransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"onTransaction")),"\nexport.")),(0,a.kt)("p",null,"This means that most Snaps must rely on dapps/websites and their own RPC methods to present their\ndata to the user."),(0,a.kt)("p",null,"Providing more ways for Snaps to modify the MetaMask UI is an important goal of the Snaps system,\nand over time more and more Snaps will be able to contain their user interfaces entirely within\nMetaMask itself."))}f.isMDXComponent=!0}}]);