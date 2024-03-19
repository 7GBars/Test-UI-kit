const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/index.ts',
    output: {
        filename: "index.js",
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true
    },

    optimization: {
        // eslint-disable-next-line spellcheck/spell-checker
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },

    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[name].[ext]',
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx']
    },

    externals: {
        "react": "react",
        "react-dom": "reactDom"
    }
}