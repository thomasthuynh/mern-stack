const mongoose = require("mongoose"); // Mongoose is what allows Schemas to be created. MongoDB alone is Schemaless

const Schema = mongoose.Schema;

// The first argument is how the Schema should look.
// The second argument adds a stamp indicating when the property was created or last updated.
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// A model applies the Schema to a model. The model is then used to interact with a collection of that name.
// Note: The first argument will be pluralized (eg. Workouts)
module.exports = mongoose.model("Workout", workoutSchema)