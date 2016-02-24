module.exports = {
    entry: "./sandbox.ts",
    output: {
        path: __dirname,
        filename: "public/dist/bundle.js"
    },
    module: {
        loaders: [
            // needed as babel-polyfill requires other modules 
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            // first executes ts-loader, then babel  
            {test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel!ts-loader'}
        ]
    },
    devtool: 'source-map'

};
