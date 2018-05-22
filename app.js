var express = require("express")
var app = express()
// var conn =  require("db")

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
});

app.listen(3000, function() {
  console.log('Server is up!')
});

module.exports = app;
