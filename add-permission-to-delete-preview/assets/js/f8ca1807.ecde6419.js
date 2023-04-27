"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={description:"Configure and connect a Ganache development network."},l="Run a development network",c={unversionedId:"get-started/run-development-network",id:"get-started/run-development-network",title:"Run a development network",description:"Configure and connect a Ganache development network.",source:"@site/wallet/get-started/run-development-network.md",sourceDirName:"get-started",slug:"/get-started/run-development-network",permalink:"/add-permission-to-delete-preview/wallet/get-started/run-development-network",draft:!1,tags:[],version:"current",frontMatter:{description:"Configure and connect a Ganache development network."},sidebar:"walletSidebar",previous:{title:"Set up your development environment",permalink:"/add-permission-to-delete-preview/wallet/get-started/set-up-dev-environment"},next:{title:"Detect MetaMask",permalink:"/add-permission-to-delete-preview/wallet/get-started/detect-metamask"}},s={},i=[{value:"Reset your local nonce calculation",id:"reset-your-local-nonce-calculation",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-a-development-network"},"Run a development network"),(0,a.kt)("p",null,"You can run a personal Ethereum development network using ",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/ganache"},"Ganache"),",\nwhich allows you to develop a dapp in a secure test environment.\nFollow the ",(0,a.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/ganache/quickstart/"},"Ganache quickstart")," to set\nup a development network."),(0,a.kt)("p",null,"When you create a Ganache workspace, enter your MetaMask seed phrase into\nthe ",(0,a.kt)("strong",{parentName:"p"},"Account & Keys")," setting.\nGanache automatically gives each of your first 10 accounts 100 test ether (you can configure\nthese numbers in ",(0,a.kt)("strong",{parentName:"p"},"Accounts & Keys"),"), which makes it easy to start development."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Your seed phrase controls all your accounts, so we recommend keeping at least one seed phrase for\ndevelopment, separate from any used to store real value.\nYou can manage multiple seed phrases by using multiple browser profiles, each with its own\nMetaMask installation.")),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Server")," setting of your workspace, find the hostname and port of your Ganache\nnetwork, which comprises the RPC URL of your network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"http://<hostname>:<port>\n")),(0,a.kt)("p",null,"In the MetaMask extension, connect to your Ganache network:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the network you're currently connected to."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add network"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add a network manually"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the RPC URL of your network."),(0,a.kt)("li",{parentName:"ol"},"Enter MetaMask's default ",(0,a.kt)("a",{parentName:"li",href:"/add-permission-to-delete-preview/wallet/get-started/detect-network#chain-ids"},"chain ID")," for Ganache, ",(0,a.kt)("inlineCode",{parentName:"li"},"1337"),".")),(0,a.kt)("h2",{id:"reset-your-local-nonce-calculation"},"Reset your local nonce calculation"),(0,a.kt)("p",null,"If you restart your development network, you can accidentally confuse MetaMask\nbecause it calculates the next ",(0,a.kt)("a",{parentName:"p",href:"/add-permission-to-delete-preview/wallet/how-to/send-transactions#nonce"},"nonce")," based on both the\nnetwork state ",(0,a.kt)("em",{parentName:"p"},"and")," the known sent transactions."),(0,a.kt)("p",null,"To clear MetaMask's transaction queue and reset its nonce calculation, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings > Advanced"),"\nand select ",(0,a.kt)("strong",{parentName:"p"},"Reset account"),"."))}u.isMDXComponent=!0}}]);