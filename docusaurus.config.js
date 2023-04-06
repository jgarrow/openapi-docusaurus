// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const theme = require("shiki/themes/nord.json");
// const theme = require("./src/theme/codeTheme.json");
const { remarkCodeHike } = require("@code-hike/mdx");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MX Docs",
  // tagline: "Dinosaurs are cool",
  url: "https://press.sand.internal.mx",
  baseUrl: "/",
  onBrokenLinks: "warn", // TODO: change to throw for production
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          beforeDefaultRemarkPlugins: [
            [
              remarkCodeHike,
              { theme, lineNumbers: true, showCopyButton: true, skipLanguages: ["mermaid"], },
            ],
          ],
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/code-hike.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // https://docusaurus.io/docs/search
      algolia: {
        // contextualSearch: true,
        // TODO: Replace with your own values once docs are indexed
        appId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
        indexName: "docsearch"
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },
      navbar: {
        // title: "MX API Docs",
        logo: {
          alt: "MX docs logo",
          src: "img/mx-docs.svg",
        },
        items: [
          // ...getNavbarItems('./docs/products', {
          //   type: "dropdown",
          //   docId: "products",
          //   label: "Products",
          //   position: "left",
          // }),

          {
            type: "dropdown",
            docId: "intro",
            position: "left",
            label: "Products",
            items: [
              {
                to: "/products/account-aggregation",
                label: "Account Aggregation",
              },
              {
                to: "/products/balance_checks",
                label: "Balance Check"
              },
              {
                to: "/products/account_numbers",
                label: "Instant Account Verification"
              },
              // {
              //   to: "/account-owner-verification",
              //   label: "Account Owner Verification"
              // },
              // {
              //   to: "/microdeposits",
              //   label: "Microdeposits"
              // },
            ],
          },
          { to: "/use-cases", label: "Use cases", position: "left" },
          {
            label: "API Reference",
            position: "left",
            to: "/platform-api/mx-platform-api",
          },
          // {
          //   label: "More APIs",
          //   position: "left",
          //   to: "/more-apis"
          // },
          // {
          //   label: "Resources",
          //   position: "left",
          //   to: "/resources"
          // },
          {
            href: "https://dashboard.mx.com",
            label: "Login",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "./plugins/docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          "platform-api": {
            label: "Platform API",
            specPath: "openapi/mx_platform_api.yaml",
            hideSendButton: true,
            proxy: "api",
            // specPath: "https://api.redocly.com/registry/bundle/mx-test/MX%20Platform/v1/openapi.yaml?branch=main",
            outputDir: "docs/platform-api",
            // downloadUrl:
            //   "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs", "mdx-v2"],
};

module.exports = config;
