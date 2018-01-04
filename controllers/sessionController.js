// /controllers/artistsController.js

const db = require("../models");
// Defining methods for the artistsController
module.exports = {
  getSessionId: function(req, res) {
    db.Session
      .findOne(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
