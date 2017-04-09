'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var session = require('client-sessions');
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kervingames',
  multipleStatements: true
});
conn.connect();

app.use(session({
  cookieName: 'session',
  secret: 'session_id:19974402289;brandonkervin',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

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

app.post('/submitNewUser', (req, res) => {
  var accounts = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  var query = 'INSERT INTO accounts SET ?';
  conn.query(query, accounts, (err) => {
    if(err) throw err;
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    req.session.email = req.body.email;
    res.send('true');
  });
});

app.listen('80', () => {
  console.log('Server listening on port 80');
});
