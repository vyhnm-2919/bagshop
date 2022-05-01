import gql from 'graphql-tag'

export const getAllProduct = gql`
  query getAllProductQuery {
    products {
      id
      name
      description
      color {
        id
        name
        products {
          name
        }
      }
      size {
        id
        text
        value
        products {
          name
        }
      }
      price_range {
        id
        text
        products {
          name
        }
      }
      category {
        id
        categoryName
        products {
          name
          category {
            id
          }
        }
      }
      price
      unit
      image
      ratings
      user {
        id
        avatar
        firstname
        lastname
      }
    }
  }
`

export const getProductById = `
query getProductByIdQuery($id: ID!) {
  product(id: $id) {
    id
    name
    description
    color {
      id
      name
      products {
        name
      }
    }
    size {
      id
      text
      value
      products {
        name
      }
    }
    price_range {
      id
      text
      products {
        name
      }
    }
    category {
      id
      categoryName
      products {
        name
        category {
          id
        }
      }
    }
    price
    unit
    image
    ratings
    user {
      id
      avatar
      firstname
      lastname
    }
  }
}
`
export default { getAllProduct, getProductById }
