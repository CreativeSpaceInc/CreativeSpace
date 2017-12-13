const express = require("express");
// const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creative-space",
  {
    useMongoClient: true
  }
);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
