import Contenedor from "./contenedor";

(async () => {
  const instancia: Contenedor = new Contenedor()
  console.log(await instancia.getProducts())
})()