
class Book {
    title: string;
    author: string;
    alreadyRead: boolean;

    constructor(title: string,
                author: string,
                alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}
let book1 = new Book('The Design of EveryDay Things', 'Don Norman', false);
let book2 = new Book('The Most Human Human', 'Brian Christian', true);
let books: Book[] = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let bookInfo = books[i].title + '" by ' + books[i].author;
    if (books[i].alreadyRead === true) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}