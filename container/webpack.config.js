const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    // publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        listing: "listing@https://cuddly-guacamole-x9p669qwj47c65v6-3001.app.github.dev/remoteEntry.js",
        cart: "cart@https://cuddly-guacamole-x9p669qwj47c65v6-3002.app.github.dev/remoteEntry.js",
        checkout: "checkout@https://cuddly-guacamole-x9p669qwj47c65v6-3003.app.github.dev/remoteEntry.js",
      },
      // shared: ["react", "react-dom", "react-router-dom"],
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};