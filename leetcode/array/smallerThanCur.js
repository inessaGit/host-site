/*
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/

var smallerNumbersThanCurrent = function(nums) {
    let res =[];
    for (let el of nums){
        res.push(isSmaller(nums,el))
    }
   
   function isSmaller(arr,num){
      let counter =0;
      for (let el of arr){
          if (num>el){
              counter++;
          }
      }
      return counter; 
   }
   return res;

};


let nums=[8,1,2,2,3]; //exp Output: [4,0,1,1,3]
console.log(smallerNumbersThanCurrent(nums))
