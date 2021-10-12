// import Session from "../../app/components/Session/Session";
// var Session  = require('../models/Session');

// exports.index = function(req, res) {
// 	Session
//   .find()
//   .where('UserId').equals(req.user.id)
//   .then(function(dbSession) {
//     res.render(<Session/>);
//   });
// };

// exports.createSession = function(req, res) {

// 	// Add id from User onto req.body
// 	req.body.UserId = req.user.id;

//   var newSession = new Session(req.body);

//   newSession.save().then(function(dbPost) {
//     res.json(dbPost);
//   });
// };
