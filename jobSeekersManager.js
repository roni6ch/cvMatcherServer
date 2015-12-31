var dao = require("./dao");
var jobSeekersManager;
/*  Constructor for the jobSeekersManager */
function jobSeekersManager() {
	this.jobSeekers = [];
	console.log("Created instance of job seekers manager\n");
};

/* jobSeekersManager prototypes*/
jobSeekersManager.prototype.insertJobSeeker = function(firstName,familyName,sector,locations,experience,callback) {
	dao.insertUserToDB(firstName,familyName,sector,locations,experience, function(result) {
		callback(result);
	});
};

exports.getJobSeekersManager = function() {
	jobSeekersManager = new jobSeekersManager();
	return jobSeekersManager;
};