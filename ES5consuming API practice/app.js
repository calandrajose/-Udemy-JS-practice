
const htmlList = document.querySelector(".jokes-list");
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();
  let num = document.querySelector("#num").value;

  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let list = "";

      if(response.type === 'success'){
          response.value.forEach((jokeElement) => {
            list += `
                    <li>${jokeElement.joke}</li>
                    `;
          });
      }else{
        list += '<li>Something went wrong</li>';
      }
      htmlList.innerHTML = list;
    }
  };
  xhr.send();
  num = 0;
  e.preventDefault();
}
