const Router = require("express");
const router = new Router();
const BascketController = require("../controllers/bascketController");

router.post("/", BascketController.add);
router.get("/", BascketController.getAll);
router.delete("/:id", BascketController.delete);

module.exports = router;
