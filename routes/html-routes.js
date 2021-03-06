const router = require("express").Router();
const path = require("path");

// display main view on "fitness tracker"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// display exercises on "new workout"
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

// display stats page "dashboard"
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

module.exports = router;
