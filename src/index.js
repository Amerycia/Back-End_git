// index.js

const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const {
  logErrors,
  clientErrorHandler,
  errorResponder,
} = require('./error.middleware');

const app = express();
const PORT = 3000;

// Глобальний middleware логування
app.use(logRequest);

// Основні маршрути
app.use(productRoutes);

// Мідлвари обробки помилок – ПІСЛЯ роутів
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
