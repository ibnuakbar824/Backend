const express = require('express');
const routerMba = express.Router();
const connection = require('..//db/db');
const ctrMba = require('..//controllers/maba');

routerMba.get('/mabastikom',ctrMba.getMba)

routerMba.get('/mabastikom/:nim',ctrMba.getMbaByNim)

// post maba
routerMba.post('/mabastikom', ctrMba.create)

// update maba
routerMba.put('/mabastikom/:nim',ctrMba.update)

// delete maba menggunakan nim
routerMba.delete('/mabastikom/:nim',ctrMba.delete)

module.exports = routerMba;