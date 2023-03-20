const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(15);
  }, 5000);
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
  resolve(12);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));


console.log("-------------------ALL-----------------------")

const promessa1 = new Promise((resolve, reject) => {
  resolve("Promessa 1 OK")
})

const promessa2 = new Promise((resolve, reject) => {
  resolve("Promessa 2 OK")
})

const promessa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promessa 3 demora mais")
  }, 2000)
})

const promessa4 = new Promise((resolve, reject) => {
  resolve("Promessa 4 OK")
})

const resolvertTodos = Promise.all([promessa1, promessa2, promessa3, promessa4]).then((data) => {
  console.log(data)
})

console.log("Depois do all")


console.log("------------------RACE------------------------")

const promessa5 = new Promise((resolve, reject) => {
  resolve("Promessa 1 OK")
})

const promessa6 = new Promise((resolve, reject) => {
  resolve("Promessa 2 OK")
})

const promessa7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promessa 3 demora mais")
  }, 2000)
})

const promessa8 = new Promise((resolve, reject) => {
  resolve("Promessa 4 OK")
})

const resolvertTodosNovamente = Promise.race([promessa5, promessa6,promessa7, promessa8]).then((data) => {
  console.log(data)
})


console.log("---------------FETCH-----------------")

const userName = 'oFerrari'

fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers:{
    Accept: 'application/vnd.github.v3+json',
  },
}).then((response) => {
  console.log(typeof response)
  console.log(response)
  return response.json()
}).then((data) => {
  console.log(`O nome do Usuario é: ${data.name}`)
}).catch((error) => {
  console.log(`Usuario não encontrado! ${error}`)
})