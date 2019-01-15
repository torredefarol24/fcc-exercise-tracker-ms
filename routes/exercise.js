var router = require('express').Router()
var exerciseController = require("../controller/exercise/")

router.post("/new-user", exerciseController.addUser)
router.post("/add", exerciseController.addExercise)
router.get("/log/:id", exerciseController.getLog)

module.exports = router