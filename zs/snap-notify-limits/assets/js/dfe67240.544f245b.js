"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5413],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,g=l["".concat(o,".").concat(f)]||l[f]||y[f]||i;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97806:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},s="Variable: KeyringJsonRpcRequestStruct",c={unversionedId:"reference/keyring-api/variables/KeyringJsonRpcRequestStruct",id:"reference/keyring-api/variables/KeyringJsonRpcRequestStruct",title:"Variable: KeyringJsonRpcRequestStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/KeyringJsonRpcRequestStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/KeyringJsonRpcRequestStruct",permalink:"/zs/snap-notify-limits/snaps/reference/keyring-api/variables/KeyringJsonRpcRequestStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/KeyringJsonRpcRequestStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: KeyringAccountStruct",permalink:"/zs/snap-notify-limits/snaps/reference/keyring-api/variables/KeyringAccountStruct"},next:{title:"Variable: KeyringRequestStruct",permalink:"/zs/snap-notify-limits/snaps/reference/keyring-api/variables/KeyringRequestStruct"}},o={},p=[{value:"Source",id:"source",level:2}],u={toc:p},l="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-keyringjsonrpcrequeststruct"},"Variable: KeyringJsonRpcRequestStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const KeyringJsonRpcRequestStruct: Struct<{\n  id: string;\n  jsonrpc: "2.0";\n  method: string;\n  } | {\n  id: string;\n  jsonrpc: "2.0";\n  method: string;\n  params: Record<string, Json> | Json[];\n  }, null>;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L67"},"external/keyring-api/src/keyring-api.ts:67")))}y.isMDXComponent=!0}}]);