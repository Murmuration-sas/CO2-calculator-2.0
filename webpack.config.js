const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotEnv = require('dotenv')
const fs = require('fs')

module.exports = env => {

  const _env = {
    pathnames: [
      path.resolve(__dirname, `./.env`),
      path.resolve(__dirname, `./.env.${env.mode}`)
    ],
    data: {}
  }

  _env.pathnames.forEach((pathname, index) => { _env.data = { ..._env.data, ...dotEnv.parse(Buffer.from(fs.readFileSync(pathname))) } })

  return {
    entry: './src/index.js',
    output: {
      filename: 'script.js',
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
      new webpack.DefinePlugin({
        "env": JSON.stringify(_env.data)
      })
    ],
    devServer: {
      proxy: {
        '/flockeo': {
          target: 'https://flockeo.com',
          changeOrigin: true,
          secure: false,
          pathRewrite: { "^/flockeo": "" },
          onProxyReq: proxyReq => {
            proxyReq.setHeader('Authorization', 'Basic ' + btoa(`${_env.data.FLOCKEO_API_LOGIN}:${_env.data.FLOCKEO_API_PASSWORD}`))
          }
        }
      }
    }
  }
}