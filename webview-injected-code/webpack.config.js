const path = require('path');

var baseConfig = {
  mode: 'production',
  devtool: false,
  // For debugging purposes this can be set to:
  // mode: 'development',
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};

var modules = [
  {
    name: 'webview-debugging',
  },
  {
    name: 'webview-android-offline',
  },
  {
    name: 'webview-scroll-to-top',
  },
  {
    name: 'webview-window-onerror',
  },
  {
    name: 'webview-set-language',
    moduleName: 'kp_webview_set_language',
  },
  {
    name: 'webview-set-padding',
    moduleName: 'kp_webview_set_padding',
  },
  {
    name: 'webview-go-to-page',
    moduleName: 'kp_webview_go_to_page',
  },
];

module.exports = modules.map(module => {
  return Object.assign({}, baseConfig, {
    name: module.name,
    entry: './src/' + module.name + '/index',
    output: {
      path: path.resolve(__dirname, './build/' + module.name),
      filename: 'bundle.raw.js',
      library: module.moduleName,
    },
  });
});
