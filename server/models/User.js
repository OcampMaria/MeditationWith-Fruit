'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var sessionSchema= mongoose.Schema({
    location:{
        type:String,
        required:true,
        
    },

    sessionFruit:{
        type:String,
        required:true,
    }
},
{ 
    timestamps:true,
}
)

// define the schema for our user model
var userSchema = mongoose.Schema({

    username: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    email: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters large'],
        required: [true, 'Please enter a password.']
    },
    fruit: {
        type: String,
        required: false
    },
    sessions:[sessionSchema]
 

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);