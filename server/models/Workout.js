const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const workoutSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
            unique: false
        },
        exercise_id: {
            type: String,
            required: true,
            unique: false
        }
    }

)

const Workout = model('Workout', workoutSchema);

module.exports = Workout;