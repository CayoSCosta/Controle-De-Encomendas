const express = require('express');
const router = express.Router();

// Controladores
const {
  getEncomendas,
  getEncomenda,
  createEncomenda,
  updateEncomenda,
  deleteEncomenda
} = require('../controllers/encomendas');

router
  .route('/')
  .get(getEncomendas)
  .post(createEncomenda);

router
  .route('/:id')
  .get(getEncomenda)
  .put(updateEncomenda)
  .delete(deleteEncomenda);

module.exports = router;
