// Problem 5 – Books Library
const books = [
  { id: 1, title: "Atomic Habits", pages: 320, available: true },
  { id: 2, title: "Clean Code", pages: 450, available: false },
  { id: 3, title: "Deep Work", pages: 280, available: true }
];
// •	Tasks:
// 41.	Print all book titles.
const bookTitles = books.map(book=>book.title);
console.log(bookTitles);

// 42.	Find available books.
const availableBooks = books.filter(book=> book.available);
console.log(availableBooks);

// 43.	Find books with more than 300 pages.
const booksWithMoreThan300Pages = books.filter(book=> book.pages>300);
console.log(booksWithMoreThan300Pages);

// 44.	Find the longest book.
const longestBook = books.reduce((max,curr)=> curr.pages>max.pages? curr:max,books[0]);
console.log(longestBook);

// 45.	Calculate total pages.
const totalPages = books.reduce((acc,curr)=> acc+curr.pages,0);
console.log(totalPages);

// 46.	Add a new book.
const newBook = {id:4, title:"The Pragmatic Programmer", pages:350, available:true};
const updatedBooks = [...books,newBook];
console.log(updatedBooks);

// 47.	Add a category property to every book.
const booksWithCategory = books.map(book=>({
    ...book,
    category: "Programming"
}));
console.log(booksWithCategory);

// 48.	Destructure title and pages.
const {title:firstBookTitle, pages:firstBookPages} = books[0];
console.log(firstBookTitle, firstBookPages);

// 49.	Find the book with id = 3.
const bookWithId3 = books.find(book=> book.id===3);
console.log(bookWithId3);

// 50.	Count how many books are available.
const availableBookCount = books.filter(book=> book.available).length;
console.log(availableBookCount);
