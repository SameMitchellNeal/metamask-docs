"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={description:"Create a Snap that provides transaction insights.",sidebar_position:2},s="Create a Snap to calculate gas fee percentages",o={unversionedId:"tutorials/transaction-insights",id:"tutorials/transaction-insights",title:"Create a Snap to calculate gas fee percentages",description:"Create a Snap that provides transaction insights.",source:"@site/snaps/tutorials/transaction-insights.md",sourceDirName:"tutorials",slug:"/tutorials/transaction-insights",permalink:"/Snaps-allowedOrigins-documentation/snaps/tutorials/transaction-insights",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/tutorials/transaction-insights.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a Snap that provides transaction insights.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Create a Snap to estimate gas fees",permalink:"/Snaps-allowedOrigins-documentation/snaps/tutorials/gas-estimation"},next:{title:"Create a Snap to connect to custom EVM accounts",permalink:"/Snaps-allowedOrigins-documentation/snaps/tutorials/custom-evm-accounts"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Enable transaction insights and the Ethereum provider",id:"2-enable-transaction-insights-and-the-ethereum-provider",level:3},{value:"3. Calculate and display the percentage of gas fees",id:"3-calculate-and-display-the-percentage-of-gas-fees",level:3},{value:"4. Build and test the Snap",id:"4-build-and-test-the-snap",level:3},{value:"5. Display a different UI for contract interactions",id:"5-display-a-different-ui-for-contract-interactions",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-snap-to-calculate-gas-fee-percentages"},"Create a Snap to calculate gas fee percentages"),(0,i.kt)("p",null,"This tutorial walks you through creating a Snap that calculates the percentage of gas fees that\na user would pay when creating a transaction.\nThe Snap provides transaction insights in the MetaMask transaction window."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/get-started/install-flask"},"MetaMask Flask installed"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An account on your MetaMask Flask instance with testnet ETH"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.infura.io/faucet"},"Infura's Sepolia faucet")," to get Sepolia ETH."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A text editor (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," version 3"))),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,i.kt)("p",null,"Create a new Snap project using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,i.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI")," by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap transaction-insights-snap\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap transaction-insights-snap\n")),(0,i.kt)("p",null,"Next, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction-insights-snap")," project directory and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,i.kt)("p",null,"This initializes your development environment with the required dependencies."),(0,i.kt)("h3",{id:"2-enable-transaction-insights-and-the-ethereum-provider"},"2. Enable transaction insights and the Ethereum provider"),(0,i.kt)("p",null,"The default template Snap, such as the one in ",(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/tutorials/gas-estimation#5-build-and-test-the-snap"},"Create a gas estimation Snap"),", is set up to expose a JSON-RPC API with a simple hello command, which brings up a\ndialog box.\nIn contrast, the Snap you're creating in this tutorial doesn't expose any API.\nInstead, it provides transaction insights directly in the MetaMask transaction window."),(0,i.kt)("p",null,"In particular, the Snap shows the user the percentage of gas fees they would pay for their transaction.\nIt gets the current gas price by calling the\n",(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/eth_gasPrice"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_gasPrice"))," RPC\nmethod using the global Ethereum provider made available to Snaps."),(0,i.kt)("p",null,"To enable your Snap to provide transaction insights and use the global Ethereum provider, open\n",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/snap.manifest.json")," in a text editor.\nRequest the\n",(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/reference/permissions#endowmenttransaction-insight"},(0,i.kt)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/reference/permissions#endowmentethereum-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider")),"\npermissions by modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPermissions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "endowment:transaction-insight": {},\n  "endowment:ethereum-provider": {}\n}\n')),(0,i.kt)("h3",{id:"3-calculate-and-display-the-percentage-of-gas-fees"},"3. Calculate and display the percentage of gas fees"),(0,i.kt)("p",null,"To calculate and display the gas fees a user would pay as a percentage of their outgoing transaction,\nreplace the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts")," with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import { OnTransactionHandler } from '@metamask/snaps-types';\nimport { heading, panel, text } from '@metamask/snaps-ui';\n\n// Handle outgoing transactions.\nexport const onTransaction: OnTransactionHandler = async ({ transaction }) => {\n\n  // Use the window.ethereum global provider to fetch the gas price.\n  const currentGasPrice = await window.ethereum.request({\n    method: 'eth_gasPrice',\n  });\n\n  // Get fields from the transaction object.\n  const transactionGas = parseInt(transaction.gas as string, 16);\n  const currentGasPriceInWei = parseInt(currentGasPrice ?? '', 16);\n  const maxFeePerGasInWei = parseInt(transaction.maxFeePerGas as string, 16);\n  const maxPriorityFeePerGasInWei = parseInt(\n    transaction.maxPriorityFeePerGas as string,\n    16,\n  );\n\n  // Calculate gas fees the user would pay.\n  const gasFees = Math.min(\n    maxFeePerGasInWei * transactionGas,\n    (currentGasPriceInWei + maxPriorityFeePerGasInWei) * transactionGas,\n  );\n\n  // Calculate gas fees as percentage of transaction.\n  const transactionValueInWei = parseInt(transaction.value as string, 16);\n  const gasFeesPercentage = (gasFees / (gasFees + transactionValueInWei)) * 100;\n\n  // Display percentage of gas fees in the transaction insights UI.\n  return {\n    content: panel([\n      heading('Transaction insights Snap'),\n      text(\n        `As set up, you are paying **${gasFeesPercentage.toFixed(\n          2,\n        )}%** in gas fees for this transaction.`,\n      ),\n    ]),\n  };\n};\n")),(0,i.kt)("h3",{id:"4-build-and-test-the-snap"},"4. Build and test the Snap"),(0,i.kt)("p",null,"To build and test your Snap:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the command line, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," in the root of your project.\nThis starts two development servers: one for watching and compiling the Snap, and another for the\nReact site.\nThe Snap bundle is served from ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and the site is served from ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8000"),".\nYou should get a message that includes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},(0,i.kt)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Connect"),", and accept the permission request.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After connecting, you're prompted to install the Snap with the ",(0,i.kt)("strong",{parentName:"p"},"Fetch and display transaction\ninsights")," and ",(0,i.kt)("strong",{parentName:"p"},"Access the Ethereum provider")," permissions.\nSelect ",(0,i.kt)("strong",{parentName:"p"},"Approve & install"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From MetaMask Flask, create a new testnet ETH transfer.\nYou can set up multiple accounts to transfer between your accounts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the confirmation window, switch to the tab named ",(0,i.kt)("strong",{parentName:"p"},"TYPESCRIPT EXAMPLE SNAP"),".\nSwitching to the tab activates the ",(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/reference/exports#ontransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"onTransaction")),"\nexport of your Snap and displays the percentage of gas fees in the transaction insights UI:"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction insights UI",src:n(25320).Z,width:"714",height:"430"}))),(0,i.kt)("h3",{id:"5-display-a-different-ui-for-contract-interactions"},"5. Display a different UI for contract interactions"),(0,i.kt)("p",null,"The Snap should only display a gas fee percentage if the user is doing a regular ETH transfer.\nFor contract interactions, it should display a UI that conveys that message.\nAdd the following code to the beginning of the ",(0,i.kt)("inlineCode",{parentName:"p"},"onTransaction")," export:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"if (typeof transaction.data === 'string' && transaction.data !== '0x') {\n  return {\n    content: panel([\n      heading('Percent Snap'),\n      text(\n        'This Snap only provides transaction insights for simple ETH transfers.',\n      ),\n    ]),\n  };\n}\n")),(0,i.kt)("h3",{id:"6-next-steps"},"6. Next steps"),(0,i.kt)("p",null,"The initial project has generic names in multiple places.\nYou can update the fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom Snap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proposedName")," - The name of your Snap.\nThis replaces ",(0,i.kt)("strong",{parentName:"li"},"TYPESCRIPT EXAMPLE SNAP")," in the transaction insights UI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," - The description of your Snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repository")," - The URL of your cloned GitHub repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," - The ",(0,i.kt)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your Snap to npm, update the ",(0,i.kt)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,i.kt)("p",null,"Similarly, you should update the ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," sections of\n",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/package.json")," even if you don't plan to publish your Snap to npm."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherits the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field from ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,i.kt)("p",null,"Lastly, you can update the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx"),", such as removing the\ntemplate ",(0,i.kt)("strong",{parentName:"p"},"Send Hello")," button."),(0,i.kt)("p",null,"Once you've made all necessary changes, you can\n",(0,i.kt)("a",{parentName:"p",href:"/Snaps-allowedOrigins-documentation/snaps/how-to/develop-a-snap#publish-your-snap"},"publish your Snap to npm"),"."))}u.isMDXComponent=!0},25320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-insights-29d88c5f31d7cacbdf5a14970724d479.png"}}]);