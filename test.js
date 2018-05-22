const db = require('./models/index.js').property;


db.create({
  name: "bars",
});
console.log(db)
