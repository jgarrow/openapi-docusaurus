/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset to avoid wiping out Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"], // markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into Docusaurus' dark mode settings
  theme: {
    extend: {},
  },
  plugins: [],
};
