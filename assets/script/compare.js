// let first_input = document.querySelector('#first-input').value;
// console.log(first_input)
// let second_input = document.querySelector('#second-input').value;
// console.log(second_input)

// var request = new XMLHttpRequest()
// var request2 = new XMLHttpRequest()
// request.open("GET", `https://api.github.com/users/${first_input}`, true);
// request2.open("GET", `https://api.github.com/users/${second_input}`, true);

// request.onload = function () {
//     var data =JSON.parse(this.response);
//     let first_card = document.getElementById('first-card')
//     first_card.innerHTML =
//         `
//             <p>${data.login}</p>
//             <span>winner</span>
//             <img src="${data.avatar_url}" alt="">
//             <p># Public repos : ${data.public_repos}</p>
//         `
//     console.log("hi")

// }

// request2.onload = function () {
//     var data2 =JSON.parse(this.response);
//     let first_card = document.getElementById('second-card')
//     first_card.style.display = ""
//     first_card.innerHTML =
//         `
//             <p>${data2.login}</p>
//             <span>winner</span>
//             <img src="${data2.avatar_url}" alt="">
//             <p># Public repos : ${data2.public_repos}</p>
//         `
//     console.log("hi")

// }

// request.send()
// request2.send()


let reposOne;
let reposTwo;
function search() {
  document.getElementById("first-card").style.backgroundColor = "white";
      document.getElementById("first-card").setAttribute("backgroundColor", "green !important")
      document.getElementById("second-card").style.backgroundColor = "white";
      document.getElementById("second-card").setAttribute("backgroundColor", "green !important")
  user_one = document.querySelector("#first-input").value;
  const URL = `https://api.github.com/users/${user_one}`;
  fetch(URL, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data) => {
      let first_card = document.getElementById("first-card");
      first_card.innerHTML = `
                                <p>${data.login}</p>
                                <span id="result1"></span>
                                <img src="${data.avatar_url}" alt="">
                                <p># Public repos : ${data.public_repos}</p>
                                `;
                                reposOne = data.public_repos;
    })
    .catch((error) => console.error(error));
  user_two = document.querySelector("#second-input").value;
  const URL2 = `https://api.github.com/users/${user_two}`;
  fetch(URL2, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })
    .then((response) => response.json()) //Converting the response to a JSON object
    .then((data2) => {
      let second_card = document.getElementById("second-card");
      second_card.innerHTML = `
                                <p>${data2.login}</p>
                                <span id="result2"></span>
                                <img src="${data2.avatar_url}" alt="">
                                <p># Public repos : ${data2.public_repos}</p>
                                `;
                                let reposTemp2 = data2.public_repos;
                                setRepoTwo(reposTemp2)
    })
    .catch((error) => console.error(error));
}

function setRepoTwo (x){
  // console.log(x)
  reposTwo = x
  print()
}

function print() {
    console.log(reposOne)
    console.log(reposTwo)
    let result1 = document.getElementById("result1")
    let result2 = document.getElementById("result2")
    if (reposOne > reposTwo) {
      console.log("one winner")
      result1.textContent = "Winner"
      result2.textContent = "Loser"
      document.getElementById("first-card").style.backgroundColor = "rgb(3, 255, 3)";
      document.getElementById("first-card").setAttribute("backgroundColor", "green !important")
    }
    else if (reposOne < reposTwo) {
      console.log("two winner")
      result1.textContent = "Loser"
      result2.textContent = "Winner"
      document.getElementById("second-card").style.backgroundColor = "rgb(3, 255, 3)";
      document.getElementById("second-card").setAttribute("backgroundColor", "red")
    }
    else if (reposOne == reposTwo) {
      console.log("equal")
      result1.textContent = "Draw"
      result2.textContent = "Draw"
    }
}