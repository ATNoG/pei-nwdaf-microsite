// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AION - Intelligence in Action",
  tagline: "",
  favicon: "img/icon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://atnog.github.io/",
  baseUrl: "pei-nwdaf-microsite",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ATNoG", // Usually your GitHub org/user name.
  projectName: "pei-nwdaf-microsite", // Usually your repo name.
  deploymentBranch: "main",
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          routeBasePath: "docs",
        },
        blog: false, // optional if you don't use blog
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
plugins: [
  // Disable SVGO for large SVGs that exceed parser buffer limits
  function disableSvgo() {
    return {
      name: 'disable-svgo',
      configureWebpack(config) {
        for (const rule of config.module.rules) {
          if (!rule.oneOf) continue;
          for (const oneOf of rule.oneOf) {
            const use = Array.isArray(oneOf.use) ? oneOf.use : [oneOf.use];
            for (const loader of use) {
              if (loader?.loader?.includes('@svgr') && loader.options) {
                loader.options.svgo = false;
              }
            }
          }
        }
        return {};
      },
    };
  },
  [
    "@scalar/docusaurus",
    {
      id: "ingestion",
      route: "/api/ingestion",
      showNavLink: false,
      configuration: {
        spec: { content: require('./static/openapi/ingestion.json') },
      },
    },
  ],
  [
    "@scalar/docusaurus",
    {
      id: "ml",
      route: "/api/ml",
      showNavLink: false,
      configuration: {
        spec: { content: require('./static/openapi/ml.json') },
      },
    },
  ],
  [
    "@scalar/docusaurus",
    {
      id: "storage",
      route: "/api/storage",
      showNavLink: false,
      configuration: {
        spec: { content: require('./static/openapi/storage.json') },
      },
    },
  ],
  [
    "@scalar/docusaurus",
    {
      id: "decision",
      route: "/api/decision",
      showNavLink: false,
      configuration: {
        spec: { content: require('./static/openapi/decision.json') },
      },
    },
  ],
  [
    "@scalar/docusaurus",
    {
      id: "policy",
      route: "/api/policy",
      showNavLink: false,
      configuration: {
        spec: { content: require('./static/openapi/policy.json') },
      },
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: "AION Logo",
          src: "img/icon.png",
          href: "/",
          target: "_self",
        },
        items: [
          { to: "/", label: "Home", position: "left", exact: true },
          { to: "/team", label: "Team", position: "left" },
          { to: "/docs", label: "Docs", position: "left" },
          {
              label: "API Reference",
              position: "left",
              items: [
              { label: "Data Ingestion", to: "/api/ingestion" },
              { label: "ML", to: "/api/ml" },
              { label: "Data Storage", to: "/api/storage" },
              { label: "Decision", to: "/api/decision" },
              { label: "Policy", to: "/api/policy" },
              ],
          },
          {
            href: "https://github.com/ATNoG/pei-nwdaf",
            label: "Team Repos",
            position: "right",
          },
        ],
      },

footer: {
  style: 'dark',
  links: [
    {
      title: 'More',
      items: [
        {
          html: '<a href="https://github.com/ATNoG/pei-nwdaf" target="_blank" rel="noopener noreferrer">GitHub</a>'
        }
      ]
    },
    {
      title: 'Project Advisors',
      items: [
        {
          html: 'Rui Aguiar'
        },
        {
          html: 'Rafael Direito'
        },
        {
          html: 'Rafael Teixeira'
        }
      ]
    },
    {
      title: 'Team Members',
      items: [
        {
          html: 'Alexandre Andrade'
        },
        {
          html: 'André Martins'
        },
        {
          html: 'João Pereira'
        },
        {
          html: 'Miguel Neto'
        },
        {
          html: 'Thiago Vicente'
        }
      ]
    }
  ],
  copyright: 'Copyright 2025 <br>ATNoG @ IT @ UA'
},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.jettwaveDark,
      },
    }),
};

export default config;
