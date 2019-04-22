// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  watch: true,
  mode: "development",
  target: "",

  entry: "",

  output: {
    path: __dirname + "/client/build",
    libraryTarget: "commonjs2",
    publicPath: "build/",
    filename: "bundle.js",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

};
