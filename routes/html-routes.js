const router = require("express").Router();
const path = require("path"); // @audit-issue causing routes/exercise.html

// display main view on "fitness tracker"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html")); // @audit shortened path
});

// display exercises on "new workout"
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html")); // @audit shortened path
});

// display stats page "dashboard"
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html")); // @audit shortened path
});

module.exports = router;
