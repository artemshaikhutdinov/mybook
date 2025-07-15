const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPublished = document.getElementById("book-published");

fetch("https://artemshaikhutdinov.github.io/mybook/bookArtem.json")
  .then((res) => res.json())
  .then((book) => {
    console.log(book.title);
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPublished.textContent = book.published;
  })
  .catch((error) => {
    console.log(error);
  });
