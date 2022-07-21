//ok
const router = require('express').Router()
const itemCtrl = require('../controllers/itemControllers')

router.get('/', itemCtrl.index)


module.exports = router 