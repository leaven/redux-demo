module.exports = {
    entry: "./index.js",
    resolve: {
       extensions: ['', '.js']
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          include: __dirname
        }]
    }
}