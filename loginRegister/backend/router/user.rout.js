const router = require('express').Router();
const {demo} = require('../controller/user.controller')

router.route('/demo').get(demo)

module.exports = router