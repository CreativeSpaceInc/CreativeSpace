const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  displayname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
