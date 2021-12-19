/*
https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ

Given an array of positive numbers and a positive number ‘S,’ 
find the length of the smallest contiguous subarray 
whose sum is greater than or equal to ‘S’. 
Return 0 if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3 [3,4,1]

First, we will add-up elements from the beginning of the array until their sum becomes greater than or equal to ‘S.’
These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to ‘S.’ We will remember the length of this window as the smallest window so far.
After this, we will keep adding one element in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
In each step, we will also try to shrink the window from the beginning. We will shrink the window until the window’s sum is smaller than ‘S’ again. This is needed as we intend to find the smallest window. This shrinking will also happen in multiple steps; in each step, we will do two things:
Check if the current window length is the smallest so far, and if so, remember its length.
Subtract the first element of the window from the running sum to shrink the sliding window.


*/

const smallest_subarray_with_given_sum = function(s, arr) {
    let  windowStart=0;
    let sum=0;
    let smallest_window=Infinity// should be infinity ; if undefined returns NaN;

    for (let windowEnd=0;windowEnd<arr.length;windowEnd++){
      sum+=arr[windowEnd];
      while (sum>=s){
                  //the length of current subarray = windowEnd-windowStart+1
        smallest_window = Math.min(smallest_window, windowEnd - windowStart + 1);
                  //slide 
        sum-=arr[windowStart];
        windowStart+=1;
      }
       
    }
     if (smallest_window==Infinity){
         return 0;
     }

    return smallest_window; 
  };
  
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
