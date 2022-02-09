const path = require("path");

module.exports = {
  // (1) Use the src/index.js file as entry point to bundle it. If the src/index.js file imports other JavaScript files, bundle them as well.
  entry: path.resolve(__dirname, "./src/index.js"),
  // (2) The bundled source code files shall result in a bundle.js file in the /dist folder.
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  // (3) The /public folder will be used to serve our application to the browser.
  devServer: {
    static: path.resolve(__dirname, "./public"),
  },
};
