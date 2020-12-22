let button1 = document
  .getElementById("button1")
  .addEventListener("click", getUsers)
let button2 = document
  .getElementById("button2")
  .addEventListener("click", postUser)
let button3 = document
  .getElementById("button3")
  .addEventListener("click", getAnimals)
let button4 = document
  .getElementById("button4")
  .addEventListener("click", postAnimal)
let button5 = document
  .getElementById("button5")
  .addEventListener("click", getSport)
let button6 = document
  .getElementById("button6")
  .addEventListener("click", postSport)

let newUser = {
  id: 69,
  name: "Elsa",
  status: "online",
  interests: "Science, Music, & Classic Films",
}

let newAnimal = {
  id: 420,
  name: "platypus",
  diet: "inators",
  fun_fact: "Oh look, a platypus. PERRY THE PLATYPUS?!?!",
}

let newSport = {
  id: 9,
  name: "Chicago Cubs",
  head_coach: "David Ross",
  sport: "baseball",
}

function getUsers() {
  fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function postUser() {
  fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((response) => response.json())
  console.log(JSON.stringify(newUser))
}

function getAnimals() {
  fetch("http://localhost:3001/api/v1/animals")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function postAnimal() {
  fetch("http://localhost:3001/api/v1/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimal),
  })
    .then((response) => response.json())
    .then((data) => console.log(newAnimal))
}

function getSport() {
  fetch("http://localhost:3001/api/v1/sport-teams")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function postSport() {
  fetch("http://localhost:3001/api/v1/sport-teams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSport),
  })
    .then((response) => response.json())
    .then((data) => console.log(newSport))
}
