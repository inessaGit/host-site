/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/7nYN4DBMBDA

Given an array, return an array where each index stores the product of all numbers 
in the array except the number at the index itself.
The size of array should be greater or equal to 2 
*/

function findProduct(arr){

    let productized =[];
    let product =1; //multiply by 1 

    for (let i=0; i<arr.length; i++){
        if(arr.length>=2){
         product*=arr[i];
         
        }
    }
}


//[1,2,3,4] Output [24,12,8,6]