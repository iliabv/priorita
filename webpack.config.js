var path = require('path');

module.exports = {
    entry: {
        popup: './src/popup.js',
        options: './src/options.js'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    }
};
