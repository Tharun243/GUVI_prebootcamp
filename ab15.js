/*You are given the coefficients of a quadratic equation in order A, B & C.

Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.*/
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var coeff = userInput[0].split(" ");
 var a = coeff[0];
 var b = coeff[1];
 var c = coeff[2];
 var r1 = parseFloat((-b+(b**2-4*a*c)**(1/2))/(2*a));
 var r2 = parseFloat((-b-(b**2-4*a*c)**(1/2))/(2*a));
 console.log(r1.toFixed(2));
  console.log(r2.toFixed(2));

});