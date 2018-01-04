var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  session: String
});

// This creates our model from the above schema, using mongoose's model method
var Session = mongoose.model("Session", SessionSchema);

// Export the session model
module.exports = Session;
