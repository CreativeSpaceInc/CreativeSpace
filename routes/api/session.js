//routes/api/creations.js
const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

// Matches with "/api/session"
router.route("/")
  .get(sessionController.getSessionId);

module.exports = router;
