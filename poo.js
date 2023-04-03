// POJO: plain old javascript object
const obj = {
  name: 'Jhon'
}

// Instancia de una clase
const error = new Error('This is an error')

// camelCase
// snake_case
// PascalCase
class Vehicle {
  // Los atributos privados deben ser declaros al inicio de la clase
  #tire
  #brand
  #color

  // método
  constructor(tire, brand, color) {
    this.#tire = tire
    this.#brand = brand
    this.#color = color
  }

  toString() {
    return `{ "tire": ${this.#tire}, "color": "${this.#color}", "brand": "${this.#brand}" }`
  }

  changeColor(color) {
    this.#color = color
  }

  getTire() { // encapsulación
    return this.#tire
  }

  getBrand() {
    return this.#brand
  }

  getColor() {
    return this.#color
  }
}

class Car extends Vehicle {
  #doors

  constructor(brand, color, doors) {
    super(4, brand, color)
    this.#doors = doors
  }

  getDoors() {
    return this.#doors
  }

  // sobreescritura de métodos
  toString() {
    const aux = super.toString()

    return aux.replace('}', `"doors": ${this.#doors} }`)
  }
}

class Motorcycle extends Vehicle {
  #chainsType

  constructor(brand, color, chainsType) {
    super(2, brand, color)
    this.#chainsType = chainsType
  }

  getChainsType() {
    return this.#chainsType
  }

  // sobreescritura de métodos
  toString() {
    const aux = super.toString()

    return aux.replace('}', `"chainsType": ${this.#chainsType} }`)
  }
}

const car1 = new Car('Audi', 'white', 2)
console.log("🚀 ~ file: poo.js:91 ~ car1.toString():", car1.toString())

const moto1 = new Motorcycle('Yamaha', 'red', 'normal')
console.log("🚀 ~ file: poo.js:90 ~ moto1.toString():", moto1.toString())
