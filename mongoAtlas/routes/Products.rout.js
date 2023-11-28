const router = require('express').Router()
const{getAllProduct}=require('../controllers/Products.controller')

router.route('/').get(getAllProduct)


module.exports = router