// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const { getNavbarItems } = require("./getNavbarItems");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MX Docs",
  // tagline: "Dinosaurs are cool",
  url: "https://yip-yip.surge.sh",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        // title: "MX API Docs",
        logo: {
          alt: "MX docs logo",
          src: "img/mx-docs.svg"
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
                label: "Account Aggregation"
              },
              {
                to: "/extended-transaction-history",
                label: "Extended Transaction History"
              },
              {
                to: "/instant-account-verification",
                label: "Instant Account Verification"
              },
              {
                to: "/account-owner-verification",
                label: "Account Owner Verification"
              },
              {
                to: "/microdeposits",
                label: "Microdeposits"
              },
            ]
          },
          { to: "/use-cases", label: "Use cases", position: "left" },
          {
            label: "API Reference",
            position: "left",
            to: "/platform-api/mx-platform-api"
          },
          {
            label: "More APIs",
            position: "left",
            to: "/more-apis"
          },
          {
            label: "Resources",
            position: "left",
            to: "/resources"
          },
          {
            href: "https://dashboard.mx.com",
            label: "Login",
            position: "right",
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus"
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  plugins: [
    async function myPlugin(context, options) {
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
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          "platform-api": {
            // specPath: "openapi/mx_platform_api.yaml",
            specPath: "https://api.redocly.com/registry/bundle/mx-test/MX%20Platform/v1/openapi.yaml?branch=main",
            outputDir: "docs/platform-api",
            // downloadUrl:
            //   "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          }
        }
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
