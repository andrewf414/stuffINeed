const path = require('path');

module.exports = {
  entry: './stuffINeed.js',
  output: {
    filename: 'sin.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'sin'
  }
};