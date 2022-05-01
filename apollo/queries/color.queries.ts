import gql from 'graphql-tag'

export const getAllColor = gql`
  query getAllColorQuery {
    colors {
      id
      name
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
export default { getAllColor }
