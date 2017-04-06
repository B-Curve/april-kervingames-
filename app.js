'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kervingames',
  multipleStatements: true
});
conn.connect();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('*', (req, res) => {
  res.render('index');
});

app.post('/findIfExists', (req, res) => {
  var query = 'SELECT '+req.body.entryType+' FROM accounts WHERE '+req.body.entryType+'="'+req.body.whatItIs+'"';
  conn.query(query, (err, rows) => {
    if(err) throw err;

    if(typeof rows[0] !== 'undefined'){
      console.log(rows);
      res.send('taken');
    }else{
      res.send('dne');
    }
  });
});

app.listen('80', () => {
  console.log('Server listening on port 80');
});
