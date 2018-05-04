// As copied from example at https://webpack.js.org/guides/getting-started/
//    This is not ES6 'import' format so update this file someday
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    entry: './src/Entry/Entry.js',
    jquery: [
        'jquery'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map',
  // Create aliases for the main components so filenames aren't required in each file
  //      ref: https://webpack.js.org/configuration/resolve/
  resolve: {
    modules: [ path.resolve(__dirname, "src/jslibs"), "node_modules" ],
    // Aliases so individual files don't reference the filenames
    alias: {
        'xConfig': path.resolve(__dirname, 'src/config.js'),
        'xBException': path.resolve(__dirname, 'src/BException.js'),
        'xUtilities': path.resolve(__dirname, 'src/Utilities.js'),
    },
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    // Keep track of the module versions/hashs so chunkhash doesn't change unless files change
    new webpack.HashedModuleIdsPlugin(),
    // Causes a separate bundle for the entry.vendor modules
    new webpack.optimize.CommonsChunkPlugin({
        name: 'jquery'
    }),
    // Create a global alias and load ThreeJS (as opposed to having imports for this driver)
    new webpack.ProvidePlugin({
        $: 'jquery'
    }),
    // Causes the runtime to be put in a separate bundle rather than included in each bundle
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),
    // Create dist/Basil.html from my template
    //      ref: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
        inject: true,
        filename: 'Entry.html',
        template: 'src/Entry.html',
        // googleAnalytics.trackingId: 'xyz',
        // googleAnalytics.pageViewOnLoad: true,
        lang: 'en-US',
    }),
    new ExtractTextPlugin('Basiljs.css')
  ],
  externals: {
      // Hack for creating the GP global variable
      'GP': '{}'
  },
  module: {
    rules: [
        {
            // process less files to the dist directory
            //    ref: https://webpack.js.org/loaders/less-loader/
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                use: [
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ],
                fallback: 'style-loader'    // use style-loader in development
            })
        },
        {
            // move css files to the dist directory
            //    ref: https://webpack.js.org/loaders/css-loader/
            test: /\.css$/,
            use: [ 'css-loader' ]
        },
        {
            // move image files to the dist directory
            //    ref: https://webpack.js.org/loaders/file-loader/
            test: /\.(png|svg|jpg|gif)$/,
            use: [ 'file-loader' ]
        }

    ]
  }

};