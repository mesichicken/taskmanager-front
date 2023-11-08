import { gql } from '@apollo/client';

export const SIGN_IN = gql`
mutation signIn($signInInput: SignInInput!) {
  signIn(signInInput: $signInInput) {
    accessToken
  }
}
`
export const SIGN_UP = gql`
mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    name
    email
  }
}
`