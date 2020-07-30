//You are provided with two numbers. Find and print the smaller number.

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
var A = userInput[0].split(" ");
if(A[0]<A[1]){
    console.log(A[0])
}else{
    console.log(A[1])
}
  //end-here
});