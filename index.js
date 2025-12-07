const express = require('express');

const app = express();

// Жорстко заданий масив продуктів (просто для прикладу)
// У реальному проєкті дані взяли б із бази даних
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' },
];

// Маршрут для GET запиту на корінь сайту '/'
app.get('/', (req, res) => {
  // Відправляємо простий текст
  res.send('response for GET request');
});

// Маршрут з параметром :brand
// Наприклад, /products/Brand%20A
app.get('/products/:brand', (req, res) => {
  // Дістаємо параметр brand з URL
  const { brand } = req.params;

  // Фільтруємо масив продуктів за брендом
  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  // Відправляємо відфільтровані продукти як JSON
  res.json(filteredProducts);
});

// Запускаємо сервер на порту 3000
const port = 3000;

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
