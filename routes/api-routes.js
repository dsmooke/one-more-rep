const db = require("../models");
const router = require("express").Router();

// Get Workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$workout.duration" },
      },
    },
  ])
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
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add Exercise/Update Workout

// $push returns an array of all values that result from applying an expression to each document in a group of documents that share the same group by key. $push is only available in the $group stage

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    params.id,
    {
      $push: { exercises: body },
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
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$workout.duration" },
      },
    },
  ])
    .sort({ day: "desc" })
    .limit(7)
    .sort({ day: "asc" })
    .then((dbWorkout) => {
      // console.log("All of your Workouts");
      // console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
