const myLibrary = [];
const booksArea = document.getElementById("books-display-area");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
  const readStatus = this.read ? "read" : "not read";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
};

function addBookLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookLibrary("The Art of Not Giving a Fuck", "Mark Manson", 224, true);
// addBookLibrary("JavaScript for Sadists", "Linus Devberg", 666, false);
// addBookLibrary("Eat. Sleep. Code. Repeat.", "Ada Lovelace", 342, true);

myLibrary.forEach((book) => {
  const myDiv = document.createElement("div");
  const bookID = book.id;
  myDiv.setAttribute("data-book-id", bookID);
  booksArea.dataset.bookId;
  myDiv.classList.add("book-card");

  //   element.textContent = book.title;
  booksArea.appendChild(myDiv);
});
