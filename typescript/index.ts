import Contenedor from "./contenedor"

(async () => {
  const instancia = new Contenedor()
  console.log(await instancia.getProducts())
})()

