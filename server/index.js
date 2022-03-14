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

// endpoint for ALL products
  // GET /products
app.get('/products', async (req, res) => {
  let data = await db.query('SELECT * FROM products LIMIT 5')
  res.status(200).send(data);
})

// endpoint for SINGULAR product
  // GET /products/:product_id

  // B E L O W  T H I S IS CURRENTLY A SAMPLE ???
app.get('/products/:product_id', async (req, res) => {
  let data = await db.query(`SELECT * FROM products WHERE id=${req.params.product_id}`)
  console.log('req', req.params.product_id);
  // i definitely need to change this query to be 'dynamic'
  res.status(200).send(data);
})

// endpoint for ALL styles of a SINGULAR product
  // GET /products/:product_id/styles
app.get('/products/:product_id/styles', async (req, res) => {
  let data = await db.query('SELECT * FROM styles LIMIT 3');
  // data = typeof data;
  res.status(200).send(data);
})
//

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
