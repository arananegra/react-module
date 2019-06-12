const merge = require('webpack-merge');
const common = require('./base.webpack.config');
const resolve = require('path').resolve;
const forkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/
    },

    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    devServer: {
        stats: "minimal",
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: './dist',
        inline: true,
        host: 'localhost',
        port: 3002,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader', 
                        options: {
                            implementation: require('sass'),
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new forkTsCheckerWebpackPlugin({
            tsconfig: '../tsconfig.json',
            async: false,
        })
    ]
})