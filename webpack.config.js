const path = require('path');

module.exports = {
  entry: './shitINeed.js',
  output: {
    filename: 'sin.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'sin'
  }
};