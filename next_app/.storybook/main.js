async function supportCssModules(config) {
  // console.log('1=================================')
  // console.log('>>>config', config.module.rules)
  // console.log('1=================================')

  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  return config
}


module.exports = {
  "stories": ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    "storybook-css-modules",
    '@storybook/addon-actions',
    // 'storybook-addon-next',
    // '@storybook/addon-links'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // FIXME: Support CSS Modules for Storybook
  webpackFinal: supportCssModules,
}