var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends)
	})

	app.post("/api/friends", function(req, res){
		//An array that will tally the differences between
		//the user submission and the character
		var differenceArray = [];

		//This is the index of the character that is closest to you
		var indexMatch = 0;

		var runningSum;

		for (var i = 0; i < friends.length; i++){
			runningSum = 0;
			for (var j = 0; j < req.body.scores.length; j++){
				runningSum += Math.abs(req.body.scores[j] - friends[i].scores[j]);
			}
			differenceArray.push(runningSum);
		}

		var startingLowestDifference = differenceArray[0]
		for(var i = 0; i < differenceArray.length; i++){
			// console.log("Difference at " + i + " is " + differenceArray[i])
			if (differenceArray[i] < startingLowestDifference)
				indexMatch = i;
		}

		res.json(friends[indexMatch])
	})
}