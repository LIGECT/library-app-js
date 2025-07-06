const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  Book.prototype.info = function () {
    const readStatus = this.read ? "read" : "not read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

function addBookLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookLibrary("The Art of Not Giving a Fuck", "Mark Manson", 224, true);
addBookLibrary("JavaScript for Sadists", "Linus Devberg", 666, false);
addBookLibrary("Eat. Sleep. Code. Repeat.", "Ada Lovelace", 342, true);
addBookLibrary("The Subtle Joy of Syntax Errors", "Chuck Brackett", 129, false);
addBookLibrary("101 Ways to Rage Quit", "Devon McCrash", 403, true);
// addBookLibrary("Midnight Debugging", "Sarah Nullpointer", 250, false);
// addBookLibrary("Gods of Stack Overflow", "Johnny Hotfix", 500, true);
// addBookLibrary("Coffee & Commit Messages", "Tina Gitpush", 312, true);
// addBookLibrary("Why My Code Works (I Don't Know)", "Random Dev", 420, false);
// addBookLibrary("Fuck You, I'm Refactoring", "Karen Semicolon", 350, true);

console.log(myLibrary);
