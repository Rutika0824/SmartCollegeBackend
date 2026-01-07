const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const ctrl = require("../controllers/course.controller");

router.post("/", auth, role("Admin"), ctrl.create);
router.get("/", auth, ctrl.list);

module.exports = router;