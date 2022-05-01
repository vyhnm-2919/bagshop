import gql from 'graphql-tag'

export const getAllCategory = gql`
  query getAllCategoryQuery {
    categories {
      id
      categoryName
      products {
        id
        name
      }
      pro
    }
  }
`

export const getCategoryById = gql`
  query getCategoryByIdQuery($id: ID!) {
    category {
      id
      categoryName
      products {
        id
        name
      }
      pro
    }
  }
`

export default { getAllCategory }
