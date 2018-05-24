const property = require("./server/models/index.js").Properties;
const user = require("./server/models/index.js").Users;
var express = require("express")
var app = express()


app.use(express.urlencoded());

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', async function(req, res) {
  listings = []
  await property.findAll()
  .then(spaces => { spaces.forEach(function (space) {
    listings.push(space.dataValues);
   })
 });
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
  res.redirect('/')
});

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
