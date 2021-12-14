/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/3jwxgpxRq0n
Given an array of size n, remove all even integers from it. Implement this solution in JavaScript and see if it runs without an error.


-return array with only ODD elements 

*/

function removeEven(arr) {
   let odd =[];
   for (let el of arr){
       if(isOdd(el)==true){
           odd.push(el); 
       }
   }
   console.log(`odd= ${odd}`);

    return odd;
}

function isOdd(num){
    let isOdd=false;
    if(num%2==1){
        isOdd=true;
    }
    console.log(`isOdd= ${isOdd}`);
    return isOdd;
}

//Solution #2: Using filter() and lambda(arrow) function #
//filter() - creates a new array with all elements that pass the test implemented by the provided function.
function removeEvenElegant(arr){
    return arr.filter((el=>(el%2)!=0));
}


removeEven([0,1,2,,3,7]);
isOdd(0); 