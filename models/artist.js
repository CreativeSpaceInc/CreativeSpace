const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const artistSchema = mongoose.Schema({
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



artistSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

artistSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Artist", artistSchema);

// const artistSchema = new Schema({
//   username: { type: String, required: true },
//   displayname: { type: String, required: true },
//   password: String,
//   date: { type: Date, default: Date.now }
// });
