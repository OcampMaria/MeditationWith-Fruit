module.exports = function (app) {
  // Our model controllers (rather than routes)
  const users = require("./routes/users");
  const fruits = require("./routes/fruits")
  const sessions = require("./routes/sessions")
  const authCheckMiddleware = require("./config/middleware/authCheck");

  // app.use('/apis/sessions', authCheckMiddleware);

  app.use("/apis/users", users);
  app.use("/apis/Fruits", fruits);
  // app.use("/apis/sessions", sessions);
  




};
