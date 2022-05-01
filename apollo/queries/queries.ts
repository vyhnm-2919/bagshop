import gql from 'graphql-tag'

export const getAllTodo = gql`
  query getAllTodoQuery {
    todos {
      id
      title
      completed
    }
  }
`



export const getTodoById = gql`
  query getTodoByIdQuery($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
`
export default { getTodoById, getAllTodo }
