const property = require("./server/models/index.js").Properties;
const user = require("./server/models/index.js").Users;
var express = require("express");
var session = require('express-session');
var BodyParser = require('body-parser');
var app = express();


app.use(express.urlencoded());
app.use(session({secret: 'anything'}))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', async function(req, res) {
  username = req.session.username
  listings = []
  await property.findAll()
  .then(spaces => { spaces.forEach(function (space) {
    listings.push(space.dataValues);
   })
 });
 console.log(process.env.NODE_ENV)
 res.render('index')
});

app.post('/listing', async function(req, res) {
  await property.create({
    name: req.body.title,
    description: req.body.description,
    price: req.body.price,
    contact: req.body.contact,
  });
    res.redirect('/')
});

app.get('/users/new', function(req, res) {
  res.render('signup')
});

app.post('/users', function(req, res) {
  user.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  req.session.username = req.body.username;
  res.redirect('/')
});

app.post('/signout', function(req, res) {
  req.session.username = null
  res.redirect('/')

})

// app.get('/sessions/new', function(req, res) {
//   res.render('login')
// });
//
// app.post('/sessions', function(req, res) {
//   console.log(req.body);
//   res.redirect('/')
// });

app.listen(3000, function() {
  console.log('Server is up!')
});




module.exports = app;
