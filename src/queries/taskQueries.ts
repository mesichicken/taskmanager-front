import { gql } from '@apollo/client'

export const GET_TASKS = gql`
query getTasks($userId: Int!) {
  getTasks(userId: $userId) {
    id
    name
    dueDate
    status
    description
  }
}
`