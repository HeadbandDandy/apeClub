const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
    workoutCount: Int
  }
  type Workout {
    _id: ID
    user_id: String
    exercise_id: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    workouts: [Workout]
    workoutsByUserExercise(user_id: String, exercise_id: String): Workout 
    workout(_id: ID!): Workout  
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(user_id: String!, exercise_id: String!): Workout
    deleteWorkout(_id: ID!): Workout
  }
`;
module.exports = typeDefs;