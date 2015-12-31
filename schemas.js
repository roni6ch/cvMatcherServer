var mongoose = require('mongoose');
var schema = mongoose.Schema;


var job_seeker_schema = new schema({
	//person_name:  { type: String, index: 1, unique: true} ,
	person_name: String,
    family_name: String,
    locations: [String],
    experience:[{
    	years:Number,
		experience:String, 
		job_type:String
    }],
    sector: String
   /* 
    academy:[{
    	degree:String,
		type:String, 
		academy_name:String
    }],
	candidate:String,
	scope_of_position:String,
	sub_sector:[String],
	*/
}, {collection:'job_seeker'});

exports.job_seeker_schema = job_seeker_schema;

