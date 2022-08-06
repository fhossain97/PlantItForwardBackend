const router = require("express").Router();
const itemCtrl = require("../controllers/itemControllers");
//const upload = require("../db/multer");
const imageExport = require('../db/cloudinary')

router.get("/new", imageExport.single("images"), itemCtrl.newRoute);
router.get("/", itemCtrl.index);
router.get("/:id", itemCtrl.showOneItem);
router.get("/:id/edit", imageExport.single("images"), itemCtrl.editRoute);
router.post("/", imageExport.single("images"), itemCtrl.createNewItem);
router.put("/:id", imageExport.single("images"), itemCtrl.updateItem);
router.delete("/:id", itemCtrl.deleteItem);



module.exports = router;
