//You are given three numbers A, B & C. Print the largest amongst these three numbers.
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
  let a = userInput[0];
  let b = userInput[1];
  let c = userInput[2];
  if(a>b)
    {
        if(a>c)
         {
          console.log(a);
         }
        else
         {
          console.log(c);
         }  
    }
  else
  {
   if(b>c)
   {
       console.log(b)
       
   }
   else
   {
       console.log(c)
   }
  }


  //end-here
});