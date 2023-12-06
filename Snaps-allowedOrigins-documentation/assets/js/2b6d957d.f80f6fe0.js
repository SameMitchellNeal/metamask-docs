"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=l(n),c=o,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const s={description:"Develop, test, and publish a Snap.",sidebar_position:1},i="Develop a Snap",r={unversionedId:"how-to/develop-a-snap",id:"how-to/develop-a-snap",title:"Develop a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/develop-a-snap.md",sourceDirName:"how-to",slug:"/how-to/develop-a-snap",permalink:"/Snaps-allowedOrigins-documentation/snaps/how-to/develop-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/develop-a-snap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/Snaps-allowedOrigins-documentation/snaps/how-to"},next:{title:"Request permissions",permalink:"/Snaps-allowedOrigins-documentation/snaps/how-to/request-permissions"}},p={},l=[{value:"Detect the user&#39;s MetaMask version",id:"detect-the-users-metamask-version",level:2},{value:"Test your Snap",id:"test-your-snap",level:2},{value:"Debug your Snap",id:"debug-your-snap",level:2},{value:"Publish your Snap",id:"publish-your-snap",level:2},{value:"Distribute your Snap",id:"distribute-your-snap",level:2},{value:"Resources and tools",id:"resources-and-tools",level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"develop-a-snap"},"Develop a Snap"),(0,o.kt)("p",null,"A Snap can extend the dapp-facing ",(0,o.kt)("a",{parentName:"p",href:"/wallet/reference/rpc-api"},"MetaMask JSON-RPC API")," in\narbitrary ways, or integrate with and extend the functionality of MetaMask using the\n",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/reference/exports"},"Snaps Exports"),", ",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/how-to/request-permissions"},"permissions"),"."),(0,o.kt)("p",null,"Before developing a Snap, it's important to understand:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Snaps-allowedOrigins-documentation/snaps/concepts/anatomy"},"The Snap anatomy"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Snaps-allowedOrigins-documentation/snaps/concepts/lifecycle"},"The Snap lifecycle"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Snaps-allowedOrigins-documentation/snaps/concepts/user-interface"},"The Snap user interface"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Snaps-allowedOrigins-documentation/snaps/concepts/execution-environment"},"The MetaMask Snaps execution environment"),".")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/get-started/quickstart"},"get started quickly using the Snaps template")," or follow a\n",(0,o.kt)("a",{parentName:"p",href:"/snaps/category/tutorials"},"tutorial"),"."),(0,o.kt)("p",null,"This page describes additional important steps when developing a Snap."),(0,o.kt)("h2",{id:"detect-the-users-metamask-version"},"Detect the user's MetaMask version"),(0,o.kt)("p",null,"When developing a website that depends on ",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/get-started/install-flask#install-metamask-flask"},"MetaMask Flask"),",\nyou first need to know whether the user has it installed."),(0,o.kt)("p",null,"The following example uses the\n",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,o.kt)("h2",{id:"test-your-snap"},"Test your Snap"),(0,o.kt)("p",null,"Test your Snap by hosting it locally using ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap serve"),", installing it in Flask, and calling its\nAPI methods from a web page."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you use the template Snap monorepo, running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," will serve the Snap at\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,o.kt)("inlineCode",{parentName:"a"},"http://localhost:8080")))),(0,o.kt)("p",null,"For end-to-end Snap testing, ",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/how-to/test-a-snap"},"use the ",(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")," package"),"."),(0,o.kt)("h2",{id:"debug-your-snap"},"Debug your Snap"),(0,o.kt)("p",null,"To debug your Snap, use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process.\nYou can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,o.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,o.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,o.kt)("li",{parentName:"ol"},"Toggle ",(0,o.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,o.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,o.kt)("strong",{parentName:"li"},"Details"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,o.kt)("p",null,"The log output displays in the console that pops up."),(0,o.kt)("h2",{id:"publish-your-snap"},"Publish your Snap"),(0,o.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,o.kt)("li",{parentName:"ul"},"The image specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,o.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,o.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,o.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using the Snap template, make sure to only publish the Snap package in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,o.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,o.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,o.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,o.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,o.kt)("p",null,"You should deploy a dapp where users can learn about your Snap and install it, or integrate with your existing dapp."),(0,o.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to ",(0,o.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/how-to/work-with-existing-snaps"},"integrate your Snap"),"."),(0,o.kt)("h2",{id:"resources-and-tools"},"Resources and tools"),(0,o.kt)("p",null,"You can review the growing number of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples"},"example Snaps")," maintained by MetaMask, as well as the following fully functional and open source Snaps: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ziad-saab/dogecoin-snap"},"Dogecoin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Consensys/starknet-snap"},"StarkNet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Montoya/mobymask-snap"},"MobyMask Phishing Warning"))),(0,o.kt)("p",null,"MetaMask also maintains tools to help developers build, debug, and maintain Snaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/template-snap-monorepo"},"Template Snap")," - A template that includes\nTypeScript/React and vanilla JavaScript options and a CLI for building, packaging, and deploying\nyour Snap and a companion dapp."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.github.io/snaps/snaps-simulator/latest"},"Snaps Simulator")," - A developer tool built for simulating Snaps in the browser, streamlining the development process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/test-snaps"},"Test Snaps")," - A collection of test Snaps and a dapp for\nevaluating them.")),(0,o.kt)("p",null,"If you have any questions, ask them on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),", and if you encounter\nany issues, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/issues"},"open a GitHub issue"),"."))}d.isMDXComponent=!0}}]);