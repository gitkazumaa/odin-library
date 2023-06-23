let myLibrary = [];
const book1 = new Book("title", "author", 100, false);
const book2 = new Book("title", "author", 100, false);
const book3 = new Book("title", "author", 100, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => `${title} by ${author}, ${pages} pages, ${isRead}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.textContent = myLibrary[i].title;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        card.appendChild(removeButton);
        document.body.appendChild(card);
    }
}