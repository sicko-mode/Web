const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {
    mode:'development',
    entry:'./src/index.js',
      output:{
      path: __dirname + '/dist',
      filename: 'bundle.[hash].js'
    },
    module:{
        rules:[
            {
                test: /\.svg$/,
                loader: 'file-loader'
            },
        {
            test: /\.(png|jp(e*)g)$/,
            loader: 'url-loader',
            options: { 
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
            } 
        },
        {
          test:/\.(js|jsx)$/,
          exclude:/node_modules/,
          use:['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            }
          ]
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase : './public',
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true,
  }
};