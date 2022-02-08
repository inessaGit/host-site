/*

https://leetcode.com/problems/keep-multiplying-found-values-by-two/
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.

*/
//using sorting O(Nlogn)
var findFinalValue = function(nums, original) {
    let n = nums.length;
    nums.sort((a,b)=>{return a-b});
    
    for (let i=0;i<n;i++){
        if(nums[i]==original){
            original = 2*original ;
        }
    }
    return original ;
};

//using set and loops
var findFinalValue3= function(nums, original) {
    let n = nums.length;
    let set = new Set(nums);
    console.log(set); //set sorted 
    while (set.has(original)){
        original*=2; 
    }
    return original; 
};

let nums=[5,3,6,1,12];//exp 24
console.log(findFinalValue(nums,3));
console.log(findFinalValue3(nums,3));