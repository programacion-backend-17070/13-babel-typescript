import fs from "fs/promises"
import path from "path"

class Contenedor {
  private file: string

  constructor() {
    this.file = path.join(__dirname, "./files/products.json")
  }

  async getProducts(): Promise<any> {
    try {
      const fileContents = await fs.readFile(this.file, "utf8")
      return JSON.parse(fileContents)
    } catch (e) {
      console.log(e)
    }
  }
}

export default Contenedor