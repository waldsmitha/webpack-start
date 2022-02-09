const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
  // Below plugins creates new default index.html in public every build, but if I want my own custom one, use the below code
  // plugins: [new HtmlWebpackPlugin()],
  plugins: [
    //wipes public folder before creating new files
    new CleanWebpackPlugin(),
    //Allows us to specify html file to create
    new HtmlWebpackPlugin({
      title: "Hello Webpack bundled JavaScript Project",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  // (3) The /public folder will be used to serve our application to the browser.
  devServer: {
    static: path.resolve(__dirname, "./public"),
  },
};
