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
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(png|jpg|jpeg|ico|gif)?$/,
                loader: 'url-loader?limit=10000',
                options: {
                    esModule: false
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            hash: true
        }),
    ]
};
