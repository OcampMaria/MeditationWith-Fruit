module.exports = function(app){
		// Our model controllers (rather than routes)
		const users = require('./routes/users');
		

		const authCheckMiddleware = require('./config/middleware/authCheck');
		

		app.use('/apis/users', users);
	
		//other routes..
}