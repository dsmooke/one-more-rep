const db = require("../models/Workout.js");
const router = require("express").Router();

// Create Workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log("Adding workout...");
  // console.log(body);
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
