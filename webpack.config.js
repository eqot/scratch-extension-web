const path = require('path')

const outDir = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: outDir,
    filename: 'index.js',
    libraryTarget: 'jsonp'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: outDir,
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
