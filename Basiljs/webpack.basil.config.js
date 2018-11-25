// Webpack file for the main Basil viewer page.

//    (the following is not ES6 'import' format so update this file someday)
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    basil: './src/Basil.js',
    // declare the config file as a separate entry so it is not packed with the main viewer
    config: './src/config.js',
  },
  output: {
    // use webpack.HashedModuleIdsPlugin to create unique filenames for each build
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // Create aliases for the main components so filenames aren't required in each file
  //      ref: https://webpack.js.org/configuration/resolve/
  resolve: {
    modules: [ path.resolve(__dirname, "src/jslibs"), "node_modules" ],
    // Aliases so individual files don't reference the filenames
    alias: {
        'xConfig': path.resolve(__dirname, 'src/config.js'),
        'xBException': path.resolve(__dirname, 'src/BException.js'),
        'xUtilities': path.resolve(__dirname, 'src/Utilities.js'),

        'xComm': path.resolve(__dirname, 'src/Comm/Comm.js'),
        'xBTransport': path.resolve(__dirname, 'src/Comm/BTransport.js'),
        'xBTransportWW': path.resolve(__dirname, 'src/Comm/BTransportWW.js'),
        'xBTransportWS': path.resolve(__dirname, 'src/Comm/BTransportWS.js'),
        'xBasilServer': path.resolve(__dirname, 'src/Comm/BasilServer.js'),
        'xBasilClient': path.resolve(__dirname, 'src/Comm/BasilClient.js'),
        'xBasilServerMessages': path.resolve(__dirname, 'src/jslibs/BasilServerMessages.js'),

        'xBItem': path.resolve(__dirname, 'src/Items/BItem.js'),
        'xDisplayable': path.resolve(__dirname, 'src/Items/Displayable.js'),
        'xPredefinedItems': path.resolve(__dirname, 'src/Items/PredefinedItems.js'),

        'xControls': path.resolve(__dirname, 'src/Controls/Controls.js'),
        'xEventing': path.resolve(__dirname, 'src/Eventing/Eventing.js'),
        // 'xGraphics': path.resolve(__dirname, 'src/Graphics/Graphics-ThreeJS.js'),
        'xGraphics': path.resolve(__dirname, 'src/Graphics/Graphics.js'),

        'xThreeJS': path.resolve(__dirname, 'src/jslibs/three.min.js'),
        'xThreeJSOrbit': path.resolve(__dirname, 'src/jslibs/OrbitControls.js'),
        'xThreeJSGLTF': path.resolve(__dirname, 'src/jslibs/GLTFLoader.js'),
        'xThreeJSCollada': path.resolve(__dirname, 'src/jslibs/ColladaLoader.js'),
        'xThreeJSDRACO': path.resolve(__dirname, 'src/jslibs/DRACOLoader.js'),
        'xThreeJSFBX': path.resolve(__dirname, 'src/jslibs/FBXLoader.js'),
        'xThreeJSOBJ': path.resolve(__dirname, 'src/jslibs/OBJLoader.js'),
        'xThreeJSBVH': path.resolve(__dirname, 'src/jslibs/BVHLoader.js'),

        // 'protobufjs/minimal': path.resolve(__dirname, 'src/jslibs/protobufjs/minimal/protobuf.min.js'),
        'protobufjs/minimal': path.resolve(__dirname, 'src/jslibs/protobufjs/minimal/protobuf.js'),
    },
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    // Keep track of the module versions/hashs so chunkhash doesn't change unless files change
    new webpack.HashedModuleIdsPlugin(),

    // Create a global alias and load ThreeJS (as opposed to having imports for this driver)
    new webpack.ProvidePlugin({
        THREE: 'xThreeJS',
    }),

    // Causes the runtime to be put in a separate bundle rather than included in each bundle
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),

    // Create dist/Basil.html from my template
    //      ref: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
        inject: true,
        filename: 'Basil.html',
        template: 'src/Basil.html',
        // googleAnalytics.trackingId: 'xyz',
        // googleAnalytics.pageViewOnLoad: true,
        lang: 'en-US'
    }),
    // Extract text from a bundle or bundles into a separate file.
    //     ref: https://www.npmjs.com/package/extract-text-webpack-plugin
    new ExtractTextPlugin('Basiljs.css')
  ],
  externals: {
      // Hack for creating the GP global debug variable
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
