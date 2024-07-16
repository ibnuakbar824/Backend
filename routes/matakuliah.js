const express = require('express')
const routerMk = express.Router()
const ctrMk = require('../controllers/matakuliah')

routerMk.get('/matakuliah', ctrMk.getMk);
routerMk.get('/matakuliah/:kdmk', ctrMk.getMkBykdMk);
routerMk.post('/matakuliah', ctrMk.create);
routerMk.put('/matakuliah/:kdmk', ctrMk.update);
routerMk.delete('/matakuliah/:kdmk', ctrMk.delete);

module.exports=routerMk