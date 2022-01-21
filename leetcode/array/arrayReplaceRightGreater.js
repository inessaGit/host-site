/*
https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3259/
Given an array arr, replace every element in that array with the greatest element among the elements to its right, 
and replace the last element with -1.

After doing so, return the array.
*/

var replaceElements = function(arr) {
    let n=arr.length;
    let max=-1;
    
    for(let i=n-1; i>=0;i--){
        let temp=arr[i];
        arr[i]=max;
        max=Math.max(max,temp);
    }
    return arr; 
};
let arr = [17,18,5,4,6,1]
//exp Output: [18,6,6,6,1,-1]

console.log(replaceElements(arr));
