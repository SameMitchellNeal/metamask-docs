"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5312],{75769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={description:"Get started with the Gas APIs.",sidebar_position:1},a="Quickstart",o={id:"gas-api/quickstart",title:"Quickstart",description:"Get started with the Gas APIs.",source:"@site/services/gas-api/quickstart.md",sourceDirName:"gas-api",slug:"/gas-api/quickstart",permalink:"/fix-link/services/gas-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get started with the Gas APIs.",sidebar_position:1},sidebar:"servicesSidebar",previous:{title:"Gas API",permalink:"/fix-link/services/gas-api/"},next:{title:"Supported networks",permalink:"/fix-link/services/gas-api/supported-networks"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize a new project directory",id:"initialize-a-new-project-directory",level:2},{value:"Install required packages",id:"install-required-packages",level:2},{value:"Create your <code>.env</code> file",id:"create-your-env-file",level:2},{value:"Create your script",id:"create-your-script",level:2},{value:"Run the script",id:"run-the-script",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsxs)(n.p,{children:["This quickstart shows you how to call the Gas API using JavaScript.\nYou can also use a tool such as ",(0,i.jsx)(n.a,{href:"https://curl.se/",children:"cURL"})," or ",(0,i.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"})," to\ncall the REST APIs."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["View the ",(0,i.jsx)(n.a,{href:"/fix-link/services/gas-api/api-reference/",children:"API reference content"})," to view the ",(0,i.jsx)(n.code,{children:"curl"})," command for each API."]})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A valid ",(0,i.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"Web3 API key"}),"\nand ",(0,i.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js and npm installed"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-a-new-project-directory",children:"Initialize a new project directory"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir new_project\ncd new_project\nnpm init -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-required-packages",children:"Install required packages"}),"\n",(0,i.jsxs)(n.p,{children:["Install the ",(0,i.jsx)(n.code,{children:"axios"})," package:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install axios\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Install the ",(0,i.jsx)(n.a,{href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv",children:(0,i.jsx)(n.code,{children:"dotenv"})})," package:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install dotenv\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"create-your-env-file",children:["Create your ",(0,i.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:".env"})," file at the project root and add the following data:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"INFURA_API_KEY=<API-KEY>\nINFURA_API_KEY_SECRET=<API-KEY-SECRET>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Replace the Infura project credential placeholders with your own."}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"caution",children:(0,i.jsxs)(n.p,{children:["Do not commit the ",(0,i.jsx)(n.code,{children:".env"})," file to your repository if it contains sensitive data.\nYou can ",(0,i.jsxs)(n.a,{href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv#create-a-.gitignore-file",children:["create a ",(0,i.jsx)(n.code,{children:".gitignore"}),"\nfile"]}),"\nto prevent accidentally committing the file."]})}),"\n",(0,i.jsx)(n.h2,{id:"create-your-script",children:"Create your script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"touch index.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"Copy the following code into your script:"}),"\n",(0,i.jsx)(n.admonition,{title:"note",type:"info",children:(0,i.jsxs)(n.p,{children:["If using a network other than Ethereum Mainnet, update the ",(0,i.jsx)(n.code,{children:"chainId"})," value (",(0,i.jsx)(n.code,{children:"1"}),") in the code to an\nalternate ",(0,i.jsx)(n.a,{href:"/fix-link/services/gas-api/supported-networks",children:"supported network"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios");\nrequire("dotenv").config();\n\nconst Auth = Buffer.from(\n    process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n    try {\n        const { data } = await axios.get(\n            `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n            {\n                headers: {\n                    Authorization: `Basic ${Auth}`,\n                },\n            },\n        );\n        console.log("Suggested gas fees:", data);\n    } catch (error) {\n        console.log("Server responded with:", error);\n    }\n})();\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-the-script",children:"Run the script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result should look similar to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'Suggested gas fees: {\n    low: {\n        suggestedMaxPriorityFeePerGas: "0.05",\n        suggestedMaxFeePerGas: "24.086058416"\',\n        minWaitTimeEstimate: 15000,\n        maxWaitTimeEstimate: 30000\n    },\n    medium: {\n        suggestedMaxPriorityFeePerGas: "0.1",\n        suggestedMaxFeePerGas: "32.548678862",\n        minWaitTimeEstimate: 15000,\n        maxWaitTimeEstimate: 45000\n    },\n    high: {\n        suggestedMaxPriorityFeePerGas: "0.3",\n        suggestedMaxFeePerGas: "41.161299308",\n        minWaitTimeEstimate: 15000,\n        maxWaitTimeEstimate: 60000\n    },\n    estimatedBaseFee: "24.036058416",\n    networkCongestion: 0.7143,\n    latestPriorityFeeRange: [ "0.1", "20" ],\n    historicalPriorityFeeRange: [ "0.007150439", "113" ],\n    historicalBaseFeeRange: [ "19.531410688", "36.299069766" ],\n    priorityFeeTrend: "down",\n    baseFeeTrend: "down"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);