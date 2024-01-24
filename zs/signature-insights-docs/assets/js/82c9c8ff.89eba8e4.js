"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(25108);const s={description:"Get the estimated gas prices for a chain."},o="Get EIP-1559 gas prices",p={unversionedId:"gas-api/api-reference/gasprices-type2",id:"gas-api/api-reference/gasprices-type2",title:"Get EIP-1559 gas prices",description:"Get the estimated gas prices for a chain.",source:"@site/services/gas-api/api-reference/gasprices-type2.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/gasprices-type2",permalink:"/zs/signature-insights-docs/services/gas-api/api-reference/gasprices-type2",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/gasprices-type2.md",tags:[],version:"current",frontMatter:{description:"Get the estimated gas prices for a chain."},sidebar:"servicesSidebar",previous:{title:"Get the busy threshold",permalink:"/zs/signature-insights-docs/services/gas-api/api-reference/busythreshold"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],m=e=>function(t){return i.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("Tabs"),d=m("TabItem"),g={toc:c},h="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-eip-1559-gas-prices"},"Get EIP-1559 gas prices"),(0,a.kt)("p",null,"Returns the estimated ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," gas fees for the specified\nblockchain network."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"p"},"https://gas.api.infura.io/networks/${chainId}/suggestedGasFees")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Path"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chainId"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - ID of the chain to query.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Recommended gas price details based of the level of urgency:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"low"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"medium"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"high"),": ",(0,a.kt)("em",{parentName:"li"},"Object")," containing recommended values for transactions by level of urgency:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suggestedMaxPriorityFeePerGas"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - The maximum suggested priority fee per gas to pay\nto have transactions included in a block."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suggestedMaxFeePerGas"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - The maximum suggested total fee per gas to pay, including\nboth the base fee and the priority fee."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minWaitTimeEstimate"),": ",(0,a.kt)("em",{parentName:"li"},"number")," - The minimum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxWaitTimeEstimate"),": ",(0,a.kt)("em",{parentName:"li"},"number")," - The maximum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"estimatedBaseFee"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - The current estimated base fee per gas on the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"networkCongestion"),": ",(0,a.kt)("em",{parentName:"li"},"number")," - The current congestion on the network, represented as a number\nbetween ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".\nA lower network congestion score (for example ",(0,a.kt)("inlineCode",{parentName:"li"},"0.1"),"), indicates that fewer transactions are being\nsubmitted, so it's cheaper to validate transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latestPriorityFeeRange"),": ",(0,a.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for recent transactions on\nthe network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"historicalPriorityFeeRange"),": ",(0,a.kt)("em",{parentName:"li"},"array")," - The range of priority fees per gas for transactions on the\nnetwork over a historical period."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"historicalBaseFeeRange"),": ",(0,a.kt)("em",{parentName:"li"},"array")," - The range of base fees per gas on the network over a\nhistorical period."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"priorityFeeTrend"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - The current trend in priority fees on the network, either ",(0,a.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,a.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseFeeTrend"),": ",(0,a.kt)("em",{parentName:"li"},"string")," - The current trend in base fees on the network, either ",(0,a.kt)("inlineCode",{parentName:"li"},"up")," or\n",(0,a.kt)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper).")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,"Include your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the APIs."),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n   -u <API-KEY>:<API-KEY-SECRET> \\\n    'https://gas.api.infura.io/networks/1/suggestedGasFees'\n"))),(0,a.kt)(d,{value:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\n\nconst apiKey = \'<API-KEY>\'; // replace with your API key\nconst apiKeySecret = \'<API-KEY-SECRET>\'; // replace with your API key secret\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      },\n    );\n    console.log("Suggested gas fees:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n')))),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  low: {\n    suggestedMaxPriorityFeePerGas: '0.05',\n    suggestedMaxFeePerGas: '16.334026964',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 30000\n  },\n  medium: {\n    suggestedMaxPriorityFeePerGas: '0.1',\n    suggestedMaxFeePerGas: '22.083436402',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 45000\n  },\n  high: {\n    suggestedMaxPriorityFeePerGas: '0.3',\n    suggestedMaxFeePerGas: '27.982845839',\n    minWaitTimeEstimate: 15000,\n    maxWaitTimeEstimate: 60000\n  },\n  estimatedBaseFee: '16.284026964',\n  networkCongestion: 0.5125,\n  latestPriorityFeeRange: [ '0', '3' ],\n  historicalPriorityFeeRange: [ '0.000000001', '89' ],\n  historicalBaseFeeRange: [ '13.773088584', '29.912845463' ],\n  priorityFeeTrend: 'down',\n  baseFeeTrend: 'up'\n}\n")))}k.isMDXComponent=!0}}]);