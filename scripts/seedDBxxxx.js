const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativeSpace",
  {
    useMongoClient: true
  }
);

const artistSeed = [
  {
    username: "artie",
    displayname: "artie the artist",
    password: "artierocks",
    date: new Date(Date.now())
  },
  {
    username: "lala",
    displayname: "lala the artist",
    password: "lalalilu",
    date: new Date(Date.now())
  },
  {
    username: "ned",
    displayname: "ned the amazing",
    password: "neddiboy",
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
