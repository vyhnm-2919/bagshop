import gql from 'graphql-tag'

export const getAllSize = gql`
  query getAllSizeQuery {
    sizes {
      id
      text
      value
      products {
        id
        name
        color {
          id
        }
      }
    }
  }
`
export default { getAllSize }
