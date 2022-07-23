const router = require("express").Router();
const itemCtrl = require("../controllers/itemControllers");
const upload = require("../db/multer");

router.get("/new", upload.single("Image"), itemCtrl.newRoute);
router.get("/", itemCtrl.index);
router.get("/:id", itemCtrl.showOneItem);
router.get("/:id/edit", upload.single("Image"), itemCtrl.editRoute);
router.post("/", upload.single("Image"), itemCtrl.createNewItem);
router.put("/:id", upload.single("Image"), itemCtrl.updateItem);
router.delete("/:id", itemCtrl.deleteItem);

module.exports = router;
