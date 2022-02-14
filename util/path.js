const path = require('path')

// require.main refers to the main module that started the application (Ex app.js).
// Gives path to main file
module.exports = path.dirname(require.main.filename)
