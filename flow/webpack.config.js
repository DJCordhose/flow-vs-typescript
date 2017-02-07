const path = require('path');
const FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
    entry: "./src/index.js",
    output:  {
        // output path
        path:       path.resolve(__dirname, 'public/dist'),
        publicPath: 'dist/',
        filename:   'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: "flowtype-loader", exclude: /node_modules/, enforce: 'pre'},
            // { test: /\.js$/, loader: 'eslint', exclude: /node_modules/},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader", enforce: 'pre' },
            { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new FlowtypePlugin()
        // new FlowtypePlugin({cwd: '/path/'})
        // new FlowtypePlugin({failOnError: true})
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};