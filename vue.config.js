const path = require('path');

module.exports = {
    outputDir: './client/dist',
    devServer: {
        contentBase: path.join(__dirname, 'client/public')
    }
}