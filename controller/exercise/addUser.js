var User = require("../../models/user")

const addNewUser = function(request, response){
	if (!request.body.username){
		return response.status(404).json({ msg : "Please provide a username"})
	}

	var new_user = new User()
	new_user.username = request.body.username.trim()
	new_user.save().then( created_user => {
		var result = {
			username : created_user.username,
			id : created_user.id
		}
		return response.status(201).json(result)
	})
	.catch(error => {
		return response.status(500).json(error)
	})
}

module.exports = addNewUser