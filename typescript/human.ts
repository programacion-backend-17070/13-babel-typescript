export interface IHuman {
  imprimirNombre: () => string | number,
  caminar: () => void,
  curso: string
}

export function loquesea () {

}

export default class Human implements IHuman {
  // private nombre: string;
  // private age: number;

  curso: string = "curso 1"
  mayorDeEdad: boolean = true

  constructor (public nombre: string, public age: number) {
    // this.nombre = nombre;
    // this.age = age
  }

  imprimirNombre(): string {
    return this.nombre
  }

  private comer() {
    console.log("edtoy comiendo")
  }

  caminar() {

  }
}