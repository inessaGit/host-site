/*
https://leetcode.com/problems/two-out-of-three/
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
*/

var twoOutOfThree = function(nums1, nums2, nums3) {
    let res=[];
    let set1=new Set(nums1);
    let set2=new Set(nums2);
    let set3=new Set(nums3);
    let set_all=new Set([...set1, ...set2, ...set3]);
    
    for (let val of set_all){
        set1.has(val)&&set2.has(val)?res.push(val):
        set1.has(val)&&set3.has(val)?res.push(val):
        set2.has(val)&&set3.has(val)?res.push(val):res.push(null);
    }

    return res.filter(el=>el!=null);
};

//[3,1][2,3] [1,2]
let nums1 = [1,3], nums2 = [2,3], nums3 = [1,2];
console.log(twoOutOfThree(nums1,nums2,nums3));

