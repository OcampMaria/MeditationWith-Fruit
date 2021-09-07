"use strict";

// app/models/user.js
// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

// define the schema for our user model
var fruitSchema = mongoose.Schema({
  fruitName: {
    type: String,
    max: 100,
  },
  email: {
    type: String,
    min: [3, "Please enter an email in the correct format"],
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    min: [8, "Your password must be at least 8 characters large"],
    required: [true, "Please enter a password."],
  },
  // fruit: {
  //     type: String,

  // }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("Fruit", fruitSchema);
