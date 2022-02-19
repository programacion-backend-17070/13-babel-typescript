import fs from "fs/promises"
import path from "path"

class Contenedor {

  private file: string;

  constructor() {
    this.file = path.join(__dirname, "../files/products.json")
  }

  async getProducts() {
    try {
      const fileContent = await fs.readFile(this.file, "utf8")
      return JSON.parse(fileContent)
    } catch (err) {
      throw err;
    }
  }
}

export default Contenedor