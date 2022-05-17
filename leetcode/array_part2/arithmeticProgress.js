/*
https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

A sequence of numbers is called an arithmetic progression if the difference 
between any two consecutive elements is the same.
Given an array of numbers arr, return true if the array can 
be rearranged to form an arithmetic progression. Otherwise, return false.

Approach:
- sort 
- remember to loop only till arr.length -1 because last el of array + diff will NOT be equal to the next el
*/

var canMakeArithmeticProgression = function(arr) {
    arr.sort ((a,b)=>{return a-b}); 
    let diff = Math.abs(arr[0]-arr[1]); 
    let res = false; 
    
    for (let i=0;i<arr.length-1; i++){
        console.log(`diff=${diff} res=${res}`)
       if (arr[i]+diff!=arr[i+1] )
       return res;
       
    }
    res =true;
    return res;
};

let arr =[3,5,1] ; //exp true [1,3,5]
let arr2=[1,2,4] //exp false 
canMakeArithmeticProgression(arr);
//canMakeArithmeticProgression(arr2);