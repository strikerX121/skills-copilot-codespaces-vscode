// Create web server 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Create a connection to the database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'comments'
});
connection.connect();
// Create a web server that can respond to requests from the browser
// Start the web server
app.listen(8080, () => {
    console.log('Server running at http://