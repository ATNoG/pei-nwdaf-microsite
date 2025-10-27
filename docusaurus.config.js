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
  favicon: "img/favicon.ico",

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          { to: "/", label: "Home", position: "left", exact: true },
          { to: "/team", label: "Team", position: "left" },
          { to: "/docs", label: "Docs", position: "left" },
          {
            href: "https://github.com/orgs/ATNoG/teams/pei-2025-nwdaf/repositories",
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
          label: 'GitHub',
          href: 'https://github.com/ATNoG/pei-nwdaf'
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
