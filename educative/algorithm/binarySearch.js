/*
https://www.educative.io/courses/coderust-hacking-the-coding-interview/k5qJx

When to use:
- sorted array ;
- need to find specific element 

Return the index of found key ;
Return -1 if not found; 

Case 1: using recursion 
Case 2: without recursion using while loop
*/

let binarySearch = function (a,key){

    let low =0;
    let high =a.length-1; 

    while (low<=high){
        let mid = Math.floor(low+(high-low)/2);
        //if key ===mid return mid.indexOf 
     if (key===a[mid])return mid;
     //e.g key =3 a[mid]=5 shift high to the LEFT 
     else if (key<a[mid]) high =mid-1;
     else low=mid+1; 
    }
    return -1; 

}

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

binarySearch(arr,59);