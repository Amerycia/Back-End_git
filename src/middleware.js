// Глобальний логер усіх запитів
function logRequest(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
}

// Middleware, яка блокує бренд "Brand C"
function blockSpecialBrand(req, res, next) {
  if (req.params.brand === 'Brand C') {
    // 403 – Forbidden
    res.status(403).send('Unavailable Brand');
  } else {
    next();
  }
}

module.exports = { logRequest, blockSpecialBrand };