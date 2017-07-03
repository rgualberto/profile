import webpack from 'webpack';
import path from 'path';

const nodeModules = path.resolve(__dirname, 'node_modules');

module.exports = () => {
  const config = {
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),

    entry: {
      webpack: "./index.js"
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
      sourceMapFilename: "webpack.map"
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.ProvidePlugin({
        Promise: 'exports-loader?global.Promise!es6-promise'
      })
    ],

    module: {
      rules: [
        {test: /\.jsx?$/, exclude: nodeModules, use: ['babel-loader']},
        {test: /\.scss$/, use: [
          "style-loader",
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]},
      ]
    }
  };

  return config;
};
