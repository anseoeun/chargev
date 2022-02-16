// const webpack = require('webpack')

module.exports = {
    css: {
        loaderOptions: {
          sass: {
            //implementation: require('sass'), // This line must in sass option
          },
        },
      },
    runtimeCompiler: true,
    // configureWebpack: {
    //   plugins: [
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jquery: 'jquery',
    //         'window.jQuery': 'jquery',
    //         jQuery: 'jquery'
    //     }),
    //   ]
    // }
};
