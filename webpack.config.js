const path = require('path')

module.exports = {
    entry: './src/js/main.js',
    mode: 'production',
    output: {
        filename: 'main.js',

        path: path.resolve(__dirname, 'dist'),


    }
}