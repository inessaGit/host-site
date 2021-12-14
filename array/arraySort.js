'use strict';

/**
 * https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * --sort given array 
 *  return (array [array.length -2]) WRONG!
 * - - - need to handle (remove duplicates!)
 *  approach   1: dump array into Set ? but then Set is NOT ordered
*   Return the second largest number in the array.

*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function    
    function compareNumbers(a,b){
        return a-b; 
    }
    
//A. dump array into Set to remove duplicates ; just pass it to Set constructor 
let set1 = new Set(nums); 
      // console.log (set1)

//B. spread into array 
nums=[...set1];
//C sort using comparator function 
        nums=nums.sort(compareNumbers);
        let n= nums.length;

  //  console.log(`length= ${n}`)
      //  console.log (nums)
       // console.log(nums[n-2]);
        return (nums[n-2]);

}

let test =[2,3,6,6,5]; 
getSecondLargest(test)