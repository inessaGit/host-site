/*
 move all zeroes  ; similar to rotate array left by n rotations 
https://leetcode.com/problems/move-zeroes/
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array
https://www.educative.io/module/lesson/data-structures-in-javascript/7n3Mqlq5XXr
Move zeroes to the left 
*/

var moveZeroesRight = function(nums) {
    var idx = 0;
    let n =nums.length;
    for (let i = 0; i < n; i++) {
      if (nums[i] !== 0) {
        nums[idx] = nums[i];
        if (idx != i) {
            nums[i] =0;
        }
        idx++;
      }
    }
    return nums;
};
//similar 
var moveZeroesRight2=function(nums){
 let j=0;
 let n =nums.length;

 for (let i=0;i<n;i++){
    if (nums[i]!=0){
        let temp = nums[j];
        nums[j]=nums[i];
        nums[i]=temp;
        j++; 
        console.log(`i=${i} j=${j} nums=${nums}`);
    }
}
 return nums; 
}

//start from the end of nums; if nums[i] is not 0 swap 
var moveZeroesLeft = function(nums){
    let length = nums.length;
    let j= length-1; //last el
    //[0,1,2,0,3,0];
    for (let i=length-1;i>=0; i--){
        if(nums[i]!=0){
            let temp =nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            j--;
        }
    }
    return nums;
}
let nums = [0,1,0,3,0,12]; //exp [1,3,12,0,0];
//console.log(moveZeroesRight(nums));
let nums2=[0,1,2,0,3,0];
//console.log(moveZeroesRight2(nums2));
console.log(moveZeroesLeft(nums2));