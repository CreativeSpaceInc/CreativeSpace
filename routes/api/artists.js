//routes/api/artists.js
const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

const passport = require("passport");

// Matches with "/api/artists"
router.route("/")
  .get(artistsController.findAll)
  .post(artistsController.create);

  // router.route("/")
  //   .get(artistsController.findAll)
  //   .post(passport.authenticate("local-signup", {
  //     successRedirect: "/",
  //     failureRedirect: "/",
  //     failureFlash: true
  //   }));



// Matches with "/api/artists/:id"
router.route("/:id")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;
