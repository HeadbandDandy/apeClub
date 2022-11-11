const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');

const workoutSchema = new Schema(
    {
        name: {
            type: String,
            required: true, 
            unique: false
        },
        userId: {
            type: Number,
            required: true,
            unique: false
        },
        exercises: {
            type: Array,
            required: true,
            unique: false
        }
    }

)

const Workout = model('Workout', workoutSchema);

module.exports = Workout;