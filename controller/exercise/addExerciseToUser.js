var User = require('../../models/user')

const addExerciseToUser = (request, response) => {
	if (! request.body.user_id || !request.body.description || !request.body.duration){
		return response.status(404).json({ msg : "Values Missing"})
	}

	User.find({ _id : request.body.user_id})
	.then( users => {
		if (users.length > 0){
			var user = users[0]
			var exercise = {
				description : request.body.description,
				duration : request.body.duration
			}

			if (request.body.date) exercise.date = request.body.date
			user.exercises.push(exercise)

			user.save().then(user => {
				var resultUser = {
					id : user._id,
					username : user.username,
					description : request.body.description,
					duration : request.body.duration,
					date : request.body.date
				}

				return response.status(201).json(resultUser)
			})
			.catch(error => {
				return response.status(500).json(error)
			})
		} else {
			return response.status(404).json({ msg : "User Not Found"})
		}
	})
	.catch(error => {
		return response.status(500).json(error)
	})
}

module.exports = addExerciseToUser