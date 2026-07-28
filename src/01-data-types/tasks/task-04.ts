/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBNNum: String
    bookTitle: String
    author: String
    totalPages: number
}

const book:Book = {
    ISBNNum: `978-602-8519-93-9`,
    bookTitle: `Coconut Is Yummy`,
    author: `Okka Adelard`,
    totalPages: 45
}

console.log(`ISBN Number: ${book.ISBNNum}`)
console.log(`Book Title: ${book.bookTitle}`)
console.log(`Author: ${book.author}`)
console.log(`Total Pages: ${book.totalPages}`)