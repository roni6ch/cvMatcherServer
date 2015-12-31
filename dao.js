var mongoose = require('mongoose');

exports.insertUserToDB = function(person_name,family_name,sector,locations,experience,callback) {
  mongoose.connect('mongodb://dbUser:dbPass@ds037145.mongolab.com:37145/dbcvmatcher');
  var schema_job_seeker = require('./schemas').job_seeker_schema;
  var job_seeker = mongoose.model('job_seeker',schema_job_seeker);
  mongoose.connection.once('open', function() {

    var singleUser = new job_seeker({
      person_name : null,
      family_name : null,
      sector : null,
      locations : []
      //experience : null
    });
    console.log("locations: " + locations);
    singleUser["person_name"] = person_name;
    singleUser["family_name"] = family_name;
    singleUser["sector"] = sector;
   // singleUser["experience"] = experience;
    singleUser.locations = locations;

    job_seeker.findOne({
      person_name : singleUser["person_name"]
    }, function(err, result) {
      if (err) {
        console.log("error findOne personName from DB");
        mongoose.disconnect();
         callback(false);
      }
      if (result) {
        console.log("found person with the same name!!!");
        mongoose.disconnect();
        callback(false);
      } else {
          console.log("didnt found any person with that name");
          /*save the User in db*/
          singleUser.save(function(err, singleUser) {
          console.log("person saved to DB: " + singleUser);
          mongoose.disconnect();
          callback(true);
        });
      }
    });
  });
}
