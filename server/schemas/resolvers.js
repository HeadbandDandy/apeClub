const { AuthenticationError } = require('apollo-server-express');
const { User, Workout } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('workouts')
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('workouts')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('workouts')
        },
        workouts: async () => {
            return Workout.find()
            .select('-__v')
        },
        workoutsByUser: async (parent, { user_id }) => {
            const params = user_id ? { user_id } : {};
            return Workout.find(params)
            .select('-__v')
        },
        workout: async (parent, { _id }) => {
            return Workout.findOne({ _id })
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        addWorkout: async (parent, args, context) => {
            //if (context.user) {
              const workout = await Workout.create({ ...args, user_id: '636edc0da5b8874c053947ea'/*context.user._id*/ });
              await User.findByIdAndUpdate(
                { _id: workout.user_id },
                { $push: { workouts: workout._id } },
                { new: true }
              );
      
              return workout;
            //}
      
            throw new AuthenticationError('You need to be logged in!');
          },
    }
}

module.exports = resolvers