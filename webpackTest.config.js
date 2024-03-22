const path = require('path')

const TerserPlugin = require('terser-webpack-plugin');


const fs = require('fs');
const componentsDir = path.resolve(__dirname, 'src/components/');
function getComponentFiles() {
    return fs.readdirSync(componentsDir);
}


const entry = getComponentFiles()
    .filter(file => fs.statSync(path.join(componentsDir, file)).isDirectory())
    .reduce((acc, component) => {
        acc[component] = path.join(componentsDir, component, `${component}.tsx`);
        return acc;
    }, {});


module.exports = {
    mode: 'production',

    entry: entry,
    output: {
        filename: (pathData) => {
            return pathData.chunk.name === 'main' ? 'index.js' : `components/${pathData.chunk.name}/[name].js`;
        },
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
        library: 'my-library-name',
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
        extensions: ['.ts', '.tsx', '.js'], // Добавьте расширения файлов, если нужно
    },

    externals: {
        "react": "react",
        "react-dom": "reactDom"
    }
}