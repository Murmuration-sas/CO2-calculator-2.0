const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = env => ({
  // entry: './iframe/index.js',
  output: {
    filename: 'iframe.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ["src", "node_modules"]
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|gif|ico)$/,
      use: ['file-loader?name=[name].[ext]']
    },
    { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new Dotenv({
      path: path.resolve(__dirname, `./.env.${env.mode}`)
    })
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/flockeo': {
        target: 'https://flockeo.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/flockeo": "" },
        onProxyReq: proxyReq => {
          proxyReq.setHeader('Authorization', 'Basic ' + btoa('Dylan:1Qn$G213TqP4h3sVELff'));
        }
      }
    }
  }
})