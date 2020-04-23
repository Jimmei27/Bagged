const path = require('path');

module.exports = {
    //react component 
  entry: './src/store.js',
  mode: "production",
  output: {
      path: path.resolve(__dirname, 'dist'),
      // publicPath: "/dist/",
      filename: 'bundle.js',
  },
  //rule for jsx and css 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  //devServer 
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};