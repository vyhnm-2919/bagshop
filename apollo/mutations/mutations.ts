import gql from 'graphql-tag'

const addTodo = gql`
  mutation addSingleTodoMutation($title: String, $completed: Boolean) {
    createTodo(title: $title, completed: $completed) {
      id
      title
    }
  }
`

const addSingleBook = gql`
  mutation addSingleBookMutation(
    $name: String
    $genre: String
    $authorId: ID!
  ) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`

const addSingleAuthor = gql`
  mutation addSingleAuthorMutation($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`

const addContact = gql`
  mutation addContactMutation($name: String, $email: String, $message: String, $created: String) {
    createContact(name: $name, email: $email, message: $message, created: $created) {
      id
      name
      email
      message
      created
    }
  }
`

export { addSingleBook, addSingleAuthor, addTodo, addContact }
