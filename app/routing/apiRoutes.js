var friends = require("../data/friends.js");

module.exports = function(app) {

	console.log(friends)

	app.get("/api/friends", function(req, res){
		res.json(friends)
	})
}