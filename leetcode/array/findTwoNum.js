/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/xVl0WZ09nY9

findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
In case there is more than one pair in the array containing numbers that add up to value,
 you are required to return only one such pair.
 If no such pair found then simply return false.

 arr = [1,21,3,14,5,60,7,6] //sum =117
value = 81
Output: arr = [21,60]

case 1 ; false 
case 2: true with 1 pair
case 3 : true with multi pair 

go over array:for every number on the list, you can look for 
his complementary (number that when added to the previous one would give the required target sum). 
If it exists, get the pair and exit, otherwise move on.

*/

function findSum(arr,value){
  let hasSum=false;
  let foundPair=[];
  let sum =0; 
   let complimentary=0;

  for (let i=0; i<arr.length; i++){
      complimentary=value-arr[i];
      //console.log(`complimentary=${complimentary}`);

      if(arr.includes(complimentary)==true){
          //found pair add to array 
          foundPair.push(arr[i]);
          foundPair.push(complimentary);
          hasSum=true;
         // console.log(`found paid ${foundPair}`);
          return foundPair;
      }
  }
   return hasSum; 
}


console.log(findSum([1,21,3,14,5,60,7,6],81))
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

const array1 = [1, 2, 3];
console.log(array1.includes(2));