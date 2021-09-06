const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'my-first-webpack.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },

      {
        test: /\.css$/i,
        use: ["style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },

          "css-loader",
        ]
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },

          "css-loader",
          "sass-loader"
        ],
      },

      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
    ],

  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" }), new HtmlWebpackPlugin({ template: "./src/index.html" })],
  optimization: {
    minimize: true,
    
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    open: true,
  },
}


