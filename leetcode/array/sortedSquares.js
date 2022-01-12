/*
https://leetcode.com/problems/squares-of-a-sorted-array/

Example1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

//Approch 1 Brute force : square and sort . O(NlogN)
var sortedSquares = function(nums) {
    nums=nums.map((el)=>{
        return Math.pow(el,2)
    })
   // console.log(nums)
    nums=nums.sort((a,b)=>{
        return (a-b)
    });
    console.log(nums)
    return nums;
};

/*Approach 2 two pointer. Because array can have neg numbers -> their squares could be larger than pos

- P1 points to the beginning of array 
- p2 points to the end (nums.length-1)
- p3 points to the end of new arr ans. 
 -- compare ele and whichever greater put in the ans array . Decrement corresponding pointer
*/
var sortedSquares2 =function (nums){
    let n=nums.length;
    let ans = new Array(n).fill(0);

    let p1 = 0;
    let p2 = n-1; 

    //fill ans array from the back
    for (let i=n-1; i>=0;i--){
       if(Math.abs(nums[p1])>nums[p2]){
           //store nums[p1]*nums[p1];
           ans[i]=Math.pow(nums[p1],2);
          //move pointer ;
          p1++;
       }
       else {
        ans[i]=Math.pow(nums[p2],2);
        p2--; 
       }
    }
    return ans;
}
let a=[-4,-1,0,3,10];
console.log(sortedSquares2(a));

