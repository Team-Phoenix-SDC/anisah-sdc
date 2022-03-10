const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path');
const port = 3000;

// majority of our work will happen in this file

app.use(express.json());

app.get('/', (req, res) => {
  res.send('meowwwww')
});

app.get('/products', async (req, res) => {
  let result = await db.query('SELECT * FROM products WHERE id = 2');
  res.send(result);
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
