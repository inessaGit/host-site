/*
https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

//Approach1:This is using built in js methoods and has to iterate array twice
var removeElement1 = function(nums, val) {
    for (let i=0;i<nums.length;i++){
        if (nums[i]==val){
          nums.splice(i,1,'x')
           // console.log(nums)
        }
    }
   nums=nums.filter((el)=>{
      return el!='x'
   });

  // console.log(nums)

};

//Approach 2: shift all the non target el to the beginning of array
var removeElement = function(nums, val) {
    let m=0;
     for (let i=0;i<nums.length;i++){
         if(nums[i]!=val){
         nums[m]=nums[i]
         m++;
         }
     }
     console.log(nums)
     return m;
};


let b=[0,1,2,2,3,0,4,2]
let a=[3,2,2,3];
removeElement(b,2) // exp [0,1,4,0,3]

