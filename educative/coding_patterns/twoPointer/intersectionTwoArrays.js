/*
\
https://leetcode.com/problems/intersection-of-two-arrays/
https://leetcode.com/problems/valid-palindrome-ii/
Given two integer arrays nums1 and nums2, return an array of their intersection.
 Each element in the result must be unique and you may return the result in any order.

 - Step 1: sort both arays 
 - Step 2: run while loop with 2 pointers comparing values 
*/

var intersection = function(nums1, nums2) {
    let p1=nums1.length-1;
    let p2=nums2.length-1;
    let set = new Set();
    
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);

   
    while (p1>=0 && p2>=0){
    if (nums1[p1]===nums2[p2]){
        //decrement both
        set.add(nums1[p1]);
        p1--;
        p2--; 
    }
    //why does it have to be less than  ? because starting from the end (array sorted)
        else if (nums1[p1]<nums2[p2]){
            //decrement p2
            p2--;
        }
        else  {
            p1--;
    }
    console.log(set);
}
  
    //console.log(set);
    return Array.from(set); 
}

let nums1 = [4,9,5];
let  nums2 = [9,4,9,8,4];
intersection(nums1,nums2);