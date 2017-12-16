const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  username: String,
  displayname: String,
  password: String,
  featured: {
    type: Schema.Types.ObjectId,
    ref: "Creation"
  },
  date: {
    type: Date, default: Date.now
  }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;

// const artistSchema = new Schema({
//   username: { type: String, required: true },
//   displayname: { type: String, required: true },
//   password: String,
//   date: { type: Date, default: Date.now }
// });
