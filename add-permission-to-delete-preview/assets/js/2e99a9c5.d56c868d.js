"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={description:"Detect a user's network and network changes."},l="Detect a user's network",i={unversionedId:"get-started/detect-network",id:"get-started/detect-network",title:"Detect a user's network",description:"Detect a user's network and network changes.",source:"@site/wallet/get-started/detect-network.md",sourceDirName:"get-started",slug:"/get-started/detect-network",permalink:"/add-permission-to-delete-preview/wallet/get-started/detect-network",draft:!1,tags:[],version:"current",frontMatter:{description:"Detect a user's network and network changes."},sidebar:"walletSidebar",previous:{title:"Detect MetaMask",permalink:"/add-permission-to-delete-preview/wallet/get-started/detect-metamask"},next:{title:"Access a user's accounts",permalink:"/add-permission-to-delete-preview/wallet/get-started/access-accounts"}},s={},d=[{value:"Chain IDs",id:"chain-ids",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detect-a-users-network"},"Detect a user's network"),(0,a.kt)("p",null,"It's important to keep track of the user's network chain ID because all RPC requests are submitted\nto the currently connected network."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_chainId"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_chainId")),"\nRPC method to detect the chain ID of the user's current network.\nListen to the ",(0,a.kt)("a",{parentName:"p",href:"/add-permission-to-delete-preview/wallet/reference/provider-api#chainchanged"},(0,a.kt)("inlineCode",{parentName:"a"},"chainChanged"))," provider event to\ndetect when the user changes networks."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/add-permission-to-delete-preview/wallet/get-started/set-up-dev-environment#example"},"example project script"),", the following code detects a\nuser's network and when the user changes networks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"const chainId = await window.ethereum.request({ method: 'eth_chainId' });\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  // We recommend reloading the page, unless you must do otherwise.\n  window.location.reload();\n}\n")),(0,a.kt)("h2",{id:"chain-ids"},"Chain IDs"),(0,a.kt)("p",null,"These are the chain IDs of the Ethereum networks that MetaMask supports by default.\nConsult ",(0,a.kt)("a",{parentName:"p",href:"https://chainid.network"},"chainid.network")," for more."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hex"),(0,a.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,a.kt)("th",{parentName:"tr",align:null},"Network"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum main network (Mainnet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"Goerli test network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0xaa36a7"),(0,a.kt)("td",{parentName:"tr",align:null},"11155111"),(0,a.kt)("td",{parentName:"tr",align:null},"Sepolia test network")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0xe704"),(0,a.kt)("td",{parentName:"tr",align:null},"59140"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.linea.build/"},"Linea Goerli test network"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x539"),(0,a.kt)("td",{parentName:"tr",align:null},"1337"),(0,a.kt)("td",{parentName:"tr",align:null},"Localhost test networks (including ",(0,a.kt)("a",{parentName:"td",href:"/add-permission-to-delete-preview/wallet/get-started/run-development-network"},"Ganache"),")")))))}p.isMDXComponent=!0}}]);