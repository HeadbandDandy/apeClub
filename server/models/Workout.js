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
<<<<<<< HEAD
        exercises:[]
=======
        exercises: {
            type: Array,
            required: true,
            unique: false
        }
>>>>>>> develop
    }

)

const Workout = model('Workout', workoutSchema);

module.exports = Workout;