console.log(1/0)

var array = [1,2,3,4,5];

//Declare an answer variable to store the final result
//The reduce function callback is declared in the declaration
let answer = array.reduce((prevVal,currValue)=>
//The callback method must return a value using the required function       
             {return prevVal*currValue;});
console.log("Answer with no initial value")
console.log(answer);

//REDUCE REMOVE DUPS 
console.log('using reduce to remove dups')
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce((previousValue, currentValue)=> {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)