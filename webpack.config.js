const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
  //devtool: "source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "lcs.js"
  },
  /*optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }*/
  plugins: [
		new CleanWebpackPlugin()
  ]
};