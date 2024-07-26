const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'test', // Twoje hasło do MySQL
  database: 'NCFaktury' // Nazwa Twojej bazy danych MySQL
});

connection.connect();

app.get('/data', function (req, res) {
  connection.query('SELECT * FROM invoices', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(3001, function () {
  console.log('Server is running on port 3000');
});
