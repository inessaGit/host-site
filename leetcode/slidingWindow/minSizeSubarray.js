
/*
https://leetcode.com/problems/minimum-size-subarray-sum/
https://www.educative.io/courses/grokking-the-coding-interview/7XMlMEQPnnQ


*/
var minSubArrayLen = function(target, nums) {
    let  windowStart=0;
    let sum=0;
    let smallest_window=0; // should be 0 ; if undefined returns NaN;
    let n=target.length; 
    
    for (let windowEnd=0; windowEnd<n; windowEnd++){
      sum+=nums[windowEnd];
      console.log(`nums[windowEnd]=${nums[windowEnd]}`);
      console.log(sum);

      while (sum>=target){
        //the length of current subarray = windowEnd-windowStart+1
        smallest_window = Math.min(smallest_window, windowEnd - windowStart + 1);
        //slide 
        sum-=nums[windowStart];
        windowStart+=1;
      }
      //console.log(sum);
    }
     
    return smallest_window; 
};

//Input: target = 7, nums = [2,3,1,2,4,3]
let t =7;
let n=[2,3,1,2,4,3];

console.log(minSubArrayLen(t,n));