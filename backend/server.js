require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json()); // Looks to see if requests sent to the server have a body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/workouts", workoutRoutes);

// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // LISTEN FOR REQEUSTS
    app.listen(process.env.PORT, () => {
      console.log("Connected to database. Listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
