/*
https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

*/

const max_sub_array_of_size_k = function(k, arr) {
   let sum =0;
   let maxSum=0; 
   let windowStart=0;

   for (let windowEnd=0;windowEnd<arr.length;windowEnd++){
       sum+=arr[windowEnd];
       if (windowEnd>=k-1){
           maxSum=Math.max(maxSum,sum);
           //take out el going out
           sum-=arr[windowStart];
           windowStart+=1; //slide window
       }
   }
   return maxSum;
};

  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);