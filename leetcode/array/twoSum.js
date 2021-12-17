/*
https://leetcode.com/problems/two-sum/

*/
//Time complexity is O(n).


var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {

//store actual number as key; value =index of it;
            map.set(nums[i], i);
        }
    }
	return [];
};
let a2=[3,3]
let t1=6; 

twoSum(a2,t1); 