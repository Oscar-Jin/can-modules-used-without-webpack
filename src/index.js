import { describeOscar, createElementP, whoIsOscar } from "./utils.js";


let p1 = createElementP(describeOscar())
let p2 = createElementP(whoIsOscar())

document.body.appendChild(p1)
document.body.appendChild(p2)


