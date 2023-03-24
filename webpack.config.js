const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
	entry: './src/javascript/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].js',
		assetModuleFilename: 'assets/images/[name][ext]',
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
			filename: "styles.css"
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
				test: /\.(png|jpg|gif|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]'
				}
			 },
			{
				test: /\.(ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
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
