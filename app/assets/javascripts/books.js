var books = angular.module('booksApp', ['ngResource'])
    books.controller('booksController', function() {

        var bookList = this;

        bookList.toggle = false;

        bookList.list = [
           {name: "Ulysses", year: 2013, author: "James Joyce" },
           {name: "Don Quixote", year: 2013, author: "James Joyce" },
           {name: "Moby Dick", year: 1999, author: "Herman Melville" },
           {name: "Hamlet", year: 2003, author: "William Shakespeare" },
           {name: "The Odyssey", year: 1999, author: "Homer" }
        ];

        bookList.addBook = function() {
            bookList.list.push({ name: bookList.name, year: bookList.year, author: bookList.author });
            bookList.name = '';
            bookList.author = '';
            bookList.year = '';
        };
});