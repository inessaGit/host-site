/*
https://leetcode.com/problems/contains-duplicate/
*/

//using map 
var containsDuplicate = function(nums) {
    let map = new Map();
     for (let i=0;i<nums.length;i++){
         map.set(nums[i],i);
     }
     if(map.size!=nums.length){
         return true
     }
     return false; 
     
 };
//using set 
 var containsDuplicate1 = function(nums) {
    let set = new Set(nums);
    if (set.size!=nums.length)return true;
      else return false;
      
  };