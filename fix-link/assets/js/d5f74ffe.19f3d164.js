"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3794],{65844:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(74848),a=r(28453),s=r(11470),i=r(19365);const o={sidebar_position:3},l="Use environment variables",c={id:"how-to/use-environment-variables",title:"Use environment variables",description:"You can use environment variables to compile your Snap.",source:"@site/snaps/how-to/use-environment-variables.md",sourceDirName:"how-to",slug:"/how-to/use-environment-variables",permalink:"/fix-link/snaps/how-to/use-environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-environment-variables.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Communicate errors",permalink:"/fix-link/snaps/how-to/communicate-errors"},next:{title:"Restrict RPC API methods",permalink:"/fix-link/snaps/how-to/restrict-rpc-api"}},u={},d=[{value:"Use environment variables on the command line",id:"use-environment-variables-on-the-command-line",level:2},{value:"Use environment variables in a <code>.env</code> file",id:"use-environment-variables-in-a-env-file",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-environment-variables",children:"Use environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["You can use environment variables to compile your Snap.\nThis is useful if you want to use different variables for testing your Snap locally and publishing\nyour Snap.\nYou can use environment variables ",(0,t.jsx)(n.a,{href:"#use-environment-variables-on-the-command-line",children:"on the command line"}),"\nor ",(0,t.jsxs)(n.a,{href:"#use-environment-variables-in-a-env-file",children:["in a ",(0,t.jsx)(n.code,{children:".env"})," file"]}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"In addition to the environment variables you set, the following environment variables are set by the\nSnaps CLI:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'NODE_ENV="production"'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"NODE_DEBUG=false"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"DEBUG=false"})}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"use-environment-variables-on-the-command-line",children:"Use environment variables on the command line"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Specify environment variables on the command line.\nFor example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"PUBLIC_KEY=abc123 SNAP_ENV=dev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Build your Snap using the ",(0,t.jsx)(n.a,{href:"/fix-link/snaps/reference/cli/subcommands",children:"Snaps CLI"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap build\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"use-environment-variables-in-a-env-file",children:["Use environment variables in a ",(0,t.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specify environment variables in a ",(0,t.jsx)(n.code,{children:".env"})," file.\nFor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title=".env"',children:"PUBLIC_KEY=abc123\nSNAP_ENV=dev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Specify the environment variables in your Snap's\n",(0,t.jsx)(n.a,{href:"/fix-link/snaps/learn/about-snaps/files#configuration-file",children:"configuration file"})," using the ",(0,t.jsx)(n.code,{children:"environment"})," option.\nFor example:"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="snap.config.js"',children:'require("dotenv").config();\n\nmodule.exports = {\n  environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n  },\n  // Other options.\n};\n'})})}),(0,t.jsx)(i.A,{value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="snap.config.ts"',children:'import type { SnapConfig } from "@metamask/snaps-cli";\nimport * as dotenv from "dotenv";\ndotenv.config();\n\nconst config: SnapConfig = {\n  environment: {\n    SNAP_ENV: process.env.SNAP_ENV,\n    PUBLIC_KEY: process.env.PUBLIC_KEY,\n  },\n  // Other options.\n};\n\nexport default config;\n'})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You can also use environment variables directly in your Snap.\nFor example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("This custom alert is just for display purposes."),\n      text(`SNAP_ENV is ${process.env.SNAP_ENV}, PUBLIC_KEY is ${process.env.PUBLIC_KEY}`),\n    ]),\n  },\n});\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>N});var t=r(96540),a=r(18215),s=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=m(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:r,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??v;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=v(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function N(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);