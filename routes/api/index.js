//routes/api/index.js

const router = require("express").Router();
const artistRoutes = require("./artists");
const creationRoutes = require("./creations");

// Artist routes
router.use("/artists", artistRoutes);

// Creation routes
router.use("/creations", creationRoutes);

module.exports = router;
