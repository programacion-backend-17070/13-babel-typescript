import Human, { loquesea } from "./human"
// const num1: number = 10
// const num2: number = 20

// const nombre: string = "antonio"
// const esMayorDeEdad: boolean = true

// let hola: any;

// console.log(num1 + num2)

class Antonio extends Human {
  constructor () {
    super("Antonio", 34)
  }
}
const antonio = new Antonio()

console.log(antonio.imprimirNombre())
console.log(antonio.imprimirNombre())

function imprimeElCursodelhumano(persona: Human) {
  console.log(persona.curso)
}


function regresaPropiedad<T>(param: T): T{
  return param
}

const nombredelhumano = regresaPropiedad<boolean>(antonio.mayorDeEdad)

loquesea()