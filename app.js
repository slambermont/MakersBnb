const db = require("./server/models/index.js").Properties;
var express = require("express")
var app = express()

app.use(express.urlencoded());

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/users/new', function(req, res) {
  res.render('signup')
});

app.post('/users', function(req, res) {
  console.log(req.body);
  res.redirect('/')
});

app.get('/sessions/new', function(req, res) {
  res.render('login')
});

app.post('/sessions', function(req, res) {
  console.log(req.body);
  res.redirect('/')
});

app.listen(3000, function() {
  console.log('Server is up!')
});

//test db is connected
db.create({
  name: "test",
});

module.exports = app;
