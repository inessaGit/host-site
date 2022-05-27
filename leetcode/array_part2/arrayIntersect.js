
/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

reduce()
- pv : on the first call pv =value of nums[0] = 1 
- cv : on the first call cv= value of nums[1] =2 
*/
var intersect1 = function(nums1, nums2, map1 = {}) {
    nums1.map(n => map1[n] = (map1[n] + 1) || 1);
    return nums2.filter(n => map1[n] ? map1[n]-- : false);
  };


var intersect = function(nums1, nums2) {
   let obj ={}; //object 
   let res =nums1.map(el=>obj[el]+1 || 1);

   console.log(`res=${res}`)
}
let nums1 =[1,2,1,2,3]
let nums2=[2,2]
let nums3 =[1,2,1,2,3]

intersect(nums1,nums2);

//console.log(nums1==nums2)
console.log(nums1==nums3) //false 
//If all you need is to see if two arrays have the same items and they are in the same order, try this:
console.log(nums1.toString()==nums3.toString()); //true 