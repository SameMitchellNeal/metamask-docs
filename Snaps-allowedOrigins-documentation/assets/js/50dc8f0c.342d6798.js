"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Secure your dapp using HTTPS and CSP.",sidebar_position:3},i="Secure your dapp",s={unversionedId:"how-to/get-started-building/secure-dapp",id:"how-to/get-started-building/secure-dapp",title:"Secure your dapp",description:"Secure your dapp using HTTPS and CSP.",source:"@site/wallet/how-to/get-started-building/secure-dapp.md",sourceDirName:"how-to/get-started-building",slug:"/how-to/get-started-building/secure-dapp",permalink:"/Snaps-allowedOrigins-documentation/wallet/how-to/get-started-building/secure-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/get-started-building/secure-dapp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Secure your dapp using HTTPS and CSP.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Run a development network",permalink:"/Snaps-allowedOrigins-documentation/wallet/how-to/get-started-building/run-devnet"},next:{title:"Connect to MetaMask",permalink:"/Snaps-allowedOrigins-documentation/wallet/how-to/connect"}},p={},c=[{value:"Use HTTPS",id:"use-https",level:2},{value:"Use Content Security Policy",id:"use-content-security-policy",level:2},{value:"Use CSP with a server setup",id:"use-csp-with-a-server-setup",level:3},{value:"Use CSP with a static site",id:"use-csp-with-a-static-site",level:3},{value:"Configure your CSP",id:"configure-your-csp",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secure-your-dapp"},"Secure your dapp"),(0,a.kt)("p",null,"We recommend implementing security controls, such as ",(0,a.kt)("a",{parentName:"p",href:"#use-https"},"HTTPS")," and\n",(0,a.kt)("a",{parentName:"p",href:"#use-content-security-policy"},"Content Security Policy (CSP)"),", to improve the security of your dapp\nand protect your users."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The following security advice isn't exhaustive.")),(0,a.kt)("h2",{id:"use-https"},"Use HTTPS"),(0,a.kt)("p",null,"HTTPS can protect your dapp against attackers who might try to eavesdrop or tamper the communication\nchannel between your dapp and your users.\nHTTPS encrypts data transmitted between the web server and the user's browser, making it\ndifficult for attackers to intercept or modify the data."),(0,a.kt)("p",null,"To secure your dapp using HTTPS, obtain an SSL/TLS certificate from a trusted certificate authority (CA).\nFor example, ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," offers free SSL/TLS certificates."),(0,a.kt)("p",null,"Install the certificate it on your web server.\nIf you're using a static website hosting service, it might have a default way to enable HTTPS on\nyour dapp."),(0,a.kt)("h2",{id:"use-content-security-policy"},"Use Content Security Policy"),(0,a.kt)("p",null,"Content Security Policy (CSP) is a security feature that can protect your dapp against various\ntypes of attacks, such as ",(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/xss/"},"cross-site scripting (XSS)"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/Clickjacking"},"clickjacking"),"."),(0,a.kt)("p",null,"CSP defines a set of policies that the browser must follow when displaying the dapp.\nSee the full list of CSP directives that you can enable for your dapp in the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"},"MDN CSP reference documentation"),"."),(0,a.kt)("h3",{id:"use-csp-with-a-server-setup"},"Use CSP with a server setup"),(0,a.kt)("p",null,"If you dapp uses a server setup, enable CSP by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," header in all\nresponses from your server.\nFor example, in Express.js, add the following middleware at the top of your server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use((req, res, next) => {\n  res.setHeader(\n    'Content-Security-Policy',\n    \"default-src 'self'; frame-ancestors 'none'\"\n  );\n  next();\n});\n")),(0,a.kt)("p",null,"In a header, this looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Content-Security-Policy: default-src 'self'; frame-ancestors 'none'\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://content-security-policy.com/examples/"},"more examples")," of CSP in popular web frameworks\nand languages."),(0,a.kt)("h3",{id:"use-csp-with-a-static-site"},"Use CSP with a static site"),(0,a.kt)("p",null,"If your dapp uses a third party hosting provider, and you can't set a custom\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Security-Policy")," header in the server responses, you can enable CSP by using the\n",(0,a.kt)("a",{parentName:"p",href:"https://content-security-policy.com/examples/meta/"},(0,a.kt)("inlineCode",{parentName:"a"},"<meta>")," HTML tag"),"."),(0,a.kt)("p",null,"Add this tag to the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," section of an HTML file to instruct the browser on which CSP directives\nshould be followed.\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  <meta\n    http-equiv=\"Content-Security-Policy\"\n    content=\"default-src 'self'; frame-ancestors 'none'\"\n  />\n</head>\n")),(0,a.kt)("h3",{id:"configure-your-csp"},"Configure your CSP"),(0,a.kt)("p",null,"CSP configuration is specific to each dapp.\nWe recommend starting with the following secure and restrictive CSP:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default-src 'self'; frame-ancestors 'none'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default-src 'self'")," - By default, your dapp's code can't load or connect to content from outside\nyour domain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"frame-ancestors 'none'")," - Your dapp can't be embedded within the webpage of another domain (to\nprevent ",(0,a.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Clickjacking"},"clickjacking attacks"),").")),(0,a.kt)("p",null,"From here, you can make adjustments as needed by your dapp to support the content you want to load.\nFor example, if your dapp loads images hosted on ",(0,a.kt)("a",{parentName:"p",href:"https://opensea.io/"},"OpenSea"),", you can enable this\nby adding ",(0,a.kt)("inlineCode",{parentName:"p"},"img-src 'opensea.io'")," to your CSP:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"default-src: 'self'; frame-ancestors 'none'; img-src: 'opensea.io'\n")),(0,a.kt)("p",null,"For more information and common use cases for CSP, see the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"MDN CSP documentation"),"."))}d.isMDXComponent=!0}}]);