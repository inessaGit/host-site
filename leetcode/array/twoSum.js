/*
https://leetcode.com/problems/two-sum/
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target

-Array is NOT sorted 
- do not use built in sort() because it will change indexes 
*/
//Time complexity is O(n).

var twoSum1 = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {//store actual number as key; value =index of it;
            map.set(nums[i], i);
        }
    }
	return [];
};

const twoSum2 = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };
//use 2 pointers approch IF array sorted!!; go from start and end until pointers meet
var twoSum = function(nums, target) {
    let start =0;
    let end=nums.length-1;
    nums=nums.sort((a,b)=> (a-b)) ;

   while(start<end){
        let sum=nums[start]+nums[end];   
         if(sum>target){
            //use smaller number aka move pointer end to the left
            end-=1;
           // console.log(`sum>target; sum=${sum} ; end= ${end}`)
        }
        else if(sum<target) {
            //use bigger numser aka move pointer start to the right
            start+=1;
           // console.log(`sum<target; sum=${sum} ; start= ${start}`)
        }
        else {
            // console.log([start,end])
             return [start,end]
         }
    }
    return[-1,-1]
};

let a2=[3,2,4]
let t1=6; 

twoSum([3,2,4],6); //exp [1,2] ->means cannot sort  using built in sort() 
//because sorting would affect indexes
//twoSum([1, 2, 3, 4, 6], 6);
//console.log(twoSum([2, 5, 9, 11], 11));