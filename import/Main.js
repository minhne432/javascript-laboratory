//main.js 
import { squareNumber, pi } from "./functionsFile.js";
const radius = 7;
console.log("Area of a circle is", pi * squareNumber(7));

console.log(typeof (squareNumber));
console.log(typeof (pi));

//Cách khác để import

// import * as mathFuncs from "./functionsFile.js";
// console.log("Area of circle is ", mathFuncs.pi * mathFuncs.squareNumber(7)); 
