/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/xVl0WZ09nY9

Given an array and a number "value", find two numbers from the array 
that sum to 'value'. 

- go over array check if complimentary num exists in arr
value -arr[i]=complimentary number 
if yes -> add ar[i] and compl number to new array pair and return
if no -> return  hasPair=false 
*/

function findSum(arr,value){
let hasPair =false;
let paired =[]; 
let complimentary =0; 

 for (let i=0; i<arr.length; i++){
     complimentary=value-arr[i];

     if(arr.includes(complimentary)==true){
         paired.push(arr[i]);
         paired.push(complimentary);
         hasPair= true;
         return paired;
     }
 }
  return hasPair;
}

findSum([1,2,3], 5); 