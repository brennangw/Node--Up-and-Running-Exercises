var express = require('express')
  , http = require('http');
var app = express(); 
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.send('Welcome to Node Twitter')
})

server.listen(8000)
