const pgp = require('pg-promise')(); // this is called "currying"
pool = require('./pool.js');

const db = pgp(pool);

module.exports = db;