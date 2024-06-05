"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5593],{62355:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=s(74848),i=s(28453);const t={description:"Develop, test, and publish a Snap.",sidebar_position:8},o="Publish a Snap",l={id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/fix-link/snaps/how-to/publish-a-snap",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/fix-link/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Get allowlisted",permalink:"/fix-link/snaps/how-to/get-allowlisted"}},r={},c=[{value:"Make a Snap available to users",id:"make-a-snap-available-to-users",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"publish-a-snap",children:"Publish a Snap"}),"\n",(0,a.jsxs)(n.p,{children:["Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,a.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-publish",children:"npm CLI documentation"})," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The version in ",(0,a.jsx)(n.code,{children:"package.json"})," and ",(0,a.jsx)(n.code,{children:"snap.manifest.json"})," should match."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"repository.url"})," field in ",(0,a.jsx)(n.code,{children:"package.json"})," should match the correct repository for your Snap."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"source.location.npm.packageName"})," in ",(0,a.jsx)(n.code,{children:"snap.manifest.json"})," should match the name in ",(0,a.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"proposedName"})," in ",(0,a.jsx)(n.code,{children:"snap.manifest.json"}),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap."']}),"\n",(0,a.jsxs)(n.li,{children:["The image specified in ",(0,a.jsx)(n.code,{children:"iconPath"})," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This icon should be a valid SVG."}),"\n",(0,a.jsx)(n.li,{children:"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,a.jsx)(n.code,{children:"npm:[packageName]"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["If you are using the Snap monorepo project generated in the ",(0,a.jsx)(n.a,{href:"/fix-link/snaps/get-started/quickstart",children:"quickstart"}),",\nmake sure to only publish the Snap package in ",(0,a.jsx)(n.code,{children:"/packages/snap"}),".\nYou can use the ",(0,a.jsx)(n.a,{href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest",children:"Snaps Simulator"})," to verify\nthat your Snap was published correctly \u2014 just select ",(0,a.jsx)(n.strong,{children:"localhost"})," in the top right corner and change the\nSnap location to ",(0,a.jsx)(n.strong,{children:"npm"})," and the ID of your Snap."]}),(0,a.jsx)(n.p,{children:"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template."})]}),"\n",(0,a.jsx)(n.h2,{id:"make-a-snap-available-to-users",children:"Make a Snap available to users"}),"\n",(0,a.jsxs)(n.p,{children:["After publishing a Snap, you can make it available to MetaMask users by\n",(0,a.jsx)(n.a,{href:"/fix-link/snaps/how-to/get-allowlisted",children:"getting your Snap allowlisted"}),".\nOnce allowlisted, anyone can install your Snap in the MetaMask extension."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var a=s(96540);const i={},t=a.createContext(i);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);