const path = require('path');

module.exports = {
    entry: './redux-basic/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
}