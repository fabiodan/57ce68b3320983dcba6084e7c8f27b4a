const path = require('path');

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
          outputStyle: 'expanded',
        },
      },
    ],
    include: path.resolve(__dirname, '../')
  })

  return defaultConfig;
}
