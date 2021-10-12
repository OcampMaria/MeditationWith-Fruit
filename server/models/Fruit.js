"use strict";

// load the things we need
var mongoose = require("mongoose");

// define the schema for our user model
var fruitSchema = mongoose.Schema({
  fruit_name: {
    type: String,
    max: 100,
  },
  date: {
    type: String,
  },


});

// create the model for users and expose it to our app
module.exports = mongoose.model("Fruit", fruitSchema);
