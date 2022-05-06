/*

https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem?isFullScreen=true
*/

function divisibleSumPairs(n, k, ar) {
    //1. generate pairs using 2 loops and 2 pointers
    //p1 = first pointer starts at 0; i = 2nd pointer is p1+1 
    let p1 =0;
    let counter=0;
    let sum =0;
    while (p1<n){  
        for (let i=p1+1;i<n;i++) {
        sum=ar[p1]+ar[i];
        sum%k==0 ? counter++:counter=counter;
        console.log(`sum=${sum} p1=${p1} i=${i} counter=${counter}` )
        }
        p1++; 
    }
   return counter; 
}

let n=5;
let k= 2;
let ar=[5,9,10,7,4];

console.log(divisibleSumPairs(n,k,ar));
