module.exports = {
  entry: "./lib/main.js",
  output: {
    filename: "./lib/jquery_lite.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
