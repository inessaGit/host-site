//         Declaring callback within the reduce statement

//Declare an array of numbers
var array = [1,2,3,4,5];

//Declare an answer variable to store the final result
//The reduce function callback is declared in the declaration
let answer = array.reduce((totalResult,currValue)=>
//The callback method must return a value using the required function       
             {return totalResult*currValue;});
console.log("Answer with no initial value")
console.log(answer);


console.log("Given an initial value of 2. The answer should be doubled")
let answer2 = array.reduce((totalResult,currValue)=>
           {return totalResult*currValue;},2);
console.log(answer2);