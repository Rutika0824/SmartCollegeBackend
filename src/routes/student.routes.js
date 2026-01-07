// const router = require("express").Router();
// const auth = require("../middleware/auth.middleware");
// const ctrl = require("../controllers/student.controller");

// router.post("/", auth, ctrl.create);
// router.get("/", auth, ctrl.list);

// module.exports = router;






const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const ctrl = require("../controllers/student.controller");

router.post("/", auth, role("Admin"), ctrl.createStudent);
router.get("/", auth, ctrl.getStudents);
router.get("/:id", auth, ctrl.getStudentById);
router.put("/:id", auth, role("Admin"), ctrl.updateStudent);
router.delete("/:id", auth, role("Admin"), ctrl.deleteStudent);

module.exports = router;
