"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[82],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(t),g=s,h=l["".concat(p,".").concat(g)]||l[g]||m[g]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},38413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const r={description:"Learn about the Keyring API.",sidebar_position:7,sidebar_custom_props:{flask_only:!0},tags:["Keyring API"]},i="About the Keyring API",o={unversionedId:"concepts/keyring-api",id:"concepts/keyring-api",title:"About the Keyring API",description:"Learn about the Keyring API.",source:"@site/snaps/concepts/keyring-api.md",sourceDirName:"concepts",slug:"/concepts/keyring-api",permalink:"/zs/signature-insights-docs/snaps/concepts/keyring-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/keyring-api.md",tags:[{label:"Keyring API",permalink:"/zs/signature-insights-docs/snaps/tags/keyring-api"}],version:"current",sidebarPosition:7,frontMatter:{description:"Learn about the Keyring API.",sidebar_position:7,sidebar_custom_props:{flask_only:!0},tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Snaps security guidelines",permalink:"/zs/signature-insights-docs/snaps/concepts/security-guidelines"},next:{title:"Tutorials",permalink:"/zs/signature-insights-docs/snaps/tutorials"}},p={},c=[{value:"System context diagram",id:"system-context-diagram",level:2},{value:"Account management Snap installation flow",id:"account-management-snap-installation-flow",level:2},{value:"Custom account creation flow",id:"custom-account-creation-flow",level:2},{value:"Transaction flows",id:"transaction-flows",level:2},{value:"Synchronous transaction flow",id:"synchronous-transaction-flow",level:3},{value:"Asynchronous transaction flow",id:"asynchronous-transaction-flow",level:3},{value:"Supported signing methods",id:"supported-signing-methods",level:2},{value:"Example",id:"example",level:2}],u={toc:c},l="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(l,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"about-the-keyring-api"},"About the Keyring API"),(0,s.kt)("p",null,"The Keyring API integrates custom EVM accounts inside MetaMask.\nYou can use the Keyring API to display custom accounts, such as multi-party computation (MPC)\naccounts, alongside regular MetaMask accounts in the user interface:"),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(56517).Z,alt:"Account management Snap accounts in Metamask UI",width:"360",style:{border:"1px solid gray"}})),(0,s.kt)("p",null,"To use the Keyring API, you first ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/how-to/use-keyring-api/create-account-snap"},"implement the API in an account management Snap"),'\n(also known as an "account Snap").\nYou can then ',(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/how-to/use-keyring-api/create-companion-dapp"},"call Keyring API methods from a companion dapp"),"\nto enable users to create and interact with the custom accounts."),(0,s.kt)("admonition",{type:"flaskOnly"}),(0,s.kt)("admonition",{title:"see also",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/how-to/use-keyring-api/create-account-snap"},"Create an account management Snap")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/how-to/use-keyring-api/create-companion-dapp"},"Create an account management companion dapp")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/how-to/use-keyring-api/security"},"Account management Snap security guidelines")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,s.kt)("h2",{id:"system-context-diagram"},"System context diagram"),(0,s.kt)("p",null,"The following diagram shows the system context when interacting with accounts managed by an account\nmanagement Snap:"),(0,s.kt)("p",{align:"center"},(0,s.kt)("mermaid",{value:"graph TD\n  User --\x3e|Use to submit requests<br/>and manage accounts| MetaMask\n  User --\x3e|Start requests| Dapp\n  User --\x3e|Use to manage<br/>requests and accounts| Site\n  Dapp --\x3e|Submit requests| MetaMask\n  Site[Snap companion dapp] --\x3e|Manage requests<br/>and accounts| MetaMask\n  MetaMask --\x3e|Submit requests and<br/>manage accounts| Snap\n  Snap --\x3e|Notify about account<br/>and request events| MetaMask"})),(0,s.kt)("p",null,"The diagram contains the following components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"User")," - The user interacting with the dapp, the Snap companion dapp, and MetaMask."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Dapp")," - The dapp requesting an action to be performed on an account."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MetaMask")," - The wallet the dapp connects to.\nMetaMask routes requests to the account management Snap and lets the user perform some level of\naccount management."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Snap")," - The account management Snap that implements the Keyring API to manage the user's\naccounts and handle requests that use these accounts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Snap companion dapp")," - The Snap's user interface component that allows the user to interact with\nthe Snap to manage accounts and requests.")),(0,s.kt)("h2",{id:"account-management-snap-installation-flow"},"Account management Snap installation flow"),(0,s.kt)("p",null,"The first process a user encounters when using an account management Snap is the Snap installation flow.\nThis process can be initiated through MetaMask's or the Snap companion dapp.\nThe flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nalt Optional\n  User ->>+ MetaMask: Add account Snap\n  MetaMask ->> MetaMask: Display suggested Snaps\n  User ->> MetaMask: Select Snap\n  MetaMask ->> Site: Open in a new tab\n  deactivate MetaMask\nend\n\nSite ->>+ MetaMask: Install Snap?\nMetaMask ->> MetaMask: Display permissions dialog\nUser ->> MetaMask: Approve permissions\nMetaMask --\x3e>- Site: OK"}),(0,s.kt)("p",null,"The MetaMask account selection modal has an option called ",(0,s.kt)("strong",{parentName:"p"},"Add account Snap"),".\nThis option shows a list of account management Snaps.\nEach Snap redirects the user to the companion dapp that contains the user interface to configure and\nmanage the Snap."),(0,s.kt)("h2",{id:"custom-account-creation-flow"},"Custom account creation flow"),(0,s.kt)("p",null,"Once the account management Snap is installed, the user can use the Snap companion dapp to create or\nimport custom accounts.\nThe flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 15,\n      'width': 245\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Site: Create new account\nSite ->> Site: Custom logic to create account\nSite ->>+ Snap: keyring_createAccount(options)\nSnap ->> Snap: Custom logic to create account\nSnap ->>+ MetaMask: snap_manageAccounts(\"notify:accountCreated\", account)\nUser ->> MetaMask: Approve account creation\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\nSite --\x3e>- User: Done"}),(0,s.kt)("p",null,"The companion dapp presents a user interface allowing the user to configure their custom account.\nThe dapp creates an account using ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#createaccount"},(0,s.kt)("inlineCode",{parentName:"a"},"keyring_createAccount")),"."),(0,s.kt)("p",null,"The Snap keeps track of the accounts that it creates using ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/rpc-api#snap_managestate"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nOnce the Snap has created an account, it notifies MetaMask using\n",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/rpc-api#snap_manageaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageAccounts")),"."),(0,s.kt)("p",null,"Once the Snap has created an account, that account can be used to sign messages and transactions."),(0,s.kt)("h2",{id:"transaction-flows"},"Transaction flows"),(0,s.kt)("p",null,"The Keyring API supports two flows for handling requests: ",(0,s.kt)("a",{parentName:"p",href:"#synchronous-transaction-flow"},"synchronous"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"#asynchronous-transaction-flow"},"asynchronous"),"."),(0,s.kt)("p",null,"In general, you should use the asynchronous flow when the request requires user interaction (for\nexample, using a hardware key or a threshold signature scheme) or when the request takes a long time\nto complete.\nYou should use the synchronous flow for any other use case."),(0,s.kt)("h3",{id:"synchronous-transaction-flow"},"Synchronous transaction flow"),(0,s.kt)("p",null,"The synchronous flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Custom logic to handle request\nSnap --\x3e>- MetaMask: { pendind: false, result }\n\nMetaMask --\x3e>- Dapp: result\n\nDapp --\x3e>- User: Done"}),(0,s.kt)("p",null,"The flow starts when a user or dapp initiates a ",(0,s.kt)("a",{parentName:"p",href:"#supported-signing-methods"},"sign request"),".\nAt that point, MetaMask detects that this interaction is requested for an account controlled by the\naccount management Snap."),(0,s.kt)("p",null,"After the user approves the transaction in MetaMask, MetaMask calls\n",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/type-aliases/Keyring#submitrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"keyring_submitRequest")),", which\nreceives the original RPC request and returns a\n",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/variables/SubmitRequestResponseStruct"},(0,s.kt)("inlineCode",{parentName:"a"},"SubmitRequestResponse")),"\nwith ",(0,s.kt)("inlineCode",{parentName:"p"},"pending")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," set to the requested signature."),(0,s.kt)("h3",{id:"asynchronous-transaction-flow"},"Asynchronous transaction flow"),(0,s.kt)("p",null,"The asynchronous flow looks like the following:"),(0,s.kt)("mermaid",{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 20,\n      'width': 200\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Save request to Snap's state\nSnap --\x3e>- MetaMask: { pending: true, redirect? }\nalt There is a redirect URL\n  User ->> MetaMask: Acknowledge redirection\n  MetaMask ->>+ Site: Open redirect URL in a new tab\nend\ndeactivate MetaMask\n\nSite ->>+ Snap: keyring_getRequest(id)\nSnap --\x3e>- Site: request\n\nSite ->> Site: Custom logic to handle request\nSite ->>+ Snap: keyring_approveRequest(id, data?)\nSnap ->> Snap: Custom logic to handle request\nSnap ->>+ MetaMask: snap_manageAccounts(\"notify:requestApproved\", { id, result })\n\nMetaMask --\x3e> Dapp: result\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\ndeactivate Site\n\nDapp --\x3e>- User: Done"}),(0,s.kt)("p",null,"The flow starts the same way as the ",(0,s.kt)("a",{parentName:"p",href:"#synchronous-transaction-flow"},"synchronous flow"),": a user or\ndapp initiates a ",(0,s.kt)("a",{parentName:"p",href:"#supported-signing-methods"},"sign request"),".\nAfter approval, MetaMask calls ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/type-aliases/Keyring#submitrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"keyring_submitRequest")),"."),(0,s.kt)("p",null,"Since the Snap doesn't answer the request directly, it stores the pending request in its internal\nstate using ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/rpc-api#snap_managestate"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThe Snap sends a ",(0,s.kt)("inlineCode",{parentName:"p"},"{ pending: true, redirect? }")," response to indicate that the request will be\nhandled asynchronously.\nThis response can optionally contain a redirect URL that MetaMask will open in a new tab to allow\nthe user to interact with the Snap companion dapp."),(0,s.kt)("p",null,"The companion dapp gets the Snap's pending request using\n",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#getrequest"},(0,s.kt)("inlineCode",{parentName:"a"},"keyring_getRequest")),".\nIt resolves the request using\n",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#approverequest"},(0,s.kt)("inlineCode",{parentName:"a"},"keyring_approveRequest")),",\nand the Snap resolves the request using ",(0,s.kt)("a",{parentName:"p",href:"/zs/signature-insights-docs/snaps/reference/rpc-api#snap_manageaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_manageAccounts")),",\nnotifying MetaMask of the result."),(0,s.kt)("h2",{id:"supported-signing-methods"},"Supported signing methods"),(0,s.kt)("p",null,"An account management Snap can implement support for handling the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,s.kt)("inlineCode",{parentName:"a"},"personal_sign")),",\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signtypeddata_v4"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),", and\n",(0,s.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_signTransaction")),"\nEthereum signing methods."),(0,s.kt)("p",null,"The Snap can also implement support for ",(0,s.kt)("a",{parentName:"p",href:"/wallet/concepts/signing-methods/#deprecated-signing-methods"},"deprecated signing\nmethods")," that some dapps still\nmight use."),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring"},"example account management Snap source code")," for more information."))}m.isMDXComponent=!0},56517:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/accounts-ui-6200682f7b2f25a2753108a83abad199.png"}}]);