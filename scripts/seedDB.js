const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creative-space",
  {
    useMongoClient: true
  }
);

const artistSeed = [
  {
    username: "The Dead Zone",
    displayname: "Stephen King",
    password: "password",
    date: new Date(Date.now())
  },
  {
    username: "Hoosha",
    displayname: "Hasha",
    password: "password",
    date: new Date(Date.now())
  },
  {
    username: "Lalalilu",
    displayname: "Loochra",
    password: "password",
    date: new Date(Date.now())
  }
];

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
