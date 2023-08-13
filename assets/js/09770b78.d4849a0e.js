"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Deploy ke Github Pages",s={unversionedId:"setup-docusaurus/deploy-gh-pages",id:"setup-docusaurus/deploy-gh-pages",title:"Deploy ke Github Pages",description:"Deploy ke Github Pages",source:"@site/docs/setup-docusaurus/2-deploy-gh-pages.md",sourceDirName:"setup-docusaurus",slug:"/setup-docusaurus/deploy-gh-pages",permalink:"/doc/docs/setup-docusaurus/deploy-gh-pages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-docusaurus/2-deploy-gh-pages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install Docusaurus",permalink:"/doc/docs/setup-docusaurus/installing"}},u={},p=[{value:"Update Configurasi",id:"update-configurasi",level:2},{value:"Langka Deploy ke Github Pages",id:"langka-deploy-ke-github-pages",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-ke-github-pages"},"Deploy ke Github Pages"),(0,a.kt)("admonition",{title:"Lihat dokumentasi aslinya",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"Deploy ke Github Pages"))),(0,a.kt)("admonition",{title:"Perhatikan",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Update Configurasi di file docusaurus.config.js")),(0,a.kt)("h2",{id:"update-configurasi"},"Update Configurasi"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Set the production url of your site here\n  url: "https://mhanifmuhsin.github.io",\n  // Set the /<baseUrl>/ pathname under which your site is served\n  // For GitHub pages deployment, it is often \'/<projectName>/\'\n  baseUrl: "/doc/",\n\n  // GitHub pages deployment config.\n  // If you aren\'t using GitHub pages, you don\'t need these.\n  organizationName: "mhanifmuhsin", // Usually your GitHub org/user name.\n  projectName: "doc", // Usually your repo name.\n  deploymentBranch: "gh-pages",\n')),(0,a.kt)("h2",{id:"langka-deploy-ke-github-pages"},"Langka Deploy ke Github Pages"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Siapkan branch gh-pages"),(0,a.kt)("li",{parentName:"ol"},"Setting github-pages di repository ini, Settings > Pages > set branch ke gh-pages"),(0,a.kt)("li",{parentName:"ol"},"Buka terminal dan eksekusi perintah ini, di branch main/master")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"USE_SSH=true npm run deploy\n")))}d.isMDXComponent=!0}}]);