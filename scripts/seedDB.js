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
    username: "Hank",
    displayname: "Hank the Painter",
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

const creationSeed = [
  {
    title: "Preludes",
    url: "www.google.com",
    medium: "music",
    likes: 5,
    artist: ObjectId("5a34a9d1afaabc1820db0b32"),
    date: new Date(Date.now())
  },
  {
    title: "Loopholes",
    url: "www.google.com",
    medium: "film",
    likes: 2,
    artist: ObjectId("5a34a9d1afaabc1820db0b33"),
    date: new Date(Date.now())
  },{
    title: "Flowerpots",
    url: "www.google.com",
    medium: "painting",
    likes: 7,
    artist: ObjectId("5a34a9d1afaabc1820db0b34"),
    date: new Date(Date.now())
  },
];

// db.Artist.collection.insertMany(artistSeed)
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  // db.Creation.collection.insertMany(creationSeed)
  //   .then(data => {
  //     console.log(data.insertedIds.length + " records inserted!");
  //     process.exit(0);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  //   });

// db.Artist
//   .remove({})
//   .then(() => db.Artist.collection.insertMany(artistSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

  db.Creation
    .remove({})
    .then(() => db.Creation.collection.insertMany(creationSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
