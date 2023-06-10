const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    database: 'relm'
  });

  const connectToDatabase = () => {
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
      }
    
      console.log('Connected to MySQL server!');
    });
  };

  module.exports = {connectToDatabase,connection};