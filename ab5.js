//You are given Two Numbers, A and B. If C = A + B. Find C.
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
  var B = userInput[1];
  var c = parseInt(A)+parseInt(B);
  console.log(c);
  //Your code goes here … replace the below line with your code logic 




  //end-here
});