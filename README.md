## Authoring

All docs are `.mdx` pages in the `/docs` directory at the root of the project. 

### Header Links

To add a new link to the header, update the `config.themeConfig.navbar.items` list in `docusaurus.config.js`. 

See the [official docs](https://docusaurus.io/docs/2.2.0/api/themes/configuration#navbar-items) for different options and link types.

### Sidebars

The sidebars are configured in the `sidebars.js` file at the root of the project. Docusaurus autogenerates the sidebar links by default, following the file structure in the `/docs` directory. 

Currently, 3 different sidbars are configured so that the `Products`, `Use cases`, and `API Reference` docs pages have different sidebars from one another that only show links for other files within their respective category/docs type.

See the [official docs](https://docusaurus.io/docs/2.2.0/sidebar) for more details about sidebar configuration.

## Template

This template is built for [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Usage

```bash
npx create-docusaurus@2.2.0 my-website --package-manager yarn
```

> When prompted to select a template choose `Git repository`.

Template Repository URL:

```bash
https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs.git
```

> When asked how the template repo should be cloned choose "copy" (unless you know better).

```bash
cd my-website
yarn
```

### Generate OpenAPI Docs

```bash
yarn gen-api-docs all
```

This command generates pages and the sidebar config for the OpenAPI spec configured in the `docusaurus-plugin-openapi-docs` plugin options in the `docusaurus.config.js` file.

To clean the OpenAPI docs, run the clean command:

```bash
yarn clean-api-docs all
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
