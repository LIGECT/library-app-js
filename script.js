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

Book.prototype.toggleRead = function () {
  this.read = !this.read;
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
  bookAuthor.classList.add("author-style");
  bookAuthor.textContent = newBook.author;
  myDiv.appendChild(bookAuthor);

  const bookPages = document.createElement("p");
  bookPages.textContent = `Pages: ${newBook.pages}`;
  myDiv.appendChild(bookPages);

  const containerForStatus = document.createElement("div");
  containerForStatus.classList.add("container-for-status");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "myCheckbox";
  checkbox.value = "someValue";
  checkbox.id = "bookID";
  checkbox.classList.add("style-chekbox");
  checkbox.checked = newBook.read;
  containerForStatus.appendChild(checkbox);

  const label = document.createElement("label");
  label.htmlFor = "bookID";
  label.textContent = "Read";
  containerForStatus.appendChild(label);

  checkbox.addEventListener("change", function () {
    newBook.read = this.checked;
  });

  myDiv.appendChild(containerForStatus);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  myDiv.appendChild(deleteButton);

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
  console.log(bookID);

  myDiv.classList.add("book-card");

  const title = document.createElement("h2");
  title.textContent = book.title;
  myDiv.appendChild(title);

  const author = document.createElement("p");
  author.classList.add("author-style");
  author.textContent = book.author;
  myDiv.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  myDiv.appendChild(pages);

  const containerForStatus = document.createElement("div");
  containerForStatus.classList.add("container-for-status");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "myCheckbox";
  checkbox.value = "someValue";
  checkbox.id = "bookID";
  checkbox.classList.add("style-chekbox");
  checkbox.checked = book.read;
  containerForStatus.appendChild(checkbox);

  const label = document.createElement("label");
  label.htmlFor = "bookID";
  label.textContent = "Read";
  containerForStatus.appendChild(label);

  checkbox.addEventListener("change", function () {
    book.read = this.checked;
  });

  myDiv.appendChild(containerForStatus);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";

  myDiv.appendChild(deleteButton);

  booksArea.appendChild(myDiv);
});

booksArea.addEventListener("click", (event) => {
  if (event.target.closest(".delete-button")) {
    const bookCard = event.target.closest(".book-card");
    if (bookCard) {
      const deleteForBookID = bookCard.dataset.bookId;
      console.log(`Нажата кнопка удаления для книги с ID: ${deleteForBookID}`);
      bookCard.remove();
    }
  }
});
