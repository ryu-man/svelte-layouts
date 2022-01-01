module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "storybook-builder-vite"
  },
  "svelteOptions": {
    "preprocess": require("../svelte.config.cjs").preprocess
  }
}
