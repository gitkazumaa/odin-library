let myLibrary = [];

const newBookForm = document.getElementById("new-book-form");
const newBookFormInputs = newBookForm.elements;
newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
    displayBooks();
});

Book.prototype.changeReadStatus = function () {
    this.isRead = !this.isRead
}

const openForm = () => {
    document.getElementById("form-popup").style.display = "block";
}

const closeForm = () => {
    document.getElementById("form-popup").style.display = "none";
}

function submitForm() {
    const book = new Book(newBookFormInputs[1].value, newBookFormInputs[0].value, newBookFormInputs[2].value, newBookFormInputs[3].value);
    addBookToLibrary(book);
}

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
        const readStatusButton = document.createElement("button");
        readStatusButton.textContent = "Read Status";
        readStatusButton.addEventListener("click", () => card.changeReadStatus());
        card.appendChild(removeButton);
        card.appendChild(readStatusButton);
        cardContainer.appendChild(card);
    }
}

function removeCard(i) {
    myLibrary.splice(i, 1);
    const cardContainer = document.getElementById("card-container");
    const [card] = document.querySelectorAll(`[data="${i}"]`);
    cardContainer.removeChild(card);
}