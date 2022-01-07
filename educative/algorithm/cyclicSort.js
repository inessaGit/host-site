/*
https://www.educative.io/courses/grokking-the-coding-interview/B8qXVqVwDKY

We are given an array containing n objects. 
Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object 
with sequence number 3 was created just before the object with sequence number 4.
*/

function cyclic_sort(nums) {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1; 
      /*
//e.g [4,5,6,3] Iteration 1: nums[i]= 4, j=nums[i]-1; j=4-1; j=3; 
//it should be -1 because index starts at 0 ; 
      */
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1; //move to the next element
      }
    }
    return nums;
  }
  
  
  console.log(cyclic_sort([3, 1, 5, 4, 2]));
  console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
  //console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));

  let a= [2,3];
  let b = [4,5];

  [a[0],a[1]]=[b[0],b[1]];
  console.log(a) //[4, 5]
