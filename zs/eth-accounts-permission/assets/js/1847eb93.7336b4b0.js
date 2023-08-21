"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:4,description:"Learn about the MetaMask JSON-RPC API."},i="JSON-RPC API",o={unversionedId:"concepts/rpc-api",id:"concepts/rpc-api",title:"JSON-RPC API",description:"Learn about the MetaMask JSON-RPC API.",source:"@site/wallet/concepts/rpc-api.md",sourceDirName:"concepts",slug:"/concepts/rpc-api",permalink:"/zs/eth-accounts-permission/wallet/concepts/rpc-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/rpc-api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn about the MetaMask JSON-RPC API."},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/zs/eth-accounts-permission/wallet/concepts/provider-api"},next:{title:"Convenience libraries",permalink:"/zs/eth-accounts-permission/wallet/concepts/convenience-libraries"}},l={},c=[{value:"Restricted methods",id:"restricted-methods",level:2},{value:"Unrestricted methods",id:"unrestricted-methods",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-rpc-api"},"JSON-RPC API"),(0,a.kt)("p",null,"MetaMask uses the ",(0,a.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nmethod of the ",(0,a.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/wallet/concepts/provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,a.kt)("admonition",{title:"MetaMask API Playground",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The RPC methods are documented in the interactive\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"MetaMask JSON-RPC API Playground"),".")),(0,a.kt)("p",null,"Methods in the API playground may have the following tags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MetaMask")," - These methods behave in ways specific to MetaMask, and may or may not be supported\nby other wallets.\nSome of these methods are documented in more detail on the ",(0,a.kt)("a",{parentName:"li",href:"/zs/eth-accounts-permission/wallet/reference/rpc-api"},"JSON-RPC reference"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restricted")," - These methods are ",(0,a.kt)("a",{parentName:"li",href:"#restricted-methods"},"restricted"),", which require requesting\npermission using ",(0,a.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_requestpermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mobile")," - These methods are only available on MetaMask Mobile."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ethereum API")," - These are standard Ethereum JSON-RPC API methods.\nSee the ",(0,a.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum wiki")," for more information on\nthese methods.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,a.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),".")),(0,a.kt)("h2",{id:"restricted-methods"},"Restricted methods"),(0,a.kt)("p",null,"MetaMask introduced web3 wallet permissions in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is restricted or unrestricted.\nIf a method is restricted, a dapp must request permission to call it using\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),".\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,a.kt)("p",null,"Outside of ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/rpc-api/#restricted-methods"},"Snaps restricted methods"),", the only\nrestricted method is ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts")),", which allows you to access\nthe user's Ethereum accounts.\nMore restricted methods will be added in the future."),(0,a.kt)("h2",{id:"unrestricted-methods"},"Unrestricted methods"),(0,a.kt)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might still rely on\npermissions to succeed (for example, the signing methods require calling the restricted\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method), or they might require confirmation by the\nuser (for example, ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/zs/eth-accounts-permission/wallet/reference/rpc-api"},"JSON-RPC API reference")," for some MetaMask-specific unrestricted\nmethods and examples of how to implement them.\nFor the full list of MetaMask JSON-RPC API methods, see the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"API playground"),"."))}d.isMDXComponent=!0}}]);