module.exports = {
  typescript: { reactDocgen: false },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss',
    '@storybook/addon-viewport',
    'storybook-tailwind-dark-mode',
    'storybook-react-intl',
    'storybook-addon-sass-postcss',
    'storybook-addon-next-router'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}