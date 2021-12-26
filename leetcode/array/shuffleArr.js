/*
https://leetcode.com/problems/shuffle-the-array/

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
*/

var shuffle = function(nums, n) {
    //split where n -> store x in x arr; store y in y arr; merge arr in for loop 

    let x_arr=nums.slice(0,n); //end excl n
    let y_arr=nums.slice(n); //start including n
    let merged =[];
    for (let i=0;i<x_arr.length;i++){
       merged.push(x_arr[i]);
       merged.push(y_arr[i]);
    }
    return merged; 
};

var shuffle1 = function(nums, n) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(nums[i],nums[i+n]);
    }
    return res;
};
let nums =[2,5,1,3,4,7];
console.log(shuffle(nums,3));

var shuffle2= function(nums, n) {
    // input : [x1 , x2, x3 , y1, y2, y3]
    //N1: loops only till LESS THAN N 
    //N2: nums[i]=nums[n+i]  smart
    for(let i = 0; i < n; i++){
        nums[i] += nums[n + i] * 10000;
    }
   // at this point nums = [x1y1, x2y2, x3y3, y1, y2, y3].
         // we fill in the array values from the end, so as not to overwrite the calculated numbers in previous step
      // at the end of one iteration nums will be [x1y1, x2y2, x3y3, y1, x3, y3 ]

      for(let i = n - 1; i >= 0; i--){
        nums[2 * i + 1] = nums[i] / 10000;
        nums[2 * i] = nums[i] % 10000;
    }
    return nums;
};

