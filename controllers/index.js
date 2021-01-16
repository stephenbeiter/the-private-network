const router = require("express").Router();
const apiRoutes = require("./api");
const landingRoutes = require("./landing-routes");
const feedRoutes = require("./feed-routes");

router.use("/api", apiRoutes);

// user-facing routes
router.use("/", landingRoutes);
router.use("/feed", feedRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
