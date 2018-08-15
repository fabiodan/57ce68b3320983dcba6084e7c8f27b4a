const { resolve } = require('path')

module.exports = (baseConfig, env, defaultConfig) => {

  // SASS
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {

          // Create @asda alias to easly import or require global components.
          importer(url) {
            if (url.indexOf('@asda') === 0) {
              const filePath = url.split('@asda')[1]
              const nodeModulePath = `./components/${filePath}`
              return {
                file: resolve(nodeModulePath),
              }
            }
            return { file: url }
          },

          outputStyle: 'expanded',
        },
      },
    ],
    include: resolve(__dirname, '../')
  })

  defaultConfig.resolve.alias = {

    // Preserve StoryBook's default settings
    ...defaultConfig.resolve.alias,

    // Create @asda alias to easly import or require global components.
    '@asda': resolve(__dirname, '../components/'),
  }

  return defaultConfig;
}
