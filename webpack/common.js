// shared config (dev and prod)
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const context = resolve(__dirname, "../src");

module.exports = {
  context: context,
  resolve: {
    modules: [context, "node_modules"], // lets us namespace modules at /src directory
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" })]
};
