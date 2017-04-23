var path = require('path');

var config = {
    context: path.join(__dirname, 'public'),
    entry: './js/main.js',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
module.exports = config;
