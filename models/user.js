var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// user model schema
// to validate the unique field in 'email' install package:
//    npm install --save mongoose-unique-validator
// ref type points to model 'Message' in this case
var schema   = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// add the mongoose-unique-validator to mongoose as a plugin
schema.plugin(mongooseUniqueValidator);


// 'Message' = name of model
module.exports = mongoose.model('User', schema);