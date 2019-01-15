var User = require('../../models/user')

const getUserLog = (request, response) => {
	if (!request.params.id) {
		return response.status(404).json({ msg : "Please provide Username"})
	}

	User.find({ _id : request.params.id })
	.select("-__v")
	.then( users => {
		if (users.length > 0){
			return response.status(200).json(users[0])
		} else {
			return response.status(404).json({ msg : "User not Found"})
		}
	})
	.catch(error => {
		return response.status(500).json(error)
	})
}

module.exports = getUserLog