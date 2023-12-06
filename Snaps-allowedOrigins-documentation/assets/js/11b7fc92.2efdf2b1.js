"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,m=l["".concat(c,".").concat(u)]||l[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={description:"MetaMask Ethereum provider API reference",sidebar_position:3},i="Ethereum provider API",s={unversionedId:"reference/provider-api",id:"reference/provider-api",title:"Ethereum provider API",description:"MetaMask Ethereum provider API reference",source:"@site/wallet/reference/provider-api.md",sourceDirName:"reference",slug:"/reference/provider-api",permalink:"/Snaps-allowedOrigins-documentation/wallet/reference/provider-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/provider-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"MetaMask Ethereum provider API reference",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Unity SDK API",permalink:"/Snaps-allowedOrigins-documentation/wallet/reference/sdk-unity-api"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"window.ethereum.isMetaMask",id:"windowethereumismetamask",level:3},{value:"Methods",id:"methods",level:2},{value:"window.ethereum.isConnected()",id:"windowethereumisconnected",level:3},{value:"window.ethereum.request(args)",id:"windowethereumrequestargs",level:3},{value:"window.ethereum._metamask.isUnlocked()",id:"windowethereum_metamaskisunlocked",level:3},{value:"Events",id:"events",level:2},{value:"accountsChanged",id:"accountschanged",level:3},{value:"chainChanged",id:"chainchanged",level:3},{value:"connect",id:"connect",level:3},{value:"disconnect",id:"disconnect",level:3},{value:"message",id:"message",level:3},{value:"Errors",id:"errors",level:2}],p={toc:d},l="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,a.kt)("p",null,"MetaMask injects the ",(0,a.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/wallet/concepts/apis#ethereum-provider-api"},"provider API")," into websites visited\nby its users using the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nYou can use the provider ",(0,a.kt)("a",{parentName:"p",href:"#properties"},"properties"),", ",(0,a.kt)("a",{parentName:"p",href:"#methods"},"methods"),", and ",(0,a.kt)("a",{parentName:"p",href:"#events"},"events")," in\nyour dapp."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"windowethereumismetamask"},"window.ethereum.isMetaMask"),(0,a.kt)("p",null,"This property is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the user has MetaMask installed."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This property is non-standard.\nNon-MetaMask providers may also set this property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"windowethereumisconnected"},"window.ethereum.isConnected()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"window.ethereum.isConnected(): boolean;\n")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the provider is connected to the current chain."),(0,a.kt)("p",null,"If the provider isn't connected, the page must be reloaded to re-establish the connection.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"#connect"},(0,a.kt)("inlineCode",{parentName:"a"},"connect"))," and ",(0,a.kt)("a",{parentName:"p",href:"#disconnect"},(0,a.kt)("inlineCode",{parentName:"a"},"disconnect"))," events for more information."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method is unrelated to ",(0,a.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/wallet/how-to/connect/access-accounts"},"accessing a user's accounts"),'.\nIn the provider interface, "connected" and "disconnected" refer to whether the provider can make RPC\nrequests to the current chain.')),(0,a.kt)("h3",{id:"windowethereumrequestargs"},"window.ethereum.request(args)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestArguments {\n  method: string;\n  params?: unknown[] | object;\n}\n\nwindow.ethereum.request(args: RequestArguments): Promise<unknown>;\n")),(0,a.kt)("p",null,"Use this method to submit ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API requests")," to Ethereum using MetaMask.\nIt returns a promise that resolves to the result of the RPC method call."),(0,a.kt)("p",null,"The parameters and return value vary by RPC method.\nIn practice, if a method has parameters, they're almost always of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<any>"),"."),(0,a.kt)("p",null,"If the request fails, the promise rejects with an ",(0,a.kt)("a",{parentName:"p",href:"#errors"},"error"),"."),(0,a.kt)("p",null,"The following is an example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum.request(args)")," to call\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"params: [\n  {\n    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',\n    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',\n    gas: '0x76c0', // 30400\n    gasPrice: '0x9184e72a000', // 10000000000000\n    value: '0x9184e72a', // 2441406250\n    data:\n      '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',\n  },\n];\n\nwindow.ethereum\n  .request({\n    method: 'eth_sendTransaction',\n    params,\n  })\n  .then((result) => {\n    // The result varies by RPC method.\n    // For example, this method returns a transaction hash hexadecimal string upon success.\n  })\n  .catch((error) => {\n    // If the request fails, the Promise rejects with an error.\n  });\n")),(0,a.kt)("h3",{id:"windowethereum_metamaskisunlocked"},"window.ethereum._metamask.isUnlocked()"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This method is experimental.\nUse it at your own risk.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"window.ethereum._metamask.isUnlocked(): Promise<boolean>;\n")),(0,a.kt)("p",null,"Returns a promise that resolves to a ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," indicating if MetaMask is unlocked by the user.\nMetaMask must be unlocked to perform any operation involving user accounts.\nNote that this method doesn't indicate if the user has exposed any accounts to the caller."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"The MetaMask provider emits events using the Node.js\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/events.html"},(0,a.kt)("inlineCode",{parentName:"a"},"EventEmitter"))," API.\nThe following is an example of listening to the ",(0,a.kt)("a",{parentName:"p",href:"#accountschanged"},(0,a.kt)("inlineCode",{parentName:"a"},"accountsChanged"))," event.\nYou should remove listeners once you're done listening to an event (for example, on component\nunmount in React)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function handleAccountsChanged(accounts) {\n  // Handle new accounts, or lack thereof.\n}\n\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\n// Later\n\nwindow.ethereum.removeListener('accountsChanged', handleAccountsChanged);\n")),(0,a.kt)("p",null,"The first argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum.removeListener")," is the event name, and the second argument is\na reference to the function passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum.on")," for the event."),(0,a.kt)("h3",{id:"accountschanged"},"accountsChanged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"window.ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);\n")),(0,a.kt)("p",null,"The provider emits this event when the return value of the\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," RPC\nmethod changes.\n",(0,a.kt)("inlineCode",{parentName:"p"},"eth_accounts")," returns either an empty array, or an array that contains the addresses of the accounts\nthe caller is permitted to access with the most recently used account first.\nCallers are identified by their URL origin, which means that all sites with the same origin share\nthe same permissions."),(0,a.kt)("p",null,"This means that the provider emits ",(0,a.kt)("inlineCode",{parentName:"p"},"accountsChanged")," when the user's exposed account address changes.\nListen to this event to ",(0,a.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/wallet/how-to/connect/access-accounts#handle-accounts"},"handle accounts"),"."),(0,a.kt)("h3",{id:"chainchanged"},"chainChanged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"window.ethereum.on('chainChanged', handler: (chainId: string) => void);\n")),(0,a.kt)("p",null,"The provider emits this event when the currently connected chain changes.\nListen to this event to ",(0,a.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/wallet/how-to/connect/detect-network"},"detect a user's network"),"."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We strongly recommend reloading the page upon chain changes, unless you have a good reason not to:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"window.ethereum.on('chainChanged', (chainId) => window.location.reload());\n"))),(0,a.kt)("h3",{id:"connect"},"connect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConnectInfo {\n  chainId: string;\n}\n\nwindow.ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);\n")),(0,a.kt)("p",null,"The provider emits this event when it's first able to submit RPC requests to a chain.\nWe recommend listening to this event and using the\n",(0,a.kt)("a",{parentName:"p",href:"#windowethereumisconnected"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.isConnected()"))," provider method to determine when\nthe provider is connected."),(0,a.kt)("h3",{id:"disconnect"},"disconnect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);\n")),(0,a.kt)("p",null,"The provider emits this event if it becomes unable to submit RPC requests to a chain.\nIn general, this only happens due to network connectivity issues or some unforeseen error."),(0,a.kt)("p",null,"When the provider emits this event, it doesn't accept new requests until the connection to the chain\nis re-established, which requires reloading the page.\nYou can also use the ",(0,a.kt)("a",{parentName:"p",href:"#windowethereumisconnected"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.isConnected()"))," provider method\nto determine if the provider is disconnected."),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderMessage {\n  type: string;\n  data: unknown;\n}\n\nwindow.ethereum.on('message', handler: (message: ProviderMessage) => void);\n")),(0,a.kt)("p",null,"The provider emits this event when it receives a message that the user should be notified of.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," property identifies the kind of message."),(0,a.kt)("p",null,"RPC subscription updates are a common use case for this event.\nFor example, if you create a subscription using\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_subscribe")),", each\nsubscription update is emitted as a ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," event with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_subscription"),"."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"All errors returned by the MetaMask provider follow this interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderRpcError extends Error {\n  message: string;\n  code: number;\n  data?: unknown;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)"))," provider method throws errors\neagerly.\nYou can use the error ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," property to determine why the request failed.\nCommon codes and their meaning include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4001")," - The request is rejected by the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-32602")," - The parameters are invalid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-32603")," - Internal error.")),(0,a.kt)("p",null,"For the complete list of errors, see ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193#provider-errors"},"EIP-1193"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474#error-codes"},"EIP-1474"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/package/eth-rpc-errors"},(0,a.kt)("inlineCode",{parentName:"a"},"eth-rpc-errors"))," package implements all RPC errors\nreturned by the MetaMask provider, and can help you identify their meaning.")))}h.isMDXComponent=!0}}]);