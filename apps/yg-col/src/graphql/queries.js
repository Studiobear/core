import gql from 'graphql-tag'

export const GET_ME = gql`
  {
    me {
      username
      email
      display
      collections {
        name
        works {
          title
        }
      }
    }
  }
`
