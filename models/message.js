var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// message model schema
// ref type points to model 'User' in this case
var schema   = new Schema({
	content: {type: String, required: true},
	user: {type: Schema.Types.ObjectID, ref: 'User'}
});


// 'Message' = name of model
module.exports = mongoose.model('Message', schema);