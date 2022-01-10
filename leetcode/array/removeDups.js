/*
https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
modifying the input array in-place with O(1) extra memory
*/

// 33223
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    console.log(nums)
    return ++i;
};

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