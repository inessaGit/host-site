/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/xV2WB4rl0lq

https://raddevon.com/articles/sort-array-numbers-javascript/
*/

function mergeArrays(arr1, arr2) {
    
    let merged =[...arr1,...arr2];
    merged = merged.sort(a,b=> a-b);

    console.log(merged);
    return merged;
}

mergeArrays([-133,-100,0,4],[-2000,2000]); 
//exp: -2000,-133,-100,0,4,2000	 
//actual -100,-133,-2000,0,2000,4	


function customSort(nums){
    // Sort an array of numbers 
let numbers = [5, 13, 1, 44, 32, 15, 500]

// Lowest to highest
let lowestToHighest = nums.sort((a, b) => a - b);
console.log(lowestToHighest); 
//Output: [1,5,13,15,32,44,500]

//Highest to lowest
let highestToLowest = nums.sort((a, b) => b-a);
console.log(highestToLowest); 
//Output: [500,44,32,15,13,5,1]
}
