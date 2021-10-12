// import Session from "../../app/components/Session/Session";
var Fruit  = require('../models/Fruit');

exports.index = function(req, res) {
	Fruit
  .find()
  .where('UserId').equals(req.user.id)
  .then(function(dbFruit) {
    res.render(console.log("fruits"));
  });
};

exports.createFruit = function(req, res) {

	// Add id from User onto req.body
	req.body.UserId = req.user.id;

  var newFruit = new Fruit(req.body);

  newFruit.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
