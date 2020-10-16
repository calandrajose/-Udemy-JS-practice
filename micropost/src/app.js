import { http } from "./http";
import { ui } from "./ui";

const url = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", getPosts);

document.querySelector(".post-submit").addEventListener("click", submitPost);

document
  .querySelector(".postsContainer")
  .addEventListener("click", cancelEdition);

document.querySelector("#posts").addEventListener("click", function (e) {
  const tagClassName = e.target.className;

  if (tagClassName.includes("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure???")) {
      deletePost(id);
    }
  } else if (tagClassName.includes("edit")) {
    const id = e.target.parentElement.dataset.id;
    ui.changeState("edit");
    getPost(id);
  }
  e.preventDefault();
});

async function getPosts() {
  ui.clearFields();
  http
    .get(url)
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  const title = document.querySelector("#title").value,
    body = document.querySelector("#body").value,
    id = document.querySelector("#id").value;

  /**Checks if form is completed */
  if (title === "" || body === "") {
    ui.showAlert(
      "Please complete all the fields before submitting",
      "alert alert-danger"
    );
  } else {
    /** SUBMIT */
    const post = {
      title,
      body,
    };

    /**NEW POST */
    if (id === "") {
      createNewPost(post);
    } else {
      /**UPDATE POST */
      updatePost(post, id);
    }
  }
}

function createNewPost(post) {
  http
    .post(url, post)
    .then((data) => {
      ui.showAlert("Post added", "alert alert-success");
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}

function updatePost(post, id) {
  http
    .put(`${url}/${id}`, post)
    .then((data) => {
      ui.showAlert("Post updated", "alert alert-success");
      ui.changeState("post");
      getPosts();
    })
    .catch((err) => console.log(err));
}

function deletePost(id) {
  const urlId = `${url}/${id}`;
  http
    .delete(urlId)
    .then((data) => {
      ui.showAlert("Post deleted", "alert alert-success");
      getPosts();
    })
    .catch((err) => console.log(err));
}

async function getPost(id) {
  http
    .get(`${url}/${id}`)
    .then((data) => {
      ui.showPostInForm(data);
    })
    .catch((err) => console.log(err));
}

function cancelEdition(e) {
  if (e.target.className.includes("cancel")) {
    ui.changeState("post");
  }
  e.preventDefault();
}
