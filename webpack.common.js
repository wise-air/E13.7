const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
     app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
	module: {
		rules: [
				{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true
				}
			},
			{
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
		]
    }
}