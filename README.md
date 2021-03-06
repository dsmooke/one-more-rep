# One More Rep

## Description

This is the seventeenth assignment of the UConn Coding Boot Camp curriculum.

"One-More-Rep" is a fitness workout tracker application that lets the user add an exercise and log the weight, sets, reps, and the duration of each exercise. The user can view their workout history on the `stats` page which displays the total weight lifted as well as the total duration of each workout from their past seven workouts.

View the deployed application [here](link)

!(fitness app demo)[img]

## Technologies Used

- Node
- Express
- MongoDB
- Mongoose

## Goals

1. The app will let users add a new exercise type: cardio or resistance.
2. When a user selects `cardio`, the user will be able to enter the exercise name, the distance, and the duration of the exercise.
3. When a user selects `resistance`, the user will be able to enter the exercise name, weight, sets, reps, and duration.
4. View the combined weight of multiple exercises and the total duration of each workout from the past seven workouts on the `stats` page.
5. Set up MongoDB Atlas.
6. Deploy app with Heroku and MongoDB Atlas.

## User Story

```
As a user, I want to be able to view create and track daily workouts.
I want to be able to log multiple exercises in a workout on a given day.
I should also be able to track the name, type, weight, sets, reps, and duration of each exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
```

## Acceptance Criteria

```
GIVEN an application that lets users input an exercise's weight, sets, reps, and duration and view the total weight lifted and the total duration of their past seven workouts.
WHEN the user adds a new exercise
THEN the app asks what type of exercise the user is logging: resistance or cardio
WHEN the exercise is a cardio exercise
THEN the user should be able to track the distance traveled
WHEN the exercise is a resistance exercise
THEN the user should be able to track the weight lifted, the number of reps, and the number of sets
WHEN the user clicks on 'view stats'
THEN the user should be able to view the combined weight of multiple exercises and the total duration of each workout from the past seven workouts.

```

### Definitions

**MongoDB**
:

**Mongoose**
:

**models**
:

**seeders**
:

## Installation

#### App Setup

1. Create a GitHub repo and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install MongoDB npm package: `npm install mongo`.

6. Install Mongoose npm package: `npm install mongoose`.

7. Install Morgan npm package: `npm install morgan`.

8. Require the following npm packages inside of the server.js file:

   - express
   - morgan
   - mongoose

9. Create a `models` folder with `Workout.js` file.

### Developer

For this application I referred to Unit 17, Exercises 14, 15, and 26. My focus was to keep it as simple as possible.

## Credits

[Field Paths - Expressions](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)

[$addFields - Definition & Behavior](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/)

[System Variables - Fields](https://docs.mongodb.com/manual/reference/aggregation-variables/#agg-system-variables)

## License

[MIT](MITLicense.txt)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
