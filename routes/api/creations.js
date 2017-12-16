//routes/api/creations.js
const router = require("express").Router();
const creationsController = require("../../controllers/creationsController");

// Matches with "/api/creations"
router.route("/")
  .get(creationsController.findAll)
  .post(creationsController.create);

// Matches with "/api/creations/:id"
router.route("/:id")
  .get(creationsController.findById)
  .put(creationsController.update)
  .delete(creationsController.remove);

module.exports = router;
