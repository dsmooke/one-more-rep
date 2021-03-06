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

// Get Workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      // console.log("Displaying all workouts.");
      // console.log(dbWorkout);
      dbWorkout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });

        workout.totalDuration = total;
      });

      res.json(dbWorkout);
    })

    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
