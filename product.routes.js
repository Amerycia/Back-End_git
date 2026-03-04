// product.routes.js

const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// /products – всі товари
router.get('/products', (req, res) => {
  res.json(products);
});

// /products/:brand – товари за брендом
// тут підключаємо blockSpecialBrand як middleware ДЛЯ ЦЬОГО РОУТА
router.get('/products/:brand', blockSpecialBrand, (req, res) => {
  const { brand } = req.params;

  const filteredProducts = products.filter((product) => product.brand === brand);

  res.json(filteredProducts);
});

// ДОДАТКОВЕ: /products/id/:id – товар за id
router.get('/products/id/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// /productswitherror – спеціальний роут, який кидає помилку
router.get('/productswitherror', (req, res, next) => {
  const err = new Error('processing error');
  err.statusCode = 400;
  next(err); // передаємо помилку в error middleware
});

module.exports = router;
