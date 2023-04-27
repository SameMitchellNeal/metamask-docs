"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,u=m["".concat(c,".").concat(d)]||m[d]||f[d]||o;return t?r.createElement(u,i(i({ref:n},l),{},{components:t})):r.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={description:"Snaps CLI subcommands and options reference"},i="Snaps command line interface",s={unversionedId:"reference/cli/index",id:"reference/cli/index",title:"Snaps command line interface",description:"Snaps CLI subcommands and options reference",source:"@site/snaps/reference/cli/index.md",sourceDirName:"reference/cli",slug:"/reference/cli/",permalink:"/add-permission-to-delete-preview/snaps/reference/cli/",draft:!1,tags:[],version:"current",frontMatter:{description:"Snaps CLI subcommands and options reference"},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/add-permission-to-delete-preview/snaps/reference/exports"},next:{title:"Options",permalink:"/add-permission-to-delete-preview/snaps/reference/cli/options"}},c={},p=[],l={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-command-line-interface"},"Snaps command line interface"),(0,a.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and options."),(0,a.kt)("p",null,"Make sure to ",(0,a.kt)("a",{parentName:"p",href:"/add-permission-to-delete-preview/snaps/get-started/install-snaps#install-the-snaps-cli"},"install the Snaps CLI"),"."),(0,a.kt)("p",null,"You can specify subcommands and options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mm-snap")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap [SUBCOMMAND] [OPTIONS]\n")),(0,a.kt)("p",null,"You can also override the default values of the options by specifying them in the\n",(0,a.kt)("a",{parentName:"p",href:"/add-permission-to-delete-preview/snaps/concepts/anatomy#configuration-file"},"configuration file"),"."))}m.isMDXComponent=!0}}]);