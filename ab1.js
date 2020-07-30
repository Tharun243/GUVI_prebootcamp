//Print the First 3 multiples of the given number "N". (N is a positive integer)
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
  //Your code goes here … replace the below line with your code logic 
 var i = userInput[0];
 p = [];
 for(var j=1; j<4; j++)
 {
     p.push(i*j);
 }
  console.log(p.join(" "));
});