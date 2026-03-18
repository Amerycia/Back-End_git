// Логуємо помилки в консоль
const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

// Обробник для XHR-запитів (може й не спрацювати у браузері, але хай буде як у методичці)
const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed' });
  } else {
    next(err);
  }
};

// Фінальний обробник помилки – саме він відправляє відповідь клієнту
const errorResponder = (err, req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.status(err.statusCode || 500).send(err.message || 'Server error');
};

module.exports = { logErrors, clientErrorHandler, errorResponder };
