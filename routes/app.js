var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
	res.render('index');
});



/*


// this commented block was for demonstration only

var User    = require('../models/user');

// /message/:msg used to accept values in the url; :msg = variable
router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});  // params are parameters sent in the url
});


router.get('/', function (req, res, next) {
	
	User.findOne({}, function(err, doc) {
		
		if(err) {
			return res.send('Error!');
		}

		res.render('node_for_testing_only', {email: doc.email});
	});
    
});




router.post('/', function(req, res, next) {
	var email = req.body.email;
	var user  = new User({
		firstName: 'Scott',
		lastName: 'Cukras',
		password: 'super-secret',
		email: email
	});

	// save entry to mongodb database
	user.save();

	// redirect the post request back to /message view
	// always let get requests render the views
	res.redirect('/');
});




*/

module.exports = router;
