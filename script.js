const myLibrary = [];
const booksArea = document.getElementById("books-display-area");
const formSend = document.getElementById("book-form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
  const readStatus = this.read ? "read" : "not read";
  return `${readStatus}`;
};

function addBookLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

formSend.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  addBookLibrary(title, author, pages, read);
  const newBook = myLibrary[myLibrary.length - 1];

  const myDiv = document.createElement("div");
  myDiv.setAttribute("data-book-id", newBook.id);
  booksArea.dataset.bookId;

  myDiv.classList.add("book-card");

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = newBook.title;
  myDiv.appendChild(bookTitle);

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = newBook.author;
  myDiv.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.textContent = `Pages: ${newBook.pages}`;
  myDiv.appendChild(bookPages);

  const status = document.createElement("p");
  status.textContent = `status: ${newBook.info()}`;
  myDiv.appendChild(status);

  booksArea.appendChild(myDiv);

  formSend.reset();
});

addBookLibrary("The Art of Not Giving a Fuck", "Mark Manson", 224, true);
addBookLibrary("JavaScript for Sadists", "Linus Devberg", 666, false);
addBookLibrary("Eat. Sleep. Code. Repeat.", "Ada Lovelace", 342, true);
addBookLibrary("Fuck You, I'm Refactoring", "Karen Semicolon", 350, true);

myLibrary.forEach((book) => {
  const myDiv = document.createElement("div");

  const bookID = book.id;
  myDiv.setAttribute("data-book-id", bookID);
  booksArea.dataset.bookId;

  myDiv.classList.add("book-card");

  const title = document.createElement("h2");
  title.textContent = book.title;
  myDiv.appendChild(title);

  const author = document.createElement("p");
  author.textContent = book.author;
  myDiv.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  myDiv.appendChild(pages);

  const status = document.createElement("p");
  status.textContent = `status: ${book.info()}`;
  myDiv.appendChild(status);

  booksArea.appendChild(myDiv);
});
