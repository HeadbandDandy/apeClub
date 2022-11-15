import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      workouts {
        _id
        name
        exercises
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      workouts {
        _id
        name
        exercises
      }
    }
  }
`;

export const QUERY_WORKOUTS_BY_USER = gql`
  query workout($user_id: String!) {
    workout(user_id: $user_id) {
        _id
        name
        exercises
    }
  }
`