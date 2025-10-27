const books = [
    {
        title: 'The Design of Everyday Things',
        authorName: 'Don Norman',
        releaseYear: 1980
    },

    {
        title: 'The Most Human Human',
        authorName: 'Brian Christian',
        releaseYear: 2018
    },

    {
        title: 'The Pragmatic Programmer',
        authorName: 'Andrew Hunt',
        releaseYear: 1999
    }
];

function sortByYear(book1, book2) {
    if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else if (book1.releaseYear === book2.releaseYear) {
        return 0;
    } else {
        return -1;
    }
}

const filteredBooks = books.filter(book => book.releaseYear > 2000);

const sortedFilteredBooks = filteredBooks.sort(sortByYear);

console.log(filteredBooks);
