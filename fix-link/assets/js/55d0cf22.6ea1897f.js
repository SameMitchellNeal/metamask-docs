"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2146],{75941:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=a(74848),s=a(28453),r=a(11470),i=a(19365);const c={description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},o="Create an account management Snap",l={id:"features/custom-evm-accounts/create-account-snap",title:"Create an account management Snap",description:"Get started by creating an account management Snap.",source:"@site/snaps/features/custom-evm-accounts/create-account-snap.md",sourceDirName:"features/custom-evm-accounts",slug:"/features/custom-evm-accounts/create-account-snap",permalink:"/fix-link/snaps/features/custom-evm-accounts/create-account-snap",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-evm-accounts/create-account-snap.md",tags:[{label:"Keyring API",permalink:"/fix-link/snaps/tags/keyring-api"}],version:"current",sidebarPosition:1,frontMatter:{description:"Get started by creating an account management Snap.",sidebar_position:1,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Custom EVM accounts",permalink:"/fix-link/snaps/features/custom-evm-accounts/"},next:{title:"Create a companion dapp",permalink:"/fix-link/snaps/features/custom-evm-accounts/create-companion-dapp"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Add permissions",id:"2-add-permissions",level:3},{value:"3. Implement the Account Management API",id:"3-implement-the-account-management-api",level:3},{value:"4. Handle requests submitted by MetaMask",id:"4-handle-requests-submitted-by-metamask",level:3},{value:"5. Notify MetaMask about events",id:"5-notify-metamask-about-events",level:3},{value:"6. Expose the Account Management API",id:"6-expose-the-account-management-api",level:3},{value:"7. Create a companion dapp",id:"7-create-a-companion-dapp",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-an-account-management-snap",children:"Create an account management Snap"}),"\n",(0,t.jsx)(n.p,{children:"Create an account management Snap to connect to custom EVM accounts."}),"\n",(0,t.jsx)(n.admonition,{title:"see also",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/",children:"Custom EVM accounts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-companion-dapp",children:"Create an account management companion dapp"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/security",children:"Account management Snap security guidelines"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/",children:"Keyring API reference"})}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set up a Snap.\nSee the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/get-started/quickstart",children:"Snaps quickstart"})," and ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/how-to/publish-a-snap",children:"how to develop a Snap"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Read the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/security",children:"account management Snap security guidelines"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-install-the-keyring-api",children:"1. Install the Keyring API"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/keyring-api",children:(0,t.jsx)(n.code,{children:"@metamask/keyring-api"})})," module in your\nproject directory using Yarn or npm:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @metamask/keyring-api\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @metamask/keyring-api\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-add-permissions",children:"2. Add permissions"}),"\n",(0,t.jsxs)(n.p,{children:["Specify the following ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/how-to/request-permissions",children:"permissions"})," in your Snap manifest file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": [\n      "https://<dapp domain>"\n    ]\n  },\n  "endowment:rpc": {\n    "dapps": true\n  },\n  "snap_manageAccounts": {},\n  "snap_manageState": {}\n},\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Add a list of dapp URLs allowed to call Keyring API methods on your Snap using the\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/permissions#endowmentkeyring",children:(0,t.jsx)(n.code,{children:"endowment:keyring"})})," permission."]}),"\n",(0,t.jsx)(n.h3,{id:"3-implement-the-account-management-api",children:"3. Implement the Account Management API"}),"\n",(0,t.jsxs)(n.p,{children:["Implement the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," in your Snap.\nMake sure to ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/security#limit-the-methods-exposed-to-dapps",children:"limit the methods exposed to dapps"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class MySnapKeyring implements Keyring {\n  // Implement the required methods here.\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-handle-requests-submitted-by-metamask",children:"4. Handle requests submitted by MetaMask"}),"\n",(0,t.jsxs)(n.p,{children:["MetaMask submits EVM requests from dapps using the\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/#keyring_submitrequest",children:(0,t.jsx)(n.code,{children:"keyring_submitRequest"})}),"\nmethod of the Keyring API.\nSee the EVM methods for ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#eoa-methods",children:"externally owned accounts"}),"\nand ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/chain-methods#erc-4337-methods",children:"ERC-4337 accounts"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example of a ",(0,t.jsx)(n.code,{children:"personal_sign"})," request:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "d6e23af6-4bea-48dd-aeb0-7d3c30ea67f9",\n  "scope": "",\n  "account": "69438371-bef3-4957-9f91-c3f22c1d75f3",\n  "request": {\n    "method": "personal_sign",\n    "params": [\n      "0x4578616d706c652060706572736f6e616c5f7369676e60206d657373616765",\n      "0x5874174dcf1ab6F7Efd8496f4f09404CD1c5bA84"\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The request includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," - The unique identifier for the request."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"scope"})," - The CAIP-2 chain ID of the selected chain.\nCurrently, this property is always an empty string.\nYour Snap should use the chain ID present in the request object instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"account"})," - The ID of the account that should handle the request."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"request"})," - The request object."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Your Snap must respond with either a synchronous or asynchronous result:"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(i.A,{value:"Synchronous",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return { pending: false, result };\n"})})}),(0,t.jsxs)(i.A,{value:"Asynchronous",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"return { pending: true, redirect: { message, url } };\n"})}),(0,t.jsx)(n.p,{children:"The redirect message and URL are displayed to the user to help them continue the transaction flow."})]})]}),"\n",(0,t.jsx)(n.h3,{id:"5-notify-metamask-about-events",children:"5. Notify MetaMask about events"}),"\n",(0,t.jsxs)(n.p,{children:["Notify MetaMask when ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/keyring-api/account-management/events",children:"Account Management API events"}),"\ntake place, using the ",(0,t.jsx)(n.code,{children:"emitSnapKeyringEvent()"})," helper function."]}),"\n",(0,t.jsx)(n.p,{children:"For example, when an account is created:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"try {\n  emitSnapKeyringEvent(snap, KeyringEvent.AccountCreated, { account });\n  // Update your Snap's state.\n} catch (error) {\n  // Handle the error.\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"MetaMask returns an error if the account already exists or the account object is invalid."}),"\n",(0,t.jsx)(n.h3,{id:"6-expose-the-account-management-api",children:"6. Expose the Account Management API"}),"\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/entry-points#onkeyringrequest",children:(0,t.jsx)(n.code,{children:"onKeyringRequest"})})," entry point handler\nmethod to expose the Account Management API methods to MetaMask and your dapp:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export const onKeyringRequest: OnKeyringRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  // Add custom logic here.\n  return handleKeyringRequest(keyring, request);\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"7-create-a-companion-dapp",children:"7. Create a companion dapp"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-evm-accounts/create-companion-dapp",children:"Create a companion dapp"})," to provide a user interface for your account\nmanagement Snap, enabling them to create and interact with custom EVM accounts."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/snap",children:"example account management Snap source code"}),"\nfor more information."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),s=a(18215),r=a(23104),i=a(56347),c=a(205),o=a(57485),l=a(31682),u=a(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[l,d]=m({queryString:a,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),g=(()=>{const e=l??f;return h({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function y(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),s=c[a].value;s!==t&&(l(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);