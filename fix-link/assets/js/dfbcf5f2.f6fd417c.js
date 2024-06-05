"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1343],{2061:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(74848),s=a(28453);const i={sidebar_position:6,description:"Call an action when your Snap is installed or updated."},o="Lifecycle hooks",l={id:"features/lifecycle-hooks",title:"Lifecycle hooks",description:"Call an action when your Snap is installed or updated.",source:"@site/snaps/features/lifecycle-hooks.md",sourceDirName:"features",slug:"/features/lifecycle-hooks",permalink:"/fix-link/snaps/features/lifecycle-hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/lifecycle-hooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Call an action when your Snap is installed or updated."},sidebar:"snapsSidebar",previous:{title:"Data storage",permalink:"/fix-link/snaps/features/data-storage"},next:{title:"Localization",permalink:"/fix-link/snaps/features/localization"}},r={},c=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to implement lifecycle hooks",id:"1-request-permission-to-implement-lifecycle-hooks",level:3},{value:"2. Run an action on installation",id:"2-run-an-action-on-installation",level:3},{value:"3. Run an action on update",id:"3-run-an-action-on-update",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lifecycle-hooks",children:"Lifecycle hooks"}),"\n",(0,t.jsx)(n.p,{children:"You can implement lifecycle hooks to automatically run an action, such as displaying a dialog or\nnotification, when a user installs or updates your Snap."}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-request-permission-to-implement-lifecycle-hooks",children:"1. Request permission to implement lifecycle hooks"}),"\n",(0,t.jsxs)(n.p,{children:["Request the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/permissions#endowmentlifecycle-hooks",children:(0,t.jsx)(n.code,{children:"endowment:lifecycle-hooks"})}),"\npermission.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-run-an-action-on-installation",children:"2. Run an action on installation"}),"\n",(0,t.jsxs)(n.p,{children:["To run an action when a user installs your Snap, expose the\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/entry-points#oninstall",children:(0,t.jsx)(n.code,{children:"onInstall"})})," entry point and implement the action.\nFor example, you can use ",(0,t.jsx)(n.code,{children:"onInstall"})," to perform any initialization that is required upon installation."]}),"\n",(0,t.jsxs)(n.p,{children:["The following example displays an ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-ui/dialogs#display-an-alert-dialog",children:"alert dialog"})," upon installation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnInstallHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onInstall: OnInstallHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Installation successful"),\n        text(\n          "To use this Snap, visit the companion dapp at [metamask.io](https://metamask.io).",\n        ),\n      ]),\n    },\n  });\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-run-an-action-on-update",children:"3. Run an action on update"}),"\n",(0,t.jsxs)(n.p,{children:["To run an action when a user updates your Snap, expose the\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/entry-points#onupdate",children:(0,t.jsx)(n.code,{children:"onUpdate"})})," entry point and implement the action.\nFor example, you can use ",(0,t.jsx)(n.code,{children:"onUpdate"})," to perform any migrations that are required upon update."]}),"\n",(0,t.jsxs)(n.p,{children:["The following example displays an ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/features/custom-ui/dialogs#display-an-alert-dialog",children:"alert dialog"})," upon update:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnUpdateHandler } from "@metamask/snaps-sdk";\nimport { heading, panel, text } from "@metamask/snaps-sdk";\n\nexport const onUpdate: OnUpdateHandler = async () => {\n  await snap.request({\n    method: "snap_dialog",\n    params: {\n      type: "alert",\n      content: panel([\n        heading("Update successful"),\n        text(\n          "New features added in this version:",\n        ),\n        text(\n          "Added a dialog that appears when updating."\n        ), \n      ]),\n    },\n  });\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/lifecycle-hooks",children:(0,t.jsx)(n.code,{children:"@metamask/lifecycle-hooks-example-snap"})}),"\npackage for a full example of implementing lifecycle hooks."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);