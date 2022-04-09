const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'complete-node-guide',
    password: 'myCupNoodles$#'
})

module.exports = pool.promise()