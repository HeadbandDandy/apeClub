const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }
  type Workout {
    _id: ID
    name: String
    userId: String
    exercises: []
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
`;
module.exports = typeDefs;