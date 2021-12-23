/*
https://leetcode.com/problems/merge-sorted-array/

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. To accommodate this, 
nums1 has a length of m + n, where the first m elements denote 
the elements that should be merged, and the last n elements are set to 0 
and should be ignored. nums2 has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
let merge1=function(arr1,arr2){

    let merged =[...arr1,...arr2];
   // return merged.sort((a,b)=>{return a-b});
//because the body of arrow function is only one return statement can ommit word return 
   return merged.sort((a,b)=>a-b);
}

//3 pointers : 2 pointers in nums1, 1 pointer in nums2
//compare values at p1 and p2 put the larger value at p_finished in
//nums1  and decrement the respective indexes.


var merge = function(nums1, m, nums2, n) {
    if(m==0)return nums2;
    if (n==0) return nums1;

    //we want the start position of the final elements
   let p1=m-1,p2=n-1, p_finished=m+n-1;
    //use two pointers inside of while loop ; start to fill nums1 from the END
    //works only when n==m
    while(p2>=0){
      nums1[p_finished--] = (nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--];
    }
    console.log(nums1)
};

let a=[1,2,3,4,0,0];
let b=[2,5,6];
let c=[6,8]
let ans=merge(a,4,c,2);
console.log(ans)