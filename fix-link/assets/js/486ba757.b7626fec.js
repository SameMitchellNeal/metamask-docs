"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2675],{4432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),o=t(28453);const a={description:"Register a token with users using wallet_watchAsset.",sidebar_position:1},i="Display tokens",r={id:"how-to/display/tokens",title:"Display tokens",description:"Register a token with users using wallet_watchAsset.",source:"@site/wallet/how-to/display/tokens.md",sourceDirName:"how-to/display",slug:"/how-to/display/tokens",permalink:"/fix-link/wallet/how-to/display/tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Register a token with users using wallet_watchAsset.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Display in MetaMask",permalink:"/fix-link/wallet/how-to/display"},next:{title:"Display a contract's method names",permalink:"/fix-link/wallet/how-to/display/method-names"}},l={},d=[{value:"Display an ERC-20 token",id:"display-an-erc-20-token",level:2},{value:"Display NFTs",id:"display-nfts",level:2},{value:"Display a single NFT",id:"display-a-single-nft",level:3},{value:"Display multiple NFTs",id:"display-multiple-nfts",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"display-tokens",children:"Display tokens"}),"\n",(0,s.jsxs)(n.p,{children:["When a user opens MetaMask, they're shown some major tokens by default.\nHowever, to display most custom ERC-20 tokens, the user must ",(0,s.jsx)(n.a,{href:"https://support.metamask.io/managing-my-tokens/custom-tokens/how-to-display-tokens-in-metamask/",children:"turn on token autodetection or add the token\nmanually"}),".\nTo display a user's NFTs, the user must ",(0,s.jsx)(n.a,{href:"https://support.metamask.io/nfts/nft-tokens-in-your-metamask-wallet/",children:"turn on NFT autodetection or add their NFTs\nmanually"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Manually adding tokens involves the user interacting with contract addresses, and is error-prone."}),"\n",(0,s.jsxs)(n.p,{children:["You can improve the security and experience of displaying your\n",(0,s.jsx)(n.a,{href:"#display-an-erc-20-token",children:"ERC-20 token"})," or users' ",(0,s.jsx)(n.a,{href:"#display-nfts",children:"NFTs"})," in MetaMask by using the\n",(0,s.jsx)(n.a,{href:"/wallet/reference/wallet_watchasset",children:(0,s.jsx)(n.code,{children:"wallet_watchAsset"})})," RPC method.\n",(0,s.jsx)(n.code,{children:"wallet_watchAsset"})," provides a friendly interface that prompts users to register tokens to their\nMetaMask wallet, without having to interact with contract addresses."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"}),", you can prompt users to add their ERC-20 tokens and NFTs even when they\nhave token autodetection or NFT autodetection disabled."]}),(0,s.jsxs)(n.p,{children:["Also, token autodetection only detects ERC-20 tokens on\n",(0,s.jsx)(n.a,{href:"https://support.metamask.io/managing-my-tokens/custom-tokens/how-to-display-tokens-in-metamask/#enhanced-token-detection",children:"certain networks"}),",\nand NFT autodetection only detects NFTs on Ethereum Mainnet.\nWith ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"}),", users can add tokens from other networks."]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Experimental feature",type:"caution",children:(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"})," to display NFTs is experimental and currently only available on the\nextension (not on mobile)."]})}),"\n",(0,s.jsx)(n.h2,{id:"display-an-erc-20-token",children:"Display an ERC-20 token"}),"\n",(0,s.jsx)(n.p,{children:"To prompt users to add an ERC-20 token, you can add something like the following to your project script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const tokenAddress = "0xd00981105e61274c8a5cd5a88fe7e037d935b513";\nconst tokenSymbol = "TUT";\nconst tokenDecimals = 18;\nconst tokenImage = "http://placekitten.com/200/300";\n\ntry {\n  // \'wasAdded\' is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "wallet_watchAsset",\n      params: {\n        type: "ERC20",\n        options: {\n          // The address of the token.\n          address: tokenAddress,\n          // A ticker symbol or shorthand, up to 5 characters.\n          symbol: tokenSymbol,\n          // The number of decimals in the token.\n          decimals: tokenDecimals,\n          // A string URL of the token logo.\n          image: tokenImage,\n        },\n      },\n    });\n\n  if (wasAdded) {\n    console.log("Thanks for your interest!");\n  } else {\n    console.log("Your loss!");\n  }\n} catch (error) {\n  console.log(error);\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If the chain ID of your token doesn't match the user's network, they can get unexpected results.\nWe recommend ",(0,s.jsx)(n.a,{href:"/fix-link/wallet/how-to/manage-networks/detect-network",children:"detecting the user's network chain ID"})," and\n",(0,s.jsx)(n.a,{href:"/wallet/reference/wallet_switchethereumchain",children:"prompting them to switch chains"}),", if necessary."]})}),"\n",(0,s.jsx)(n.p,{children:"For more examples, the following are live web dapps that let you enter your token details and share\nthem using a simple web link:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://vittominacori.github.io/watch-token/create/",children:"WatchToken"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://metamask.github.io/Add-Token/#edit",children:"Add Token dapp"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"display-nfts",children:"Display NFTs"}),"\n",(0,s.jsx)(n.admonition,{title:"Experimental feature",type:"caution",children:(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"})," to display NFTs is experimental and currently only available on the\nextension (not on mobile).\nSee ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md",children:"MIP-1"}),"\nand the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle",children:"MIP proposal lifecycle"}),"\nfor more information."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can prompt users to add a single NFT or multiple NFTs using ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"}),".\nThe add NFT interfaces look like the following:"]}),"\n",(0,s.jsxs)("div",{class:"row",children:[(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:t(77813).A,alt:"NFT confirmation",style:{border:"1px solid #DCDCDC"}})}),(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:t(48572).A,alt:"Multiple NFTs confirmation",style:{border:"1px solid #DCDCDC"}})})]}),"\n",(0,s.jsx)(n.h3,{id:"display-a-single-nft",children:"Display a single NFT"}),"\n",(0,s.jsxs)(n.p,{children:["To prompt users to add a single NFT, add something like the following to your project script.\n",(0,s.jsx)(n.code,{children:"wallet_watchAsset"})," supports both ERC-721 and ERC-1155 NFT standards."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'try {\n  // wasAdded is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "wallet_watchAsset",\n      params: {\n        type: "ERC721", // Or "ERC1155".\n        options: {\n          // The address of the token.\n          address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",\n          // ERC-721 or ERC-1155 token ID.\n          tokenId: "1",\n        },\n      },\n    });\n\n  if (wasAdded) {\n    console.log("User successfully added the token!");\n  } else {\n    console.log("User did not add the token.");\n  }\n} catch (error) {\n  console.log(error);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"display-multiple-nfts",children:"Display multiple NFTs"}),"\n",(0,s.jsxs)(n.p,{children:["To prompt users to add multiple NFTs, use ",(0,s.jsx)(n.code,{children:"sendAsync()"})," instead of\n",(0,s.jsx)(n.code,{children:"request()"})," to call ",(0,s.jsx)(n.code,{children:"wallet_watchAsset"}),".\nFor example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'provider // Or window.ethereum if you don\'t support EIP-6963.\n  .sendAsync([{\n    method: "wallet_watchAsset",\n    params: {\n      type: "ERC721",\n      options: {\n        address: contractAddress,\n        tokenId: 1,\n      },\n    }\n  }, {\n    method: "wallet_watchAsset",\n    params: {\n      type: "ERC721",\n      options: {\n        address: contractAddress,\n        tokenId: 2,\n      },\n    },\n  },\n  ...\n  ])\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},48572:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/watchasset-nft-2-47175d8031488c5aa2a3efb176f3ce58.png"},77813:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/watchasset-nft-73bf5f1b34577d496263ffe6b475bd00.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);