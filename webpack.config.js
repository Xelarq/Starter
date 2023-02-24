const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin({}),
			new TerserPlugin({}),
		]
	},
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
  	}
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
			
		}),
		new MiniCssExtractPlugin({
			filename: "style.css"
		})
	],
	module: {
		rules: 
		[	
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

			},
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          	loader: "babel-loader",
          	options: {
            presets: ['@babel/preset-env']
          }
        }
      }
		]
	}
}
