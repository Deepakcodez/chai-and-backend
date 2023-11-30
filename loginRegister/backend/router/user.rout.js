const router = require('express').Router();
const {demo,register} = require('../controller/user.controller')

router.route('/demo').get(demo)
router.route('/register').post(register)

module.exports = router