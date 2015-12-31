var express = require('./node_modules/express');
var url = require('url');
var app = express();
var jobSeekersFile = require('./jobSeekersManager');
var jobSeekersManager = jobSeekersFile.getJobSeekersManager();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.get('/',function (req,res){
	res.send("Welcome");
});

app.get('/InsertJobSeeker', function(req, res) {
	var firstName = req.query.person_name;
    var familyName = req.query.family_name;
    var locations = req.query.locations;
    var sector = req.query.sector;
    var experience = req.query.experience;
    console.log("experience: " + experience);
	jobSeekersManager.insertJobSeeker(firstName,familyName,sector,locations,experience, function(result) {
		app.set('json space', 3);
		res.json(result);
		}
	);
});

var port =process.env.PORT || 8000;
app.use('/',express.static('./public')).listen(port);
console.log("listening on port " + port +"\n");

