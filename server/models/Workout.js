const { Schema, model, SchemaTypes } = require('mongoose');
const bcrypt = require('bcrypt');
const { INTEGER } = require('sequelize/types');

const workoutSchema = new Schema(
    {
        name: {
            type: String,
            required: true, 
            unique: false
        },
        userId: {
            type: INTEGER,
            required: true,
            unique: false
        },
        exercises:[]
    }

)

const Workout = model('Workout', workoutSchema);

module.exports = Workout;