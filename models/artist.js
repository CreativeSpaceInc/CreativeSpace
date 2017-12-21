// models/artist.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

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

// generating a hash

artistSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
artistSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;

// const artistSchema = new Schema({
//   username: { type: String, required: true },
//   displayname: { type: String, required: true },
//   password: String,
//   date: { type: Date, default: Date.now }
// });
