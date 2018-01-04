var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CreationSchema = new Schema({
  title: String,
  url: String,
  description: String,
  medium: String,
  likes: Number,
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  date: {
    type: Date, default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Creation = mongoose.model("Creation", CreationSchema);

// Export the creation model
module.exports = Creation;
