const { resolve } = require('path');
const { dependencies } = require('./package.json');
const BabiliPlugin = require("babili-webpack-plugin");

const nodeModules = {};

Object
    .keys(dependencies)
    .forEach((mod) => {
     nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = (env = { dev: true }) => ({
    context: resolve(__dirname, './src'),
    entry: {
     server: env.prod ? './index.js' : ['webpack/hot/poll?1000', './index.js']
    },
    target: 'node',
    output: {
     filename: '[name].js',
     path: resolve(__dirname, './build'),
     pathInfo: !env.prod
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loaders: [
           'babel-loader'
         ]
       }
     ]
    },
    plugins: env.prod ? [
      new BabiliPlugin()
    ] : [],
    externals: nodeModules
});
