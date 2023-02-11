import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation LOGIN_USER(
        $email: String!, 
        $password: String!) {
        login(
            email: $email, 
            password: $password) {
            token
            user {
                username
                email
                password
                savedBooks
            }
        }
    }
`
export const ADD_USER = gql`
    mutation ADD_USER(
        $username: String!, 
        $email: String!, 
        $password: String!) {
        addUser(
            username: $username, 
            email: $email, 
            password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`
export const SAVE_BOOK = gql`
    mutation SAVE_BOOK(
       $input: saveBookInput) {
        saveBook(
           input: $input
        ) {
            _id
            username
            email
            bookCount
            savedBooks{
                author
                description
                bookId
                image
                link
                title
            }
        }
    }
 `
 export const REMOVE_BOOK = gql`
    mutation REMOVE_BOOK(
        $bookId: ID!) {
    removeBook(
        bookId: $bookId
    ) {
       _id
       username
       email
       bookCount
       savedBooks{
        author 
        description
        bookId
        image
        link
        title
       }
    }
}
`