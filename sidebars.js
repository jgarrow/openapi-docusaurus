/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // This was the default sidebar that all docs pages shared (except api ref docs and homepage)
  // docsSidebar: [{ type: "autogenerated", dirName: "." }],


  connectSidebar: [{ type: "autogenerated", dirName: "connect" }],
  productsSidebar: [{ type: "autogenerated", dirName: "products" }],
  useCasesSidebar: [{ type: "autogenerated", dirName: "use-cases" }],
  balanceChecksSidebar: [{ type: "autogenerated", dirName: "products/balance_checks" }],
  extendedHIstorySidebar: [{ type: "autogenerated", dirName: "products/extended_transaction_history" }],
  statementsSidebar: [{ type: "autogenerated", dirName: "products/statements" }],
  accountOwnerIdentificationSidebar: [{ type: "autogenerated", dirName: "products/account_owner_identification" }],
  paymentsSidebar: [{ type: "autogenerated", dirName: "use-cases/payments" }],
  openApiSidebar: [
    {
      type: "category",
      label: "Platform API",
      link: {
        type: "generated-index",
        title: "Platform API",
        description:
          "This is a proof-of-concept for a Docusaurus theme that renders OpenAPI specs for the MX Platform API.",
        slug: "/platform-api",
      },
      // @ts-ignore
      items: require("./docs/platform-api/sidebar.js"),
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
