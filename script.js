function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  Book.prototype.info = function () {
    const readStatus = this.read ? "read" : "not read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theLordOfTheRings = new Book(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1178,
  true
);
console.log(theHobbit.info());
console.log(theLordOfTheRings.info());
