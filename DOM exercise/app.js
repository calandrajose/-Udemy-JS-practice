const form = document.getElementById("task-form");
const tasksList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const localTasks = localStorage.ge;
loadEventListener();

function loadEventListener() {
    form.addEventListener("submit", createTask);
    document.addEventListener("DOMContentLoaded", getTasks);
    tasksList.addEventListener("click", deleteTask);
    clearBtn.addEventListener("click", clearAll);
    filter.addEventListener("keyup", filterTask);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));

        const deleteLink = document.createElement("a");
        deleteLink.className = "delete-item secondary-content";
        deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(deleteLink);
        tasksList.appendChild(li);
    });
}

function createTask(e) {
    if (taskInput.value === "") {
        alert("Insert new task");
    } else {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));

        const deleteLink = document.createElement("a");
        deleteLink.className = "delete-item secondary-content";
        deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(deleteLink);
        tasksList.appendChild(li);

        storeInLocal(taskInput.value);
        taskInput.value = "";
    }
    e.preventDefault();
}

function deleteTask(e) {
    console.log();
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            let task = e.target.parentElement.parentElement;
            task.remove();
            deleteFromLocal(task.textContent);
        }
    }
}

function clearAll(e) {
    console.log(e.target);
    if (e.target.classList.contains("clear-tasks")) {
        if (confirm("Are you sure?")) {
            while (tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);

                clearLocal();
            }
        }
    }
}

function clearLocal() {
    localStorage.clear();
}

function filterTask(e) {
    const text = e.target.value;
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

function storeInLocal(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
}

function deleteFromLocal(taskItem) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task, index) {
        if (taskItem === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem(`tasks`, JSON.stringify(tasks));
}
