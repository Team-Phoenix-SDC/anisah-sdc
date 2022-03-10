const pgp = require('pg-promise')(); // this is called "currying"

const pool = {
  user: 'anisahmajeed',
  host: 'localhost',
  password: 'violin',
  database: 'productinformation',
  port: 5432
}

const db = pgp(pool);

module.exports = db;