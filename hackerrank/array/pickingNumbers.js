
/*
Given an array of integers, find the longest subarray where 
the absolute difference between any two elements is less than or equal to 1.

https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem?isFullScreen=true
*/

function pickingNumbers(a) {
    let n = a.length; 
    let j =1; 
    let counter =1; 
    let max_counter=1; 

    for (let i=0;i<n;i++){
       if (Math.abs(a[j]-a[i])<=1 || Math.abs(a[i]-a[j]<=1)){
          counter++; 
          max_counter++ ;
          console.log(`a[i]=${a[i]} a][j]=${a[j]}`)
          console.log(`max_counter=${max_counter} counter=${counter}`);

       }
       else {
          max_counter= Math.max(max_counter,counter);
          counter=1;
       }
       //slide window 
       j++; 
    }
     return max_counter;
}

let a= [4,6,5,3,3,1];
let a1=[98,3,99, 1, 97, 2]
console.log(pickingNumbers(a1)) ;
