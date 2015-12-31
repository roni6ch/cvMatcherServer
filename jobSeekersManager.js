var dao = require("./dao");
var jobSeekersManager;
/*  Constructor for the jobSeekersManager */
function jobSeekersManager() {
	this.jobSeekers = [];
	console.log("Created instance of job seekers manager\n");
};

/* jobSeekersManager prototypes*/
jobSeekersManager.prototype.insertJobSeeker = function(firstName,familyName,callback) {
	dao.insertUserToDB(firstName,familyName, function(result) {
		console.log("result: " + result);
		callback(result);
	});
};

exports.getJobSeekersManager = function() {
	jobSeekersManager = new jobSeekersManager();
	return jobSeekersManager;
};