const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        alias: {
            layout: path.resolve(__dirname, "./src/layout/"),
            scenes: path.resolve(__dirname, "./src/scenes/"),
            core: path.resolve(__dirname, "./src/core/"),
            pods: path.resolve(__dirname, "./src/pods/"),
            common: path.resolve(__dirname, "./src/common/"),
        }
    },
    target: "web",
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        styles: './index.scss',
        //vendor: ['react', 'react-dom'],
        app: [
            '../index.tsx'
        ]
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                use: "url-loader?limit=10000"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.mp4$|\.wav$|\.mp3$/,
                use: 'file-loader?name=[name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            hash: true
        }),
    ]
};