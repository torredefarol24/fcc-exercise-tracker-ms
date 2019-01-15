function setupAppPackages(){
	var express = require('express')
	var app = express()
	var bodyParser = require('body-parser')
	var exerciseRouter = require('../routes/exercise')
	var mongoose = require('mongoose')
	var mongoConnectionURL = require('../keys/mongo_conn')

	mongoose.connect(mongoConnectionURL, {useNewUrlParser : true}).then(() => console.log("Mongo Connection OK")).catch(error => console.error("Mongo Error " + error))

	app.use(express.static("assets"))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended : true}))

	app.use("/api/exercise", exerciseRouter)
	return app
}

module.exports = setupAppPackages
