const path = require('path')

module.exports = {
    mode: 'production',

    entry: './src/index.ts',
    output: {
        filename: "index.js",
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx']
    },

    externals: {
        react: 'react'
    }
}