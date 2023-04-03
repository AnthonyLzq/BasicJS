// Dinámico y débil
let name = 'anthony'
name = 234

// string, number, BigInt, null, undefined, symbol y boolean // function y object
let age = 22

// console.log("🚀 ~ file: index.js:7 ~ typeof age:", typeof age)

// Estructuras de control condicionales

if (age >= 18) console.log('You are allowed to be here')
else console.log('You are not allowed to be here')

switch (age) {
  case 18:
    console.log('You are allowed to be here')
    break
  case 19:
  case 20:
  case 21:
    console.log('You are allowed to be here')
    break
  case 22: {
    const name = 'Mary'
    console.log("🚀 ~ file: index.js:22 ~ name:", name)
    break
  }
  default:
    console.log('You are not allowed to be here')
}

// Estructuras de control iterativas

let number

while (true) { // Bucle infinito - indeterminado
  number = Math.random()
  console.log("🚀 ~ file: index.js:38 ~ number:", number)

  if (number < 0.3) break
}

for (let i = 0; i < 10; i++) { // Bucle finitio - determinado
  console.log("🚀 ~ file: index.js:45 ~ i:", i)
}

// POJO - Plain old JavaScript object
const obj = {
  name: 'Diego',
  lastName: 'Ramos',
  age: 26,
  getName: function () {
    return `My name is ${this.name} ${this.lastName}`
  }
}
console.log("🚀 ~ file: index.js:54 ~ obj:", obj)

const objEntries = Object.entries(obj)
console.log("🚀 ~ file: index.js:57 ~ objEntries:", objEntries)

console.log(obj.getName())

// Functiones

function namedGreed () { // Función nombrada
  console.log('Hello world from named function')
}

namedGreed()

// First class citizens - Ciudadano de primera clase
// Una función en JS puede ser guardada en una variable y también utilizada como parámetro de otra función

const anonymousGreed = function () { // Función anónima
  console.log('Hello world from an anonymous function')
}

anonymousGreed()

// HOF - High Order Function - Función de orden superior
// Una HOF es aquella función que recibe otra función como parámetro

const hof = function (f1) { // Llamamos a f1 una "callback"
  console.log('I am going to call f1')
  f1()
}

hof(anonymousGreed)
hof(namedGreed)
