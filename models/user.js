const mongoose = require('mongoose')

const exerciseSchemaOpts = {
	description : {
		type : String,
		required : true
	},
	duration : {
		type : Number,
		required : true
	},
	date : {
		type : Date
	}
}

const ExerciseSchema = new mongoose.Schema(exerciseSchemaOpts)


const userSchemaOpts = {
	username : {
		type : String,
		required : true
	},
	exercises : [ExerciseSchema]
}

const userCollectionOpts = {
	collection : "user"
}

const userSchema = new mongoose.Schema(userSchemaOpts, userCollectionOpts)

const user = mongoose.model("User", userSchema)
module.exports = user