const db = require("../models");
const router = require("express").Router();

// Get Workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}) // @audit-issue "find undefined"
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

// Create Workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log("Adding workout...");
  // console.log(body);
  db.Workout.create(body) // @audit-issue can't read 'create of undefined'
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add Exercise
// $inc increase/decrease the totalDuration field by the input duration, and
// $push returns an array of all values that result from applying an expression to each document in a group of documents that share the same group by key. $push is only available in the $group stage

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    // @audit-issue cannpt read property 'findOneAndUpdate' of undefined
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get Workouts in Range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("All of your Workouts");
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router; // @audit
