/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true

in progress TBC
*/

function birthday(s, d, m) {
 let n=s.length; 
 let sum=0; 
 let counter =0;
 let p1=0 ;

    for (let i=0;i<n;i++){
       sum+= s[i];
       if (i>=m-1){
           if (sum==d){
               counter++;
               i=m; //slide window 
           }
           else {
             i=p1++;  //slide window 
           }
           sum=0; //reset sum
       }
    }
    return counter; 
}



let s=[2,2,1,3,2];
let d=4;
let m=2; 
// array length =m = 2 and sum of its elements should be =d =4
//should return how many CONTIGUOUS subarrays will satisfy the condition 
console.log(birthday(s,d,m))