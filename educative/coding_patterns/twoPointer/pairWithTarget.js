/*
https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP

https://leetcode.com/submissions/detail/611100471/


Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Approach: 
- key is that array is sorted. 
- use two pointers ; start =0; end =arr.length-1; 
- sum =arr[start]+arr[end]
  -- if sum ==target means found it => return [start,end]
  --- if sum >  target means need smaller num end-=1; 
    - - if sum < target means need larger num start+=1; 

      -- otherwise return [-1,-1]
*/

//using while loop 
function pair_with_target_sum1(arr, targetSum) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [left, right];
      }
  
      if (targetSum > currentSum) {
        left += 1; // we need a pair with a bigger sum
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
    return [-1, -1];
  }
  console.log(pair_with_target_sum1([3,2,4],6));
  console.log(pair_with_target_sum1([2, 5, 9, 11], 11));

  //using for loop 
const pair_with_target_sum2 = function(arr, target_sum) {
  
    let start =0;
    let end = arr.length-1; 
    for (let i=0;i<arr.length;i++){
        let sum =arr[start]+arr[end];
        if (sum==target_sum){
            console.log(`start=${start}, end=${end}`)
            return [start,end];
        }
        else if (sum>target_sum){
            end-=1; //try with smaller num
        }
        else {
            start+=1; 
        }
    }
    return [-1,-1]
}

pair_with_targetsum2([1,2,3,4,6], 6)	; //exp 1,3
pair_with_targetsum2([2,5,9,11], 11)	//exp 0,2