const path = require('path');

module.exports = {
    entry: './til_app/app.js',
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
            }
        ]
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
}