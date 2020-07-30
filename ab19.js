// Getting input via STDIN
/*Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
const Num = +userInput[0];
let arr = [];
for(i=1;i<Num+1;i++){
    arr.push(9*i);
}
console.log(arr.join(" "));
});