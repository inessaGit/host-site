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
         product*=arr[i]; //product of all elements
         
        }
    }

    for (let i=0; i<arr.length;i++){
        productized.push(product/arr[i]);
    }
    return productized; 
}


//[1,2,3,4] Output [24,12,8,6]

//using map() function (el,index,arr) 
// Inline callback function  map(function(element, index, array){ /* ... */ })
//data.forEach(function(v, i, a) { a[i] = v + 1; }); // data == [2,3,4,5,6]


function findDoubled(arr){
     const doubled= arr.map(el=>el*2);
     return doubled;
}

let doubled2=findDoubled([2,3,4,5]);
console.log(doubled2);