var path = require('path');

var config = {
    context: path.join(__dirname, 'public'),
    entry: './js/index.js',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
module.exports = config;
