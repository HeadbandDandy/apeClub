const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }
<<<<<<< HEAD
  type Workout {
    _id: ID
    name: String
    userId: String
    exercises: []
  }
=======

  type Workout {
    _id: ID
    name: String
    userId: Int
    exercises: [Int]
  }

>>>>>>> develop
  type Auth {
    token: ID!
    user: User
  }
<<<<<<< HEAD
=======

>>>>>>> develop
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
`;
<<<<<<< HEAD
=======

>>>>>>> develop
module.exports = typeDefs;