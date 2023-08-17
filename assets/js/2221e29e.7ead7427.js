"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return t?n.createElement(d,o(o({ref:a},l),{},{components:t})):n.createElement(d,o({ref:a},l))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u[m]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3290:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={slug:"deploy-docu-gh-pages",title:"Deploy Docusaurus ke Github Pages",authors:["mhanifmuhsin"],tags:["docusaurus","github","github pages"]},o=void 0,u={permalink:"/doc/blog/deploy-docu-gh-pages",editUrl:"https://github.com/mhanifmuhsin/doc/blog/2023-08-17-deploy-docu-gh-pages.md",source:"@site/blog/2023-08-17-deploy-docu-gh-pages.md",title:"Deploy Docusaurus ke Github Pages",description:"Kali ini kita akan mencoba melakukan deploy Docusaurus ke github pages menggunakan SSH.",date:"2023-08-17T00:00:00.000Z",formattedDate:"August 17, 2023",tags:[{label:"docusaurus",permalink:"/doc/blog/tags/docusaurus"},{label:"github",permalink:"/doc/blog/tags/github"},{label:"github pages",permalink:"/doc/blog/tags/github-pages"}],readingTime:1.025,hasTruncateMarker:!1,authors:[{name:"Muhamad Hanif Muhsin",title:"Front End Developer @ SIESTA",url:"https://github.com/mhanifmuhsin",imageURL:"https://github.com/mhanifmuhsin.png",key:"mhanifmuhsin"}],frontMatter:{slug:"deploy-docu-gh-pages",title:"Deploy Docusaurus ke Github Pages",authors:["mhanifmuhsin"],tags:["docusaurus","github","github pages"]},nextItem:{title:"Mengenal Docusaurus",permalink:"/doc/blog/docusaurus-2"}},s={authorsImageUrls:[void 0]},p=[],l={toc:p},m="wrapper";function c(e){let{components:a,...i}=e;return(0,r.kt)(m,(0,n.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kali ini kita akan mencoba melakukan deploy ",(0,r.kt)("strong",{parentName:"p"},"Docusaurus")," ke github pages menggunakan SSH."),(0,r.kt)("p",null,"Sebelum melakukan deploy ada beberapa yang harus kita siapkan atau configurasi diantaranya :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Siapkan branch dengan nama gh-pages")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update konfigurasi di file ",(0,r.kt)("strong",{parentName:"p"},"docusaurus.config.js"),", update dilakukan di atribut : url, baseUrl, organizationName, projectName, deploymentBranch"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Set the production url of your site here\nurl: "https://mhanifmuhsin.github.io",\n// Set the /<baseUrl>/ pathname under which your site is served\n// For GitHub pages deployment, it is often \'/<projectName>/\'\nbaseUrl: "/doc/",\n// GitHub pages deployment config.\n// If you aren\'t using GitHub pages, you don\'t need these.\norganizationName: "mhanifmuhsin", // Usually your GitHub org/user name.\nprojectName: "doc", // Usually your repo name.\ndeploymentBranch: "gh-pages",\n\n//attibute url, baseUrl, organizationName, dan projectName (Sesuaikan dengan repository masing-masing), untuk deploymentBranch isi dengan gh-pages karena branch ini yang nanti akan kita set sebagai github pages\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Masuk ke repository, kemudian klik Setting"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Klik setting",src:t(1260).Z,width:"3328",height:"1416"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Klik menu Pages"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Klik pages",src:t(1799).Z,width:"3312",height:"1698"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup seperti ini"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Setup",src:t(1989).Z,width:"3324",height:"1688"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kembali ke ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio Code"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Buka terminal dan eksekusi script berikut (masih di branch main/master), dan pastikan bahwa anda mengakses repository sudah menggunakan SSH"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"USE_SSH=true npm run deploy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jika berhasil di terminal akan muncul tapilan seperti berikut :"))))}c.isMDXComponent=!0},1989:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/akhir-deploy-59eabbd8302cedd66fa5e5f8511ab1cb.png"},1799:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/klik-menu-pages-7a358b060c118bea400eb10450a122f4.png"},1260:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/klik-setting-0f15bbac4432538773caae2e3e064479.png"}}]);