const router = require('express').Router()
const itemCtrl = require('../controllers/itemControllers')

router.get('/', itemCtrl.index)
router.get('/:id', itemCtrl.showOneItem)
router.post('/', itemCtrl.createNewItem)
router.put('/:id', itemCtrl.updateItem)
router.delete('/:id', itemCtrl.deleteItem)


module.exports = router 