"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?s.createElement(h,a(a({ref:t},m),{},{components:n})):s.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const o={description:"Request and revoke permissions to call restricted methods.",sidebar_position:11},a="Manage permissions",i={unversionedId:"how-to/manage-permissions",id:"how-to/manage-permissions",title:"Manage permissions",description:"Request and revoke permissions to call restricted methods.",source:"@site/wallet/how-to/manage-permissions.md",sourceDirName:"how-to",slug:"/how-to/manage-permissions",permalink:"/edit-comps/wallet/how-to/manage-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/manage-permissions.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{description:"Request and revoke permissions to call restricted methods.",sidebar_position:11},sidebar:"walletSidebar",previous:{title:"Batch JSON-RPC requests",permalink:"/edit-comps/wallet/how-to/batch-json-rpc-requests"},next:{title:"Access a user's MetaMask provider",permalink:"/edit-comps/wallet/how-to/access-provider"}},l={},p=[{value:"Request permissions example",id:"request-permissions-example",level:2},{value:"Revoke permissions example",id:"revoke-permissions-example",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,s.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-permissions"},"Manage permissions"),(0,r.kt)("p",null,"To call a restricted RPC method, your dapp must request permission from the user using\nthe ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestPermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," RPC method.\nYou can get the user's current permissions using ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getPermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions")),",\nand revoke permissions previously granted to your dapp using\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_revokePermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_revokePermissions")),".\nThese methods are specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-2.md"},"MIP-2"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," creates a confirmation asking the user to connect to an account and\nallow the dapp to call the requested method.\nThe confirmation screen describes the functions and data the requested method can access.\nFor example, something like the following confirmation displays when you request permission to call\nthe ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," restricted method:"),(0,r.kt)("div",{class:"row margin-bottom--md"},(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(37960).Z,alt:"Request permissions confirmation 1",style:{border:"1px solid gray"}})),(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(36613).Z,alt:"Request permissions confirmation 2",style:{border:"1px solid gray"}}))),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To access accounts, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),",\nwhich automatically asks for permission to use ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions"),"\ninternally.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/edit-comps/wallet/how-to/access-accounts"},"how to access a user's accounts")," for more information.")),(0,r.kt)("h2",{id:"request-permissions-example"},"Request permissions example"),(0,r.kt)("p",null,"The following example uses ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_requestPermissions")," to request permission from the user to call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'document.getElementById("requestPermissionsButton", requestPermissions);\n\nfunction requestPermissions() {\n    ethereum\n        .request({\n            method: "wallet_requestPermissions",\n            params: [{ eth_accounts: {} }],\n        })\n        .then((permissions) => {\n            const accountsPermission = permissions.find(\n                (permission) => permission.parentCapability === "eth_accounts"\n            );\n            if (accountsPermission) {\n                console.log("eth_accounts permission successfully requested!");\n            }\n        })\n        .catch((error) => {\n            if (error.code === 4001) {\n                // EIP-1193 userRejectedRequest error\n                console.log("Permissions needed to continue.");\n            } else {\n                console.error(error);\n            }\n        });\n}\n')),(0,r.kt)("h2",{id:"revoke-permissions-example"},"Revoke permissions example"),(0,r.kt)("p",null,"The following example uses ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_revokePermissions")," to revoke the dapp's permission to call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await window.ethereum.request({\n    method: "wallet_revokePermissions",\n    params: [\n        {\n            eth_accounts: {},\n        },\n    ],\n});\n')))}u.isMDXComponent=!0},36613:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/request-permissions-2-7526e02a3555f5aeaa609955aea97821.png"},37960:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/request-permissions-81ec11205503d1b5dfde85316a3da5a1.png"}}]);