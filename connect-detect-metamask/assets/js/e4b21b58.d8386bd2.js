"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},o="Connect to MetaMask",l={unversionedId:"how-to/connect/index",id:"how-to/connect/index",title:"Connect to MetaMask",description:"Connect to MetaMask via EIP-6963.",source:"@site/wallet/how-to/connect/index.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/",permalink:"/connect-detect-metamask/wallet/how-to/connect/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/connect-detect-metamask/wallet/how-to"},next:{title:"Detect MetaMask",permalink:"/connect-detect-metamask/wallet/how-to/connect/detect-metamask"}},s={},p=[{value:"Connect to MetaMask using third-party libraries",id:"connect-to-metamask-using-third-party-libraries",level:2},{value:"Connect to MetaMask directly using Vite",id:"connect-to-metamask-directly-using-vite",level:2},{value:"Vanilla TypeScript",id:"vanilla-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project",level:4},{value:"2. Set up the project",id:"2-set-up-the-project",level:4},{value:"3. Update <code>main.ts</code>",id:"3-update-maints",level:4},{value:"4. Connect to wallets",id:"4-connect-to-wallets",level:4},{value:"5. View the project",id:"5-view-the-project",level:4},{value:"Example",id:"example",level:4},{value:"React TypeScript",id:"react-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project-1",level:4},{value:"2. Update <code>App.tsx</code>",id:"2-update-apptsx",level:4},{value:"3. Detect and connect to wallets",id:"3-detect-and-connect-to-wallets",level:4},{value:"4. Add React hooks",id:"4-add-react-hooks",level:4},{value:"5. Create utility functions",id:"5-create-utility-functions",level:4},{value:"Example",id:"example-1",level:4},{value:"Next steps",id:"next-steps",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-metamask"},"Connect to MetaMask"),(0,r.kt)("p",null,"You can connect your dapp to users' MetaMask wallets by detecting MetaMask in their browsers and\nconnecting to their accounts."),(0,r.kt)("p",null,"The recommended method for connecting to MetaMask or other browser wallets is using the wallet\ndetection mechanism introduced by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),".\nThis method allows you to detect multiple wallets and connect to them without conflicts."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about EIP-6963 in ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/concepts/wallet-interoperability"},"Wallet interoperability"),".")),(0,r.kt)("p",null,"You can connect to MetaMask ",(0,r.kt)("a",{parentName:"p",href:"#connect-to-metamask-using-third-party-libraries"},"using third-party libraries"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"#connect-to-metamask-directly-using-vite"},"directly using Vite"),"."),(0,r.kt)("h2",{id:"connect-to-metamask-using-third-party-libraries"},"Connect to MetaMask using third-party libraries"),(0,r.kt)("p",null,"You can connect to MetaMask using the following third-party libraries that support EIP-6963:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wagmi.sh"},"Wagmi 2+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wevm/mipd"},"MIPD Store")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rainbowkit.com"},"RainbowKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onboard.blocknative.com"},"Web3-Onboard"))),(0,r.kt)("h2",{id:"connect-to-metamask-directly-using-vite"},"Connect to MetaMask directly using Vite"),(0,r.kt)("p",null,"To connect to MetaMask directly, we recommend implementing support for EIP-6963 using the\n",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," build tool with ",(0,r.kt)("a",{parentName:"p",href:"#vanilla-typescript"},"Vanilla TypeScript")," or\n",(0,r.kt)("a",{parentName:"p",href:"#react-typescript"},"React TypeScript"),"."),(0,r.kt)("h3",{id:"vanilla-typescript"},"Vanilla TypeScript"),(0,r.kt)("p",null,"Follow these steps for creating a Vanilla TypeScript project to connect to MetaMask:"),(0,r.kt)("h4",{id:"1-create-a-project"},"1. Create a project"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Create a Vite project")," using the\ntemplate for Vanilla TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest vanilla-ts-6963 -- --template vanilla-ts\n")),(0,r.kt)("h4",{id:"2-set-up-the-project"},"2. Set up the project"),(0,r.kt)("p",null,"In your Vite project, update ",(0,r.kt)("inlineCode",{parentName:"p"},"src/vite-env.d.ts")," with the\n",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/concepts/wallet-interoperability#eip-6963-interfaces"},"EIP-6963 interfaces"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/vite-env.d.ts"',title:'"src/vite-env.d.ts"'},'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n    rdns: string\n    uuid: string\n    name: string\n    icon: string\n}\n\ninterface EIP6963ProviderDetail {\n    info: EIP6963ProviderInfo\n    provider: EIP1193Provider\n}\n\ntype EIP6963AnnounceProviderEvent = {\n    detail: {\n        info: EIP6963ProviderInfo,\n        provider: Readonly<EIP1193Provider>,\n    }\n}\n\ninterface EIP1193Provider {\n    isStatus?: boolean\n    host?: string\n    path?: string\n    sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n    send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n    request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In addition to the EIP-6963 interfaces, you need a ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for\nEthereum wallet providers, and represents the essential properties and methods for interacting with\nMetaMask and other Ethereum wallets in JavaScript.")),(0,r.kt)("h4",{id:"3-update-maints"},"3. Update ",(0,r.kt)("inlineCode",{parentName:"h4"},"main.ts")),(0,r.kt)("p",null,"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"main.ts")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},'import "./style.css"\nimport { listProviders } from "./providers.ts"\n\ndocument.querySelector<HTMLDivElement>(\'#app\')!.innerHTML = `\n    <div>\n        <div id="providerButtons"></div>\n    </div>\n`\n\nlistProviders(document.querySelector<HTMLDivElement>("#providerButtons")!)\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelector")," finds and returns the first HTML element that matches the CSS selector ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),",\nand sets its ",(0,r.kt)("inlineCode",{parentName:"p"},"innerHTML"),".\nYou need to include a basic HTML structure with an inner ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," to inject a list of buttons, each\nrepresenting a detected wallet provider."),(0,r.kt)("p",null,"You'll create the ",(0,r.kt)("inlineCode",{parentName:"p"},"listProviders")," function next, and pass an argument which represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element.\nThis function will connect to the specific provider using the\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method, then use ",(0,r.kt)("inlineCode",{parentName:"p"},"appendChild")," to\nadd each button within the ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"providerButtons"),"."),(0,r.kt)("h4",{id:"4-connect-to-wallets"},"4. Connect to wallets"),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"providers.ts")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="providers.ts"',title:'"providers.ts"'},'declare global {\n    interface WindowEventMap {\n        "eip6963:announceProvider": CustomEvent\n    }\n}\n\nconst connectWithProvider = async (wallet: EIP6963AnnounceProviderEvent["detail"]) => {\n    try {\n        await wallet.provider\n            .request({ method: "eth_requestAccounts" })\n    } catch (error) {\n        console.error("Failed to connect to provider:", error)\n    }\n}\n\nexport function listProviders(element: HTMLDivElement) {\n    window.addEventListener("eip6963:announceProvider",\n        (event: EIP6963AnnounceProviderEvent) => {\n            const button = document.createElement("button")\n        \n            button.innerHTML = `\n                <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" />\n                <div>${event.detail.info.name}</div>\n            `\n        \n            button.onclick = () => connectWithProvider(event.detail)\n            element.appendChild(button)\n        }\n    )\n\n    window.dispatchEvent(new Event("eip6963:requestProvider"))\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," function connects the user to the selected provider using\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts")),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," object is passed as an argument to the function, indicating the argument type."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listProviders")," function uses a simplified approach.\nInstead of mapping and joining an entire block of HTML, it directly passes the ",(0,r.kt)("inlineCode",{parentName:"p"},"event.detail")," object\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," function when a provider is announced."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," is called when a user selects the button."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"window.dispatchEvent")," notifies event listeners and other parts of the dapp that a provider is being requested."),(0,r.kt)("h4",{id:"5-view-the-project"},"5. View the project"),(0,r.kt)("p",null,"Run the following command to view and test the Vite project in your browser:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-vanilla-ts-eip-6963"},"Vanilla TypeScript example")," for more information.\nYou can clone the repository and run the example locally using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i && npm run dev"),"."),(0,r.kt)("h3",{id:"react-typescript"},"React TypeScript"),(0,r.kt)("p",null,"Follow these steps for creating a React TypeScript project to connect to MetaMask:"),(0,r.kt)("h4",{id:"1-create-a-project-1"},"1. Create a project"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Create a Vite project")," using the\ntemplate for React TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest react-ts-6963 -- --template react-ts\n")),(0,r.kt)("h4",{id:"2-update-apptsx"},"2. Update ",(0,r.kt)("inlineCode",{parentName:"h4"},"App.tsx")),(0,r.kt)("p",null,"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'import "./App.css"\nimport { DiscoverWalletProviders } from "./components/DiscoverWalletProviders"\n\nfunction App() {\n    return (\n        <DiscoverWalletProviders/>\n    )\n}\n\nexport default App\n')),(0,r.kt)("p",null,"This code renders the ",(0,r.kt)("inlineCode",{parentName:"p"},"DiscoverWalletProviders")," component that contains the logic for detecting and\nconnecting to wallet providers."),(0,r.kt)("h4",{id:"3-detect-and-connect-to-wallets"},"3. Detect and connect to wallets"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components")," directory, create a component ",(0,r.kt)("inlineCode",{parentName:"p"},"DiscoverWalletProviders.tsx")," with the\nfollowing code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/components/DiscoverWalletProviders.tsx"',title:'"/components/DiscoverWalletProviders.tsx"'},'import { useState } from "react"\nimport { useSyncProviders } from "../hooks/useSyncProviders"\nimport { formatAddress } from "~/utils"\n\nexport const DiscoverWalletProviders = () => {\n    const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n    const [userAccount, setUserAccount] = useState<string>("")\n    const providers = useSyncProviders()\n\n    const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n        try {\n            const accounts = await providerWithInfo.provider.request({ \n                method: "eth_requestAccounts"\n            })\n\n            setSelectedWallet(providerWithInfo)\n            setUserAccount(accounts?.[0])\n        } catch (error) {\n            console.error(error)\n        }\n    }\n\n    return (\n        <>\n            <h2>Wallets Detected:</h2>\n            <div>\n                {\n                    providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n                        <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n                          <img src={provider.info.icon} alt={provider.info.name} />\n                          <div>{provider.info.name}</div>\n                        </button>\n                    )) :\n                        <div>\n                            No Announced Wallet Providers\n                        </div>\n                }\n            </div>\n            <hr />\n            <h2>{userAccount ? "" : "No "}Wallet Selected</h2>\n            {userAccount &&\n                <div>\n                    <div>\n                        <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n                        <div>{selectedWallet.info.name}</div>\n                        <div>({formatAddress(userAccount)})</div>\n                    </div>\n                </div>\n            }\n        </>\n    )\n}\n')),(0,r.kt)("p",null,"In this code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectedWallet")," is a state variable that holds the user's most recently selected wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userAccount")," is a state variable that holds the user's connected wallet's address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useSyncProviders")," is a custom hook that returns the providers array (wallet extensions installed\nin the browser).")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"handleConnect")," function takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"providerWithInfo"),", which is an ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP6963ProviderDetail")," object.\nThat object is used to request the user's accounts from the provider using the\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,r.kt)("p",null,"If the request succeeds, the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedWallet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"userAccount")," local state variables are set."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," maps over the providers array and renders a button for each detected provider."),(0,r.kt)("p",null,"Finally, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"userAccount")," state variable is not empty, the selected wallet icon, name, and\naddress are displayed."),(0,r.kt)("h4",{id:"4-add-react-hooks"},"4. Add React hooks"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks")," directory and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"store.ts")," file with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/store.ts"',title:'"hooks/store.ts"'},'declare global{\n    interface WindowEventMap {\n        "eip6963:announceProvider": CustomEvent\n    }\n}\n\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n    value: ()=> providers,\n    subscribe: (callback: ()=> void) => {\n        function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n            if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n            providers = [...providers, event.detail]\n            callback()\n        }\n    \n        window.addEventListener("eip6963:announceProvider", onAnnouncement)\n        window.dispatchEvent(new Event("eip6963:requestProvider"))\n        \n        return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n    }\n}\n')),(0,r.kt)("p",null,"You ",(0,r.kt)("inlineCode",{parentName:"p"},"declare")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"global")," window event map to include the ",(0,r.kt)("inlineCode",{parentName:"p"},'"eip6963:announceProvider"')," event as it\nis not standard.\nYou need an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP6963ProviderDetail")," objects to store the detected wallet providers."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"store")," is an object that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," methods used with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore")," hook.\nIt allows you to subscribe to events, read updated values, and update components if necessary."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," method returns the providers array.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method takes a callback function that creates an event listener for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"eip6963:announceProvider")," event.\nYou listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},"eip6963:announceProvider")," event and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"onAnnouncement")," function when\nthe event is triggered."),(0,r.kt)("p",null,"Next, you dispatch the ",(0,r.kt)("inlineCode",{parentName:"p"},"eip6963:requestProvider")," event which triggers the event listener in the\nMetaMask wallet.\nFinally, you return a function that removes the event listener."),(0,r.kt)("p",null,"Add a file ",(0,r.kt)("inlineCode",{parentName:"p"},"useSyncProviders.ts")," with the following code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/useSyncProviders.ts"',title:'"hooks/useSyncProviders.ts"'},'import { useSyncExternalStore } from "react"\nimport { store } from "./store"\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,r.kt)("p",null,"This hook allows you to subscribe to events, read updated values, and update components if necessary."),(0,r.kt)("p",null,"In this case, the external store is the MetaMask wallet state and events."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," object contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," methods:\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," method returns the providers array.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method takes a callback function that creates an event listener for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"eip6963:announceProvider")," event."),(0,r.kt)("h4",{id:"5-create-utility-functions"},"5. Create utility functions"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"util")," directory, add a file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="util/index.ts"',title:'"util/index.ts"'},"export const formatBalance = (rawBalance: string) => {\n    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)\n    return balance\n}\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n    const chainIdNum = parseInt(chainIdHex)\n    return chainIdNum\n}\n\nexport const formatAddress = (addr: string) => {\n    const upperAfterLastTwo = addr.slice(0,2) + addr.slice(2)\n    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n}\n")),(0,r.kt)("p",null,"This is a good place to store utility functions that you might need to reuse throughout your dapp.\nThis example only uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatAddress")," function, but the others might be useful for other applications."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963"},"React TypeScript example")," for more information.\nYou can clone the repository and run the example locally using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i && npm run dev"),"."),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"After connecting to MetaMask directly, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../manage-networks"},"Detect, add, and switch networks"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/how-to/send-transactions"},"Send transactions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/how-to/sign-data/"},"Sign data"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../display"},"Display tokens, contract methods, and icons in MetaMask"),".")))}u.isMDXComponent=!0}}]);