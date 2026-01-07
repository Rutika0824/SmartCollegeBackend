// const router = require("express").Router();
// const auth = require("../middleware/auth.middleware");
// const role = require("../middleware/role.middleware");
// const ctrl = require("../controllers/course.controller");

// router.post("/", auth, role("Admin"), ctrl.create);
// router.get("/", auth, ctrl.list);

// module.exports = router;




const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const ctrl = require("../controllers/course.controller");

router.post("/", auth, role("Admin"), ctrl.createCourse);
router.get("/", auth, ctrl.getCourses);
router.get("/:id", auth, ctrl.getCourseById);
router.put("/:id", auth, role("Admin"), ctrl.updateCourse);
router.delete("/:id", auth, role("Admin"), ctrl.deleteCourse);

module.exports = router;
