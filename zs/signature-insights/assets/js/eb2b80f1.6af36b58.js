"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},s="About the Wallet API",o={unversionedId:"concepts/wallet-api",id:"concepts/wallet-api",title:"About the Wallet API",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/wallet-api.md",sourceDirName:"concepts",slug:"/concepts/wallet-api",permalink:"/zs/signature-insights/wallet/concepts/wallet-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/zs/signature-insights/wallet/concepts/architecture"},next:{title:"About MetaMask SDK",permalink:"/zs/signature-insights/wallet/concepts/sdk/"}},l={},p=[{value:"Ethereum provider API",id:"ethereum-provider-api",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Restricted methods",id:"restricted-methods",level:3},{value:"Unrestricted methods",id:"unrestricted-methods",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-the-wallet-api"},"About the Wallet API"),(0,n.kt)("p",null,"MetaMask's Wallet API consists of an ",(0,n.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"Ethereum provider API"),", which wraps\na ",(0,n.kt)("a",{parentName:"p",href:"#json-rpc-api"},"JSON-RPC API"),"."),(0,n.kt)("admonition",{title:"API documentation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The API methods are documented in the following references:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zs/signature-insights/wallet/reference/provider-api"},"Ethereum provider API reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference")))),(0,n.kt)("h2",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,n.kt)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nThis API is specified by ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative wallet detection mechanism to the ",(0,n.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/concepts/wallet-interoperability"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/how-to/connect/"},"using this mechanism to connect to MetaMask"),"."),(0,n.kt)("p",{parentName:"admonition"},"You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,n.kt)("inlineCode",{parentName:"p"},"provider"),".")),(0,n.kt)("p",null,"The MetaMask Ethereum provider API contains the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zs/signature-insights/wallet/reference/provider-api#properties"},"Properties")," - The provider contains a property that\ndetects if a user has MetaMask installed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zs/signature-insights/wallet/reference/provider-api#methods"},"Methods")," - The provider contains methods that dapps can call.\nThe ",(0,n.kt)("a",{parentName:"li",href:"/zs/signature-insights/wallet/reference/provider-api#request"},(0,n.kt)("inlineCode",{parentName:"a"},"request()")),"\nprovider method wraps the ",(0,n.kt)("a",{parentName:"li",href:"#json-rpc-api"},"JSON-RPC API"),"; dapps can use this\nprovider method to call any RPC method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zs/signature-insights/wallet/reference/provider-api#events"},"Events")," - The provider emits events that dapps can listen to.")),(0,n.kt)("p",null,"View the ",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/reference/provider-api"},"provider API reference")," for all the provider properties,\nmethods, and events."),(0,n.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,n.kt)("p",null,"MetaMask uses the ",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/reference/provider-api#request"},(0,n.kt)("inlineCode",{parentName:"a"},"request()")),"\nmethod of the ",(0,n.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,n.kt)("p",null,"The RPC methods are documented in the interactive ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/reference/provider-api#request"},(0,n.kt)("inlineCode",{parentName:"a"},"request()")),".")),(0,n.kt)("p",null,"The RPC methods are divided into the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#restricted-methods"},"Restricted methods")," -  Require user consent for actions that impact assets or data (for example, initiating a transaction)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#unrestricted-methods"},"Unrestricted methods")," - Allow dapps to perform basic actions without permission (for example, retrieving a public address).")),(0,n.kt)("h3",{id:"restricted-methods"},"Restricted methods"),(0,n.kt)("p",null,"MetaMask implements permissions based on ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255")," to enhance security for when users interact with dapps.\nThis requires that dapps obtain user consent before accessing certain features.\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,n.kt)("p",null,"Restricted methods are methods that cannot be called unless you have permission to do so using ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," or ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestSnaps"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"."),(0,n.kt)("p",null,"The following methods are restricted:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/eth_accounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," - Gaining permission requires calling ",(0,n.kt)("inlineCode",{parentName:"li"},"wallet_requestPermissions"),".\nGranting permission for ",(0,n.kt)("inlineCode",{parentName:"li"},"eth_accounts")," also grants permissions for the following methods:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/eth_sendTransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/personal_sign"},(0,n.kt)("inlineCode",{parentName:"a"},"personal_sign"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/eth_signTypedData_v4"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")))))),(0,n.kt)("admonition",{title:"important",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To access accounts, we recommend using ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),", which automatically asks for permission to use ",(0,n.kt)("inlineCode",{parentName:"p"},"eth_accounts")," by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," internally.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/zs/signature-insights/wallet/how-to/connect/access-accounts"},"how to access a user's accounts")," for more information.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_snap"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_snap"))," - Gaining permission requires calling ",(0,n.kt)("inlineCode",{parentName:"li"},"wallet_requestSnap"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wallet/reference/wallet_invokeSnap"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_invokeSnap"))," - Gaining permission requires calling ",(0,n.kt)("inlineCode",{parentName:"li"},"wallet_requestSnap"),".")),(0,n.kt)("admonition",{title:"note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For more information on using ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet_snap")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet_invokeSnap"),", see the ",(0,n.kt)("a",{parentName:"p",href:"/snaps/how-to/request-permissions/#request-permissions-from-a-dapp"},"how to request Snap permissions from a dapp"),".")),(0,n.kt)("h3",{id:"unrestricted-methods"},"Unrestricted methods"),(0,n.kt)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might require confirmation by the\nuser (for example, ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."))}d.isMDXComponent=!0}}]);