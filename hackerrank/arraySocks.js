/*
https://www.hackerrank.com/challenges/sock-merchant/problem

There is a large pile of socks that must be paired by color. Given an array of integers 
representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example
There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):
-int n: the number of socks in the pile
-int ar[n]: the colors of each sock
Returns
-int: the number of pairs

Approach: 
let answer=[];
let occurrence ; 

- count occurences for each element-> could use array.reduce  ?
  push occurreces to map <key, occurence> ;

return answer.length; 
*/
function sockMerchant(n, ar) {
    // Write your code here
    let map  = new Map();
    
    for (let i=0;i<n;i++){
        map.has(ar[i])? map.set(ar[i],map.get(ar[i])+1) :
        map.set(ar[i],1);
    }
   
   let values = Array.from(map.values());
   let res =0;
   for (let val of values ){
       res+=Math.floor(val/2);
   }
   return res;
}

console.log(   `res=${res}`)