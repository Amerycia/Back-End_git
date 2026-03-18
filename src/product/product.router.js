const express = require('express');
const db = require('../db');
const { products } = require('../db/schema');

const router = express.Router();

router.post('/products', async (request, response) => {
  const { body } = request;
  await db.insert(products).values(body);
  return response.sendStatus(201);
});

router.get('/products', async (request, response) => {
  const productsList = await db.query.products.findMany();
  return response.json(productsList);
});

module.exports = router;