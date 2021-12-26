/*
https://www.educative.io/module/lesson/data-structures-in-javascript/qZ9K1LGnDRR
Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.

Use three-pointers​.
*/

let findLeastCommonNumber = function(a, b, c) {
    
    let p1=0;
    let p2=0;
    let p3 =0;
    let smallest =0;
    //compare length of each array and find smallest 
    // iterate over smallest length 
    //if el exists in all arrays find Math.min 

    let length =Math.min(a.length,b.length,c.length)
    for (let i=0;i<length;i++){
        if (b.includes(a[i])===true&&c.includes(a[i])===true){
            if(smallest>a[i]){
                smallest=a[i]
                return smallest;
            }
        }
    }
     return -1;
   };


let a=[6,7,10,25,30,63,64]
let b=[0,4,5,6,7,8,50]
let c =[1,6,10,14]; 

console.log(findLeastCommonNumber(a,b,c))