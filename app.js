const db = require("./server/models/index.js").Properties;
var express = require("express")
var app = express()
<<<<<<< HEAD
// var conn =  require("db")
=======
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

>>>>>>> master
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
});

app.listen(3000, function() {
  console.log('Server is up!')
});

//test db is connected
db.create({
  name: "test",
});

module.exports = app;
