/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem
*/

function miniMaxSum(arr) {
    // 1. calculate sum  min =sum-arr[4]; max =sum-arr[0]
    let sum = 0;
    arr.sort((a,b)=> {return a-b});
    arr.forEach (el=>{sum+=el})       

let min =sum-arr[4];
let max=sum-arr[0];
console.log(`${min} ${max}`); 
//        console.log(min+" "+max);

}


//miniMaxSum1([1,3,5,7,9]);//16/24
miniMaxSum([1,2,3,4,5]);//10/24