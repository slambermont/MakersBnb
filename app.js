const db = require("./server/models/index.js").Properties;
var express = require("express")
var app = express()

app.use(express.urlencoded());

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  listings = []
  db.findAll()
  .then(spaces => { spaces.forEach(function (space) {
    listings.push(space.dataValues);
   })
  res.render('index')
 });
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

app.post('/listing', function(req, res) {
  db.create({
    name: req.body.title,
    description: req.body.description,
    price: req.body.price,
    contact: req.body.contact,
  });
  setTimeout(function() {
    res.redirect('/')
  },500);
});


module.exports = app;
