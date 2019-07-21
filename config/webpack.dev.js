const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    mode: ENV,

    entry: {
        'angularjsbuild': './src/index.ts',
        'app': './src/main.ts'
    },

    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss', '.css']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders:['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /favicon\.ico$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(sc|c)ss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true,
                            localIdentName: '[local]',
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common',
                    minChunks: Infinity
                }
              }
        }
    },

    plugins: [

        new webpack.SourceMapDevToolPlugin({
            'filename': '[file].map[query]',
            'moduleFilenameTemplate': '[resource-path]',
            'fallbackModuleFilenameTemplate': '[resource-path]?[hash]',
            'sourceRoot': 'webpack:///'
        }),

        new HtmlWebpackPlugin({
            template: 'config/index.html'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]   
}