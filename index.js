const abc = { a: "a", b: "b", c: "c" }
const { a, ...bc } = abc

console.log(bc)
console.log("a".repeat(5))
console.log(['Dog', ['Sheep', 'Wolf']].flat())

const fn = () =>  console.log("function")

fn()

const prom = () => new Promise((resolve, reject) => setTimeout(resolve, 5000))

console.log("before")

await prom()
console.log("after 5000s")

import fn2 from "./lib.js"

fn2()