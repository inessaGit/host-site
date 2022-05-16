/*

https://leetcode.com/problems/sign-of-the-product-of-an-array/
There is a function signFunc(x) that returns:
1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/
var arraySign = function(nums) {
    //if even one el is 0 then product will be 0 
    //if odd number of - then product will be negative 
    //if all positive OR if even num negative then pos 
    let ans =0; 
    let neg_sign =0; 
    for (let el of nums){
        if(el==0)  return ans;
        el<0 ? neg_sign++ : neg_sign;
    }
     neg_sign%2==1 ? ans=-1 : ans=1;

    console.log(`neg_sign=${neg_sign} ans=${ans}`);
    return ans ;
};

let nums = [-1,-2,-3,-4,3,2,1]; //exp 1 
let nums2 = [1,5,0,2,-3]; //exp 0 
let nums3 = [-1,1,-1,1,-1] // exp -1 

//arraySign(nums);
arraySign(nums2);
arraySign(nums3);