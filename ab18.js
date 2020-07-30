// Getting input via STDIN
/*You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

Print the output up to two decimal places (Round-off if necessary).

(S.I. = P*T*R/100)*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var ptr = userInput[0].split(" ");
 var SI = (ptr[0]*ptr[1]*ptr[2])/100;
 console.log(SI.toFixed(2));

  //end-here
});