/*
https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

Same as leetcode findPivot problem
https://leetcode.com/problems/find-pivot-index/

You are going to be given an array of integers. 
Your job is to take that array and find 
the lowest index N where the sum of the integers to the left of N is
 equal to the sum of the integers to the right of N. 
 If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr) {
    let result = -1;
    for (let i = 1; i < arr.length; i++) {
      const left = arr.slice(0, i).reduce((curr, next) => curr + next, 0);
      const right = arr.slice(i+1).reduce((curr, next) => curr + next, 0);
      
      if (left === right) {
        result = i;
      }
    }
    
    return result;
  }

  
  function findEvenIndex2(arr)
  {
    var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
    for(var i = 0; i < arr.length; i++) {
        if(i > 0) left += arr[i-1];
        right -= arr[i];
        
        if(left == right) return i;
    }
    
    return -1;
  }
function findEvenIndex1(arr)
{
    let leftSum=0;
    let sum=arr.reduce((pv,cv)=>{return pv+cv},0); //calc total sum 
    let n = arr.length; 
    for (let i=0; i<n; i++){
        if (leftSum==sum-leftSum-arr[i])
            return i; 
        leftSum+=arr[i];
    }
    return -1; 
}

let a=[20,10,-80,10,10,15,35]; //exp 0 index 
let b=[1,2,3,4,5,6] //exp -1 
console.log(findEvenIndex(b));