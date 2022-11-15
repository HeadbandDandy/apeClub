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
      return workout.find()
        .select('-__v')
    },
    workoutsByUser: async (parent, { user_id }) => {
      const params = user_id ? { user_id } : {}
      return workout.find(params)
        .select('-__v')
    },
    workout: async (parent, { _id }) => {
      return workout.findOne()
      .select('-__v')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addWorkout: async (parent, args, context) => {
      if (context.user) {
        const workout = await workout.create({ ...args, user_id: context.user._id });
        await User.findByIdAnUpdate(
          { _id: context.user._id },
          { $push: { workouts: workout._id } },
          { new: true }
        )
        return workout
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
}

module.exports = resolvers