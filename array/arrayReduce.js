/*
https://www.educative.io/edpresso/what-is-reduce-in-javascript

The reduce method is applied to arrays in Javascript. 
This method does what its name says; it takes the values in an array, from the first till the last element, 
and applies functionality such that it changes the array into 
one singular value. 

previousValue (value from the previous call to callbackfn)
currentValue (value of the current element)

/Implementation One
let answer = array.reduce(callback, initialValue);
//Implementation Two
let answer = array.reduce(callback);
// Expanding callback

let answer = 
array.reduce(function(totalResult,currValue,currIndex,array),initialValue);
*/

var array = [1,2,3,4,5];
let answer = array.reduce((totalResult,currValue)=>
//The callback method must return a value using the required function       
             {return totalResult*currValue;});
console.log("Answer with no initial value")
console.log(answer);

// reduce method has an initialValue set to 2. 
//Hence, the totalResult is multiplied first with 2 and then proceeds further.
console.log("Given an initial value of 2. The answer should be doubled")
let answer2 = array.reduce((totalResult,currValue)=>
           {return totalResult*currValue;},2);
console.log(answer2);


//passing in the return value from the calculation on the preceding element
function test1(arr){

    let a=[1,3,5];
    if(arr !=null){
        a=[...arr];
    }
    let answer =a.reduce((previousVal,currValue)=>{
    let  sum= previousVal+currValue;
     console.log(`sum=${sum}`);
      return sum;
    });
}

let a =test1();
console.log(a);


function test2(){
    let b=["cat","dog","fish","cocoa"];
  let answer=  b.reduce((prevValue,curValue)=>{
     let flatten = prevValue.concat(curValue);
     console.log(flatten)
     return flatten;
    })

    return answer;
}

let b=test2();
console.log(b); 

