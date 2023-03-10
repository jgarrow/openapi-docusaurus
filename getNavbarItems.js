const fs = require('fs');
const { createSlugger } = require('@docusaurus/utils');

// import type { NavbarItem } from '@docusaurus/theme-common';

// type GetProductsOptions = Omit<NavbarItem, "items">

/*
Check if the dirPath directory exists
If it does, return the list of the file names in the directory
*/
const getNavbarItems = (dirPath, options) => {
// const getNavbarItems = (dirPath: fs.PathLike, options: GetProductsOptions): NavbarItem[] | [] => {
  if (fs.existsSync(dirPath)) {
    return [{
      ...options,
      // items: fs.readdirSync(dirPath).map((file: string) => {
      items: fs.readdirSync(dirPath).map((file) => {
        return {
          label: file.replace('.mdx', ''),
          to: createSlugger().slug(file.replace('.mdx', '')),
        };
      })
    }];
  } else {
    console.log(`No ${dirPath} directory found in '/docs/`)
    return [];
  }
}

module.export = { getNavbarItems };
