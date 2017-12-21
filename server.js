const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
// const expressValidator = require("express-validator");
// const flash = require("connect-flash");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Added with passport
app.use(morgan("dev"));
app.use(cookieParser());
app.use(session({
  secret: "walstrom",
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativeSpace",
  {
    useMongoClient: true
  }
);

// add code for Express Validator here
// github.com/ctavan/express-validator; middleware options
// app.use(expressValidator({...}))

// Connect Flash
// app.use(flash());
// app.use(function (req, res, next){
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flas("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
