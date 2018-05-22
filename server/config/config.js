module.exports = {
  "development": {
    "username": process.env.USER,
    "password": null,
    "database": "MakersBnB",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USER,
    "password": null,
    "database": "MakersBnB_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
