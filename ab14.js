// Getting input via STDIN
//Let "A"  be a string. Remove all the whitespaces and find it's length.


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const mystring = userInput[0];
  const  B = mystring.replace(/ /g, "");
  console.log(B.length);
});