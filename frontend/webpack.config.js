const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
			Api: path.resolve(__dirname, 'src/api/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
						plugins: [require.resolve('react-refresh/babel')],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		hot: true,
		historyApiFallback: true,
		open: true,
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
		new ReactRefreshWebpackPlugin(),
	],
};
