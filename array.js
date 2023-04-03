const arr = [1, '2', 'c', 'd', 'e']

// Destructuring - moderna
const [a1, b1] = arr
console.log("🚀 ~ file: array.js:5 ~ a1, b1:", a1, b1)

const { 0: a2, 1: b2 } = arr
console.log("🚀 ~ file: array.js:8 ~ a2, b2:", a2, b2)

// Antigua
const a3 = arr[0]
const b3 = arr[1]
console.log("🚀 ~ file: array.js:11 ~ a3, b3:", a3, b3)

console.log("🚀 ~ file: array.js:15 ~ arr:", arr)

// Agregar elementos a un arreglo
arr.push(3) // al final
console.log("🚀 ~ file: array.js:17 ~ arr:", arr)
arr.unshift(0) // al inicio
console.log("🚀 ~ file: array.js:19 ~ arr:", arr)

// Eliminar elementos de un arreglo
arr.pop() // del final
console.log("🚀 ~ file: array.js:25 ~ arr:", arr)
arr.shift()
console.log("🚀 ~ file: array.js:27 ~ arr:", arr)

// Recorrer un arreglo

// Recorremos x elementos
for (const element of arr)
  console.log("🚀 ~ file: array.js:31 ~ element:", element)

// Recorremos x índice
for (const element in arr)
  console.log("🚀 ~ file: array.js:36 ~ element:", element)

// Recorrerlo con un while
let i = 0
while (i < arr.length) {
  console.log(`🚀 ~ file: array.js:47 ~ arr[${i}]:`, arr[i])
  i++
}

// Método de arreglo
arr.forEach(function (value, index, array) { // función anónima
  console.log("🚀 ~ file: array.js:53 ~ arr.forEach ~ value, index, array:", value, index, array)
})

arr.forEach((value, index, array) => { // función anónima - arrow function
  console.log("🚀 ~ file: array.js:57 ~ arr.forEach ~ value, index, array:", value, index, array)
})

const arr2 = arr.map((value, index) => {
  return {
    value,
    index
  }
})
console.log("🚀 ~ file: array.js:58 ~ arr2 ~ arr2:", arr2)

// filter, find, findIndex, includes, join, reduce
