const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: './src/index.js',
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
			}
		]
	}
}
