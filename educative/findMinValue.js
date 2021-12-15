
/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/RMlvBQ7YRgR


*/

function findMinimum(arr){
 let min ; //leave undefined 
 min =Math.min(...arr); 


 return min; 

}

function findMax (arr){
    let max =Math.max(...arr);
    return max;
}

//solution using built in sort O(nlogn) time
function findMinUsingSort(arr){
    arr.sort((a,b)=>a-b);
    return arr[0]; 
}