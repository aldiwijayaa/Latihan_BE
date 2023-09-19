const route = require('express').Router()
const controller = require("../controller/controller")
const authController = require ("../controller/auth.controller")
const authMiddleware = require ("../middlewares/auth.middleware")

route.get('/api/products', authMiddleware.autentication, controller.products)
route.get('/api/users', authMiddleware.autentication, authMiddleware.authorizationAdmin,controller.users)
route.get('/api/stock',authMiddleware.autentication,authMiddleware.authorizationOperator, controller.stock)
route.post('/api/login', authController.login)

module.exports = route