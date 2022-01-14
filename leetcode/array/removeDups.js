/*
https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
such that each unique element appears only once. 
The relative order of the elements should be kept the same.
modifying the input array in-place with O(1) extra memory
*/

// Array is sorted! 
var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[j]) 
            nums[++j] = nums[i];
    }
    console.log(nums)
    return ++j; //the length of the subarray that has no duplicate in it
};

//Array sorted! 
var removeDuplicates2 = function(nums) {
  let i=1;
  let nextNonDup =1; //index of nextNonDup

  while(i<nums.length){
    if(nums[nextNonDup-1]!=nums[i]){
      nums[nextNonDup]=nums[i] //ar[1]=ar[1]
      nextNonDup+=1; //increment counter and move pointer
    }
    i+=1; //increment i
  }
  console.log(nums)
  return nextNonDup; 
};

//console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
 console.log(removeDuplicates([2, 2, 2, 11]));
 console.log(removeDuplicates2([1,1,2]));

 /* REDUCE REMOVE DUPS 
- initial val =empty array
-cur val =myArray[0]
 */
console.log('using reduce to remove dups')
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce((previousValue, currentValue)=> {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)