const router = require("express").Router();
const itemCtrl = require("../controllers/itemControllers");
const upload = require("../db/multer");

// router.get("/new", upload.single("images"), itemCtrl.newRoute);
// router.get("/", itemCtrl.index);
// router.get("/:id", itemCtrl.showOneItem);
// router.get("/:id/edit", upload.single("images"), itemCtrl.editRoute);
// router.post("/", upload.single("images"), itemCtrl.createNewItem);
// router.put("/:id", upload.single("images"), itemCtrl.updateItem);
// router.delete("/:id", itemCtrl.deleteItem);


router.get("/new", itemCtrl.newRoute);
router.get("/", itemCtrl.index);
router.get("/:id", itemCtrl.showOneItem);
router.get("/:id/edit", itemCtrl.editRoute);
router.post("/", itemCtrl.createNewItem);
router.put("/:id", itemCtrl.updateItem);
router.delete("/:id", itemCtrl.deleteItem);

module.exports = router;
