document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getAPI);

function getText() {
  fetch("test.txt")
    .then((response) => response.text())
    .then((data) => (document.querySelector(".output").textContent = data))
    .catch((err) => console.log(err));
}

function getJSON() {
  fetch("jsonTest.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((employee) => {
        output += `<li>${employee.name}</li>`;
        document.querySelector(".output").innerHTML = output;
      });
    })
    .catch((err) => console.log(err));
}

function getAPI() {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `
          <li> username: ${user.login}</li>
          <li> id: ${user.id}</li>
          <li> profile ${user.url}</li>  
          <hr>
          `;
        document.querySelector(".output").innerHTML = output;
      });
    })
    .catch((err) => console.log(err));
}
