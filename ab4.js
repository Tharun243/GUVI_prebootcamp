//You are provided with the radius of a circle "A". Find the length of its circumference.


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
  var Radius = userInput[0];
  var circumference = 2 * Math.PI * Radius
  //Your code goes here … replace the below line with your code logic 

  console.log(circumference.toFixed(2));

  //end-here
});