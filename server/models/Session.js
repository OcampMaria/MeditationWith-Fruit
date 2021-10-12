// 'use strict';

// // load the things we need
// var mongoose = require('mongoose');

// // define the schema for our user model
// var sessionSchema = mongoose.Schema({

//     location: {
//         type: String,
//         max: 100,
//         required: [true, 'Please enter the location where session was performed (e.g. living room).']
//     },
//     date: {
//         type: String,
//         required: [true, 'Please enter the date session wwas performed']
//     },
   
//     UserId: {
//         type: String
//     }
    
// });

// // create the model for users and expose it to our app
// module.exports = mongoose.model('Session', sessionSchema);