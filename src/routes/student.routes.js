const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const ctrl = require("../controllers/student.controller");

router.post("/", auth, ctrl.create);
router.get("/", auth, ctrl.list);

module.exports = router;
