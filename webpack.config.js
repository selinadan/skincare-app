const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Utils: path.resolve(__dirname, 'src/utils/'),
		},
	},
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'src'),
		},
		compress: true,
		port: 9000,
		hot: true,
		liveReload: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: `
				<!DOCTYPE html>
				<html>
					<head>
						<meta charset="UTF-8">
						<title>React App</title>
					</head>
					<body>
						<div id="root"></div>
					</body>
				</html>
			`,
		}),
	],
};
