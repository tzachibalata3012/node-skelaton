const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 5000,
        ignored: /node_modules/
    },
  
});