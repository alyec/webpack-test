'use strict';
const webpack = require('webpack');
const path = require('path');

const SRC = __dirname + '/src';
const BUILD = __dirname + '/build';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: ['webpack/hot/dev-server', './bootstrap.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: SRC,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                //loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: /node_modules|bower_components/
            }
        ]
    }
};
