//routes/api/index.js

const router = require("express").Router();
const artistRoutes = require("./artists");
const creationRoutes = require("./creations");
const sessionRoutes = require("./session");

// Artist routes
router.use("/artists", artistRoutes);

// Creation routes
router.use("/creations", creationRoutes);

// Session route
router.use("/session", sessionRoutes);

module.exports = router;
