/*
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
 Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

 https://www.educative.io/courses/grokking-the-coding-interview/JPnp17NYXE9
the numbers are ranged from ‘0’ to ‘n’, compared to ‘1’ to ‘n’ in the Cyclic Sort.

 - each number should be equal to its index, 
 compared to index - 1 in the Cyclic Sort. Therefore => nums[i] == nums[nums[i]]

 - indexes go from 0 to n-1 ; so element n should be ignored => adding condition nums[i]<n  to 
 the while loop 
*/


const find_missing_number = function(nums) {
let i =0;
let n =nums.length;

while (i<n){
    let j = nums[i];
    if (nums[i]<n && nums[i]!=nums[j]){
        //swap 
        [nums[i],nums[j]]=[nums[j],nums[i]]; 
    }
    else {
        i++; //move to the next el
    }
}
   for (let i =0;i<n;i++){
       if (nums[i]!=i) return i;
   }
    return n;
  };
  

  console.log (find_missing_number([0,1]))
//console.log(find_missing_number([4, 0, 3, 1]));
//console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));