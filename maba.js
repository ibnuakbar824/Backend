const express = require('express')
const routerMaba = express.Router()

const controllerMaba = require('../controler/maba')

routerMaba.route('/maba')
    .post(controllerMaba.insert)
    .get(controllerMaba.getMaba)

routerMaba.route('/maba/:nim')
    .get(controllerMaba.getMabaByNim)
    .put(controllerMaba.update)
    .delete(controllerMaba.delete)
    
module.exports=routerMaba