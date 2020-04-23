import gql from 'graphql-tag'

export const GET_ME = gql`
  {
    me {
      username
      email
      displayName
      collections {
        name
        works {
          title
        }
      }
    }
  }
`
