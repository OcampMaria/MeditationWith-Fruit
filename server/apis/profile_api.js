// import Profile from "../../app/components/Profile";
// var Profile  = require('../models/Profile');

// exports.index = function(req, res) {
// 	Profile
//   .find()
//   .where('UserId').equals(req.user.id)
//   .then(function(dbProfile) {
//     res.render(<Profile/>);
//   });
// };

// exports.createProfile = function(req, res) {

// 	// Add id from User onto req.body
// 	req.body.UserId = req.user.id;

//   var newProfile = new Profile(req.body);

//   newProfile.save().then(function(dbPost) {
//     res.json(dbPost);
//   });
// };
