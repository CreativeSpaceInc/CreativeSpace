//routes/api/index.js

const router = require("express").Router();
const allRoutes = require("./allRoutes");

// artist routes
router.use("/allRoutes", allRoutes);

module.exports = router;
