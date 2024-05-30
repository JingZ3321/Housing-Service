const mysql = require('mysql2/promise');

// Set the connection properties
const connection = mysql.createPool({
  host: '',
  port: '3306',
  user: 'admin',
  password: '',
  database: 'HousingService',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the connection
module.exports = connection;                                                                                                    