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
    let answer =[];
    let map=new Map();

    if (n==1)return 0;
       //Count all occurences: brute force
    ar.forEach((el)=>{
    if(map.has(el)==false){
        map.set(el,1)
    }
    else{
        map.set(el,map.get(el)+1);
    }
 });

    function countPairs(n){ //n=int
        let numOfPairs=0;
        numOfPairs=Math.floor(n/2); 
         return numOfPairs;
    }

//for each value in the map call count pairs
let allPairs=[];
map.forEach((value)=>
{
     allPairs.push(countPairs(value));
}); 

console.log(allPairs);

// filter out allPairs >0 and store it in the same array
allPairs=allPairs.filter((el)=>{
    return el>0;
});
  
  //Run array.reduce to sum all the values 

let sum =allPairs.reduce((prevValue,curValue)=>{
    return prevValue+curValue;
},0);

return sum; 
}


