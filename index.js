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
    const cardContainer = document.getElementById("card-container");
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("data", i);
        card.textContent = myLibrary[i].title;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeCard(i);
        });
        card.appendChild(removeButton);
        cardContainer.appendChild(card);
    }
}

function removeCard(i) {
    myLibrary.splice(i, 1);
    const cardContainer = document.getElementById("card-container");
    const [card] = document.querySelectorAll(`[data="${i}"]`);
    cardContainer.removeChild(card);
    
}

const openForm = () => {
    document.getElementById("new-book-form").style.display = "block";
}

const closeForm = () => {
    document.getElementById("new-book-form").style.display = "none";
}