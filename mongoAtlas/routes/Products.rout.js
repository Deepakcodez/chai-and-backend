const router = require('express').Router()
const{getAllProduct,addProduct,getProduct}=require('../controllers/Products.controller')

router.route('/all').get(getAllProduct)
router.route('/add').post(addProduct)
router.route('/singleProd/:id').get(getProduct)


module.exports = router