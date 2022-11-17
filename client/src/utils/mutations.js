import {gql} from '@apollo/client';
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`
;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `
;
export const ADD_WORKOUT = gql`
mutation addWorkout($user_id: String!, $exercise_id: String!) {
  addWorkout(user_id: $user_id, exercise_id: $exercise_id) {
    _id
    user_id
    exercise_id
  }
}
`
;
export const DELETE_WORKOUT = gql`
mutation deleteWorkout($user_id: String!, $exercise_id: String!) {
  deleteWorkout(user_id: $user_id, exercise_id: $exercise_id) {
    _id
    user_id
    exercise_id
  }
}
`
