"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3374],{41300:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=a(74848),s=a(28453);const i={description:"Connect to custom EVM accounts using the Keyring API.",sidebar_position:2,tags:["Keyring API"]},r="Custom EVM accounts",c={id:"features/custom-evm-accounts/index",title:"Custom EVM accounts",description:"Connect to custom EVM accounts using the Keyring API.",source:"@site/snaps/features/custom-evm-accounts/index.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/",permalink:"/fix-link/snaps/features/custom-evm-accounts/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/index.md",tags:[{label:"Keyring API",permalink:"/fix-link/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Connect to custom EVM accounts using the Keyring API.",sidebar_position:2,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Cron jobs",permalink:"/fix-link/snaps/features/cron-jobs"},next:{title:"Create an account management Snap",permalink:"/fix-link/snaps/features/custom-evm-accounts/create-account-snap"}},o={},p=[{value:"System context diagram",id:"system-context-diagram",level:2},{value:"Account management Snap installation flow",id:"account-management-snap-installation-flow",level:2},{value:"Custom account creation flow",id:"custom-account-creation-flow",level:2},{value:"Transaction flows",id:"transaction-flows",level:2},{value:"Synchronous transaction flow",id:"synchronous-transaction-flow",level:3},{value:"Asynchronous transaction flow",id:"asynchronous-transaction-flow",level:3},{value:"EOA methods",id:"eoa-methods",level:2},{value:"Account abstraction (ERC-4337)",id:"account-abstraction-erc-4337",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-evm-accounts",children:"Custom EVM accounts"}),"\n",(0,t.jsxs)(n.p,{children:["The Keyring API integrates custom EVM accounts inside MetaMask.\nYou can use the Keyring API to display custom accounts, such as multi-party computation (MPC)\naccounts and ",(0,t.jsx)(n.a,{href:"#account-abstraction-erc-4337",children:"ERC-4337 accounts"}),", alongside regular MetaMask accounts\nin the user interface:"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:a(57684).A,alt:"Account management Snap accounts in Metamask UI",width:"360",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,t.jsxs)(n.p,{children:["To use the Keyring API, you first ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-account-snap",children:"implement the API in an account management Snap"}),'\n(also known as an "account Snap").\nYou can then ',(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-companion-dapp",children:"call Keyring API methods from a companion dapp"}),"\nto enable users to create and interact with the custom accounts."]}),"\n",(0,t.jsx)(n.admonition,{title:"see also",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-account-snap",children:"Create an account management Snap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-companion-dapp",children:"Create an account management companion dapp"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/security",children:"Account management Snap security guidelines"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/",children:"Keyring API reference"})}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"system-context-diagram",children:"System context diagram"}),"\n",(0,t.jsx)(n.p,{children:"The following diagram shows the system context when interacting with accounts managed by an account\nmanagement Snap:"}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)(n.mermaid,{value:"graph TD\n  User --\x3e|Use to submit requests<br/>and manage accounts| MetaMask\n  User --\x3e|Start requests| Dapp\n  User --\x3e|Use to manage<br/>requests and accounts| Site\n  Dapp --\x3e|Submit requests| MetaMask\n  Site[Snap companion dapp] --\x3e|Manage requests<br/>and accounts| MetaMask\n  MetaMask --\x3e|Submit requests and<br/>manage accounts| Snap\n  Snap --\x3e|Notify about account<br/>and request events| MetaMask"})}),"\n",(0,t.jsx)(n.p,{children:"The diagram contains the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User"})," - The user interacting with the dapp, the Snap companion dapp, and MetaMask."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dapp"})," - The dapp requesting an action to be performed on an account."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MetaMask"})," - The wallet the dapp connects to.\nMetaMask routes requests to the account management Snap and lets the user perform some level of\naccount management."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Snap"})," - The account management Snap that implements the Keyring API to manage the user's\naccounts and handle requests that use these accounts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Snap companion dapp"})," - The Snap's user interface component that allows the user to interact with\nthe Snap to manage accounts and requests."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"account-management-snap-installation-flow",children:"Account management Snap installation flow"}),"\n",(0,t.jsx)(n.p,{children:"The first process a user encounters when using an account management Snap is the Snap installation flow.\nThis process can be initiated through MetaMask's or the Snap companion dapp.\nThe flow looks like the following:"}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nalt Optional\n  User ->>+ MetaMask: Add account Snap\n  MetaMask ->> MetaMask: Display suggested Snaps\n  User ->> MetaMask: Select Snap\n  MetaMask ->> Site: Open in a new tab\n  deactivate MetaMask\nend\n\nSite ->>+ MetaMask: Install Snap?\nMetaMask ->> MetaMask: Display permissions dialog\nUser ->> MetaMask: Approve permissions\nMetaMask --\x3e>- Site: OK"}),"\n",(0,t.jsxs)(n.p,{children:["The MetaMask account selection modal has an option called ",(0,t.jsx)(n.strong,{children:"Add account Snap"}),".\nThis option shows a list of account management Snaps.\nEach Snap redirects the user to the companion dapp that contains the user interface to configure and\nmanage the Snap."]}),"\n",(0,t.jsx)(n.h2,{id:"custom-account-creation-flow",children:"Custom account creation flow"}),"\n",(0,t.jsx)(n.p,{children:"Once the account management Snap is installed, the user can use the Snap companion dapp to create or\nimport custom accounts.\nThe flow looks like the following:"}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 15,\n      'width': 245\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Site: Create new account\nSite ->> Site: Custom logic to create account\nSite ->>+ Snap: keyring_createAccount(options)\nSnap ->> Snap: Custom logic to create account\nSnap ->>+ MetaMask: snap_manageAccounts(<br/>\"notify:accountCreated\", account)\nUser ->> MetaMask: Approve account creation\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\nSite --\x3e>- User: Done"}),"\n",(0,t.jsxs)(n.p,{children:["The companion dapp presents a user interface allowing the user to configure their custom account.\nThe dapp creates an account using ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_createaccount",children:(0,t.jsx)(n.code,{children:"keyring_createAccount"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The Snap keeps track of the accounts that it creates using ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/snaps-api#snap_managestate",children:(0,t.jsx)(n.code,{children:"snap_manageState"})}),".\nOnce the Snap has created an account, it notifies MetaMask using\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/snaps-api#snap_manageaccounts",children:(0,t.jsx)(n.code,{children:"snap_manageAccounts"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Once the Snap has created an account, that account can be used to sign messages and transactions."}),"\n",(0,t.jsx)(n.h2,{id:"transaction-flows",children:"Transaction flows"}),"\n",(0,t.jsxs)(n.p,{children:["The Keyring API supports two flows for handling requests: ",(0,t.jsx)(n.a,{href:"#synchronous-transaction-flow",children:"synchronous"}),"\nand ",(0,t.jsx)(n.a,{href:"#asynchronous-transaction-flow",children:"asynchronous"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In general, you should use the asynchronous flow when the request requires user interaction (for\nexample, using a hardware key or a threshold signature scheme) or when the request takes a long time\nto complete.\nYou should use the synchronous flow for any other use case."}),"\n",(0,t.jsx)(n.h3,{id:"synchronous-transaction-flow",children:"Synchronous transaction flow"}),"\n",(0,t.jsx)(n.p,{children:"The synchronous flow looks like the following:"}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 25,\n      'width': 225\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Custom logic to handle request\nSnap --\x3e>- MetaMask: { pending: false, result }\n\nMetaMask --\x3e>- Dapp: result\n\nDapp --\x3e>- User: Done"}),"\n",(0,t.jsx)(n.p,{children:"The flow starts when a user or dapp initiates a sign request.\nAt that point, MetaMask detects that this interaction is requested for an account controlled by the\naccount management Snap."}),"\n",(0,t.jsxs)(n.p,{children:["After the user approves the transaction in MetaMask, MetaMask calls\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_submitrequest",children:(0,t.jsx)(n.code,{children:"keyring_submitRequest"})}),",\nwhich receives the original RPC request and returns a response with ",(0,t.jsx)(n.code,{children:"pending"})," set to ",(0,t.jsx)(n.code,{children:"false"}),", and\n",(0,t.jsx)(n.code,{children:"result"})," set to the requested signature."]}),"\n",(0,t.jsx)(n.h3,{id:"asynchronous-transaction-flow",children:"Asynchronous transaction flow"}),"\n",(0,t.jsx)(n.p,{children:"The asynchronous flow looks like the following:"}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 20,\n      'width': 200\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nactor User\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\nparticipant Site as Snap companion dapp\n\nUser ->>+ Dapp: Create new sign request\nDapp ->>+ MetaMask: ethereum.request(request)\nMetaMask ->> MetaMask: Display request to user\nUser ->> MetaMask: Approve request\n\nMetaMask ->>+ Snap: keyring_submitRequest(request)\nSnap ->> Snap: Save request to Snap's state\nSnap --\x3e>- MetaMask: { pending: true, redirect? }\nalt There is a redirect URL\n  User ->> MetaMask: Acknowledge redirection\n  MetaMask ->>+ Site: Open redirect URL in a new tab\nend\ndeactivate MetaMask\n\nSite ->>+ Snap: keyring_getRequest(id)\nSnap --\x3e>- Site: request\n\nSite ->> Site: Custom logic to handle request\nSite ->>+ Snap: keyring_approveRequest(id, data?)\nSnap ->> Snap: Custom logic to handle request\nSnap ->>+ MetaMask: snap_manageAccounts(<br/>\"notify:requestApproved\", { id, result })\n\nMetaMask --\x3e> Dapp: result\nMetaMask --\x3e>- Snap: OK\nSnap --\x3e>- Site: OK\ndeactivate Site\n\nDapp --\x3e>- User: Done"}),"\n",(0,t.jsxs)(n.p,{children:["The flow starts the same way as the ",(0,t.jsx)(n.a,{href:"#synchronous-transaction-flow",children:"synchronous flow"}),": a user or\ndapp initiates a sign request.\nAfter approval, MetaMask calls\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_submitrequest",children:(0,t.jsx)(n.code,{children:"keyring_submitRequest"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Since the Snap doesn't answer the request directly, it stores the pending request in its internal\nstate using ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/snaps-api#snap_managestate",children:(0,t.jsx)(n.code,{children:"snap_manageState"})}),".\nThe Snap sends a ",(0,t.jsx)(n.code,{children:"{ pending: true, redirect? }"})," response to indicate that the request will be\nhandled asynchronously.\nThis response can optionally contain a redirect URL that MetaMask will open in a new tab to allow\nthe user to interact with the Snap companion dapp."]}),"\n",(0,t.jsxs)(n.p,{children:["The companion dapp gets the Snap's pending request using\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_getrequest",children:(0,t.jsx)(n.code,{children:"keyring_getRequest"})}),".\nIt resolves the request using\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_approverequest",children:(0,t.jsx)(n.code,{children:"keyring_approveRequest"})}),",\nand the Snap resolves the request using ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/snaps-api#snap_manageaccounts",children:(0,t.jsx)(n.code,{children:"snap_manageAccounts"})}),",\nnotifying MetaMask of the result."]}),"\n",(0,t.jsx)(n.h2,{id:"eoa-methods",children:"EOA methods"}),"\n",(0,t.jsx)(n.p,{children:"An account management Snap can implement the following methods to support dapp requests from\nexternally owned accounts (EOAs):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#personal_sign",children:(0,t.jsx)(n.code,{children:"personal_sign"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eth_signtypeddata_v4",children:(0,t.jsx)(n.code,{children:"eth_signTypedData_v4"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eth_signtransaction",children:(0,t.jsx)(n.code,{children:"eth_signTransaction"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/wallet/concepts/signing-methods/#deprecated-signing-methods",children:"Deprecated signing methods"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"account-abstraction-erc-4337",children:"Account abstraction (ERC-4337)"}),"\n",(0,t.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,t.jsxs)(n.p,{children:["Account abstraction, specified by ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4337",children:"EIP-4337"}),", introduces\n",(0,t.jsx)(n.em,{children:"user operations"})," and enables users to manage smart contract accounts containing arbitrary\nverification logic.\nUsers can use these ERC-4337 accounts instead of externally owned accounts as primary accounts."]}),"\n",(0,t.jsx)(n.p,{children:"An account management Snap can implement the following methods to support dapp requests from\nERC-4337 accounts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eth_prepareuseroperation",children:(0,t.jsx)(n.code,{children:"eth_prepareUserOperation"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eth_patchuseroperation",children:(0,t.jsx)(n.code,{children:"eth_patchUserOperation"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eth_signuseroperation",children:(0,t.jsx)(n.code,{children:"eth_signUserOperation"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The user operation signing flow in an ERC-4337 compatible account Snap looks like the following:"}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{\n  init: {\n    'sequence': {\n      'actorMargin': 60,\n      'width': 300\n    }\n  }\n}%%\n\nsequenceDiagram\nautonumber\n\nparticipant Dapp\nparticipant MetaMask\nparticipant Snap\n\nDapp ->>+ MetaMask: Transaction intents\nnote over MetaMask: Currently, only one transaction per userOp is supported\nMetaMask ->>+ Snap: eth_prepareUserOperation(transaction intents)\nSnap --\x3e>- MetaMask: userOp details\nMetaMask ->> MetaMask: Check if account is already deployed\n\nalt The account is already deployed\nMetaMask ->> MetaMask: Remove the initCode if set\nelse The account is not deployed and the initCode is not present\nMetaMask ->> Dapp: Throw an error (without the exact reason)\nend\n\nalt The gas isn't set\nMetaMask ->> MetaMask: Estimate and set gas values\nend\n\nMetaMask ->> MetaMask: Estimate and set gas fees\nMetaMask ->>+ Snap: eth_patchUserOperation(userOp object)\nSnap --\x3e>- MetaMask: Partial userOp object\nMetaMask ->> MetaMask: Update paymasterAndData and remove dummy signature\nMetaMask ->>+ Snap: eth_signUserOperation(userOp object, entry point)\nSnap --\x3e>- MetaMask: Signature\nMetaMask ->> MetaMask: Update userOp's signature\n\nMetaMask ->> MetaMask: Submit userOp to bundler and wait for transaction hash\nMetaMask --\x3e>- Dapp: Transaction hash"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#erc-4337-methods",children:"ERC-4337 methods"})," for more\ninformation about their parameters and response details."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"See the following example account management Snap implementations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snap-simple-keyring",children:"Simple Account Snap"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snap-account-abstraction-keyring/tree/main",children:"Simple Account Abstraction Snap"})," (ERC-4337)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/bcnmy/smart-account-keyring-template",children:"Biconomy Smart Account Snap"})," (ERC-4337)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/silence-laboratories/silent-shard-snap",children:"Silent Shard Snap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Safeheron/multi-mpc-snap-monorepo",children:"Safeheron MPC Snap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/capsule-org/mm-snap-keyring",children:"Capsule Keyring Snap"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},57684:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/accounts-ui-6200682f7b2f25a2753108a83abad199.png"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);