function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function (book) {
    const list = document.querySelector("#book-list");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#"><i class="fas fa-trash-alt delete"></i></a></td>`;


    list.appendChild(newRow);
};

UI.prototype.clearFields = function () {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
};

UI.prototype.showAlert = function (message, className) {
    const container = document.querySelector('.container');
    const form = document.querySelector('.form');
    const alert = document.createElement('div');
    alert.className = `alert ${className}`;
    alert.appendChild(document.createTextNode(message));
    container.insertBefore(alert, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 1500);
};

UI.prototype.deleteBook = function(target){
    if(target.className.includes('delete')){
        target.parentElement.parentElement.parentElement.remove();
    }
};


document.querySelector(".form").addEventListener("submit", function (e) {
    const title = document.querySelector(".title").value,
        author = document.querySelector(".author").value,
        isbn = document.querySelector(".isbn").value;
    const newBook = new Book(title, author, isbn);

    const ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please complete all fields', 'error');
    } else {

        ui.addBookToList(newBook);
        ui.clearFields();
        ui.showAlert('Book succesfully added', 'succes');
    }
    e.preventDefault();
});


document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    const title = e.target.parentElement.parentElement.parentElement.firstElementChild.textContent;
    console.log(title);

    ui.showAlert(`"${title}" was succesfully deleted`, 'succes');   
});
