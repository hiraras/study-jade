
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/entry.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, './src'),
    },
    module: {

    },
    plugins: [],
}