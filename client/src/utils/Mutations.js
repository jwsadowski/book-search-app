import { gql } from "@apollo/client";

export const LOGIN_USER = `gql
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
export const ADD_USER = `gql
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
                password
                savedBooks
            }
        }
    }
`
export const SAVE_BOOK = `gql
    mutation SAVE_BOOK(
        $authors: [String]
        $description: String!, 
        $bookId: String!, 
        $image: String!, 
        $link: String!, 
        $title: String!) {
        saveBook(
            authors: $authors
            description: description
            bookId: $bookId
            image: $image
            link: $link
            title: $title
        ) {
            authors
            description
            bookId
            image
            link
            title
        }
    }
 `
 export const REMOVE_BOOK = `gql
    mutation REMOVE_BOOK(
        $authors: [String]
        $description: String!, 
        $bookId: String!, 
        $image: String!, 
        $link: String!, 
        $title: String!) {
    removeBook(
        authors: $authors
        description: description
        bookId: $bookId
        image: $image
        link: $link
        title: $title
    ) {
        authors
        description
        bookId
        image
        link
        title
    }
}
`