"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={description:"Set an icon on MetaMask for your dapp."},i="Set an icon",p={unversionedId:"how-to/set-icon",id:"how-to/set-icon",title:"Set an icon",description:"Set an icon on MetaMask for your dapp.",source:"@site/wallet/how-to/set-icon.md",sourceDirName:"how-to",slug:"/how-to/set-icon",permalink:"/add-permission-to-delete-preview/wallet/how-to/set-icon",draft:!1,tags:[],version:"current",frontMatter:{description:"Set an icon on MetaMask for your dapp."},sidebar:"walletSidebar",previous:{title:"Secure your dapp",permalink:"/add-permission-to-delete-preview/wallet/how-to/secure-dapp"},next:{title:"Use the onboarding library",permalink:"/add-permission-to-delete-preview/wallet/how-to/use-onboarding-library"}},c={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-an-icon"},"Set an icon"),(0,o.kt)("p",null,"When your dapp makes a login request to a MetaMask user, MetaMask may render a modal that displays\nyour dapp icon."),(0,o.kt)("p",null,"MetaMask retrieves this icon using the HTML selector ",(0,o.kt)("inlineCode",{parentName:"p"},'<head> link[rel="shortcut icon"]'),", so you can\nfollow the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Favicon"},"favicon standard")," to customize your dapp icon.\nMake sure to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag within your dapp's ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'rel = "shortcut icon"'),", as in the\nfollowing example.\nThe tag's ",(0,o.kt)("inlineCode",{parentName:"p"},"href")," attribute is used for assigning the dapp icon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  <link rel="shortcut icon" href="https://your-dapp.com/your-icon.png" />\n</head>\n')))}u.isMDXComponent=!0}}]);