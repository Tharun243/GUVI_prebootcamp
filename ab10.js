//You are provided with a number, "N". Find its factorial.


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
  var N = userInput[0];
  function fact(N){
    if(N===0 || N===1){
         return 1;
  }
    else{
        return N*fact(N-1);
    }
      
  }
ans = fact(N)
console.log(ans)
}
  //end-here
);