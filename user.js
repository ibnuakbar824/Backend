const express = require('express')
const routerUser = express.Router()
const ctrUser = require ('../controllers/user')

routerUser.post('/register',ctrUser.register);
routerUser.post('/login',ctrUser.login);
routerUser.post('/logout',ctrUser.logout);

module.exports=routerUser