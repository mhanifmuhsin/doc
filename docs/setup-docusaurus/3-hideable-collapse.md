---
sidebar_position: 3
---

# Hideable Sidebar dan Auto Collapse Categories

:::danger Perhatikan

Update Configurasi di file docusaurus.config.js

:::

## Update Configurasi

```javascript

 themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // start
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      }
    // end
```
