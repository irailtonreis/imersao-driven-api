const express = require('express')
const ClienteController = require('./Controllers/ClienteController')

const router = express.Router();

router.get('/clientes', ClienteController.index)

module.exports = router;