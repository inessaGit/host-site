/*
https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 modificaition of binary search:
 - high =mid (no need for high=mid-1)
 - default return low (instead of -1)
 - high should be nums.length (-for the case when input is an array of one element)

 nums=[1], target =2 
*/


var searchInsert = function(nums, target) {
  if (nums.length==0||nums==null) return -1;

  let low =0;
  let high =nums.length
  
  while(low<high){  
    let mid = Math.floor(low+(high-low)/2);
    if (nums[high]<target)return high;
    else if(target==nums[mid]){
    // console.log(`mid=${mid}`)
     return mid;
      }
      else if(target>nums[mid]){
          //search in the right half =>move low to the right 
          low =mid+1; 
      }
      else{
          //search in the left half =>move high to the left
          high =mid; //why not high=mid-1 
      }
  }
    return low;
};

let m =[1,3,5,6]
console.log(searchInsert(m,2));