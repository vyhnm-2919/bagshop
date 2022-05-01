import gql from 'graphql-tag'

export const getAllPriceRange = gql`
  query getAllPriceRangeQuery {
    price_ranges {
      id
      text
      price_gte
      price_lte
      unit
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
export default { getAllPriceRange }
