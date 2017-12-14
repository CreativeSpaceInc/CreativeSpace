//routes/api/index.js

const router = require("express").Router();
const artistRoutes = require("./artists");

// Artist routes
router.use("/artists", artistRoutes);

module.exports = router;
