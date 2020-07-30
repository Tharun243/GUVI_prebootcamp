// Getting input via STDIN
//You are given with a number "N", find its cube.


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var N =userInput[0];
  console.log(N**3);
});