class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector("#book-list");

        const newRow = document.createElement("tr");

        newRow.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#"><i class="fas fa-trash-alt delete"></i></a></td>`;

        list.appendChild(newRow);
    }

    clearFields() {
        document.querySelector(".title").value = "";
        document.querySelector(".author").value = "";
        document.querySelector(".isbn").value = "";
    }

    showAlert(message, className) {
        const container = document.querySelector(".container");
        const form = document.querySelector(".form");
        const alert = document.createElement("div");
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        container.insertBefore(alert, form);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 1500);
    }

    deleteBook(target) {
        if (target.className.includes("delete")) {
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books = [];
        if (localStorage.getItem("books") !== null) {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach((book) => {
            ui.addBookToList(book);
        });
    }
    static addBookLS(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static deleteBookLS(isbn, index) {
        const books = Store.getBooks();
        books.forEach((book) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);

document.querySelector(".form").addEventListener("submit", function (e) {
    const title = document.querySelector(".title").value,
        author = document.querySelector(".author").value,
        isbn = document.querySelector(".isbn").value;
    const newBook = new Book(title, author, isbn);

    const ui = new UI();
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please complete all fields", "error");
    } else {
        Store.addBookLS(newBook);
        ui.addBookToList(newBook);
        ui.showAlert("Book succesfully added", "succes");
        ui.clearFields();
    }
    e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.deleteBook(e.target);

    const isbn =
        e.target.parentElement.parentElement.previousElementSibling.textContent;
    Store.deleteBookLS(isbn);
    const title =
        e.target.parentElement.parentElement.parentElement.firstElementChild
            .textContent;
    ui.showAlert(`"${title}" was succesfully deleted`, "succes");
});
