const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const feedRoutes = require("./feed-routes");

router.use("/api", apiRoutes);

// user-facing routes
router.use("/", homeRoutes);
router.use("/feed", feedRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
