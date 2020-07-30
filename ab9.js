//You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.


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
  //start-here
  var A = userInput[0];
  console.log(A*1000);
  console.log(A*100000);
  //Your code goes here … replace the below line with your code logic 

  //end-here
});