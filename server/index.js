const express = require('express');
const app = express();
const db = require('../database/index.js');
const axios = require('axios');
const path = require('path');
const port = 3000;

// majority of our work will happen in this file

app.use(express.json());

app.get('/', (req, res) => {
  res.send('meowwwww')
});

// endpoint for photos
  // GET /photos/:product_id
app.get('/photos/:product_id', async (req, res) => {
  try {
    let data = await db.query(`SELECT * FROM photos WHERE id=${req.params.product_id}`)
    res.status(200).send(data);
  }
  catch (err) {
    res.status(500).send(err)
  }
})

// endpoint for SINGULAR product
  // GET /products/:product_id
app.get('/products/:product_id', async (req, res) => {
  try {
    let data = await db.query(`SELECT * FROM products WHERE id=${req.params.product_id}`)
    res.status(200).send(data[0]);
  }
  catch (err) {
    res.status(500).send(err);
  }
})

// endpoint for ALL styles of a SINGULAR product
  // GET /products/:product_id/styles
app.get('/products/:product_id/styles', async (req, res) => {
  try {
    let stylesObj = {};
    let data = await db.query(`SELECT * FROM styles WHERE product_id=${req.params.product_id}`)
    let pictures = await db.query(`SELECT * FROM photos WHERE styles_product_id=${req.params.product_id}`)

    if (pictures.length > data.length) {
      pictures.length = data.length;
    }
    stylesObj.product_id = req.params.product_id;

    for (let i = 0; i < data.length; i++) {
      let photosArray = [];
      data[i].photos = [pictures[i]];
      photosArray.push();
    }

    stylesObj.results = data;

    res.status(200).send(stylesObj);
  }
  catch (err) {
    console.log('fool', err);
    res.status(500).send(err);
  }
})
//

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
