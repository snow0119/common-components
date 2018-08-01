module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: 'production',
    devtool: "eval-source-map",
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    }
}