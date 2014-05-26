var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser');

var app = express(); 

var server = http.createServer(app);

server.listen(8000)

var tweets = []

app.get('/', function(req, res) {
  res.send('Welcome to Node Twitter')
})

app.post('/send', bodyParser(), function(req, res) {
  if (req.body && req.body.tweet) {
    tweets.push(req.body.tweet)
    res.send({status:"ok", message:"Tweet received"})
  } else {
    //no tweet?
    res.send({status:"nok", message:"No tweet received"})
  }
})

app.get('/tweets', function(req,res) {
  res.send(tweets)
})