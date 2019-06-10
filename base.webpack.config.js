const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    target: "web",
    optimization: {
        splitChunks: {
            name: false,
            cacheGroups: {
                vendors: {
                    name: 'vendor',
                    test: /vendor$/,
                    chunks: 'initial',
                    enforce: true
                }
            },
        },
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    entry: {
        vendor: ['react', 'react-dom'],
        app: [
            '../index.tsx'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
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