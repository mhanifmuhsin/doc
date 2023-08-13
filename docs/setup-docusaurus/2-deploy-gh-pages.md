---
sidebar_position: 2
---

# Deploy ke Github Pages

:::tip Lihat dokumentasi aslinya
[Deploy ke Github Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
:::

:::danger Perhatikan

Update Configurasi di file docusaurus.config.js

:::

## Update Configurasi

```javascript
// Set the production url of your site here
  url: "https://mhanifmuhsin.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/doc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mhanifmuhsin", // Usually your GitHub org/user name.
  projectName: "doc", // Usually your repo name.
  deploymentBranch: "gh-pages",
```

## Langkah Deploy ke Github Pages

1. Siapkan branch gh-pages
2. Setting github-pages di repository ini, Settings > Pages > set branch ke gh-pages
3. Buka terminal dan eksekusi perintah ini, di branch main/master

```bash
USE_SSH=true npm run deploy
```
