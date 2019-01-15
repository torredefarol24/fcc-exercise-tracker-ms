const addNewUser = require('./addUser')
const addExerciseToUser = require('./addExerciseToUser')
const getUserlog = require("./getUserLog")

const exerciseController = {
	addUser : addNewUser,
	addExercise : addExerciseToUser,
	getLog : getUserlog
}

module.exports = exerciseController