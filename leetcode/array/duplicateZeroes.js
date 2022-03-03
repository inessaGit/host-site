/*
https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

Input: arr = [1,0,2,3,0,4,5,0]
Output:      [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

*/

var duplicateZeros = function(arr) {
    let n= arr.length; 

    for (let i =0;i<n;i++){
        if (arr[i]==0){
           arr.splice(i,0,0); //insert at index i, remove zero elements, insert zero;
           i+=1; // move index by 1 
           arr.pop(); //remove last el to keep length the same 
        }
    }
    console.log(arr);
};

let arr =[1,0,2,3,0,4,5,0];
console.log(duplicateZeros(arr));


