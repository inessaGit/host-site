/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

*/

function duplicates(array){
    let ans =0;
    if (array.length<=1) return ans; 
    // let set = new Set(array);  cannot handle dup pairs of dups e.g [0,0,0,0]
    let map = new Map(); 
   for (let el of array){
      map.set(el,map.has(el)? map.get(el)+1:1);
   }
   for (let [k,v] of map.entries()){
       v>1 ? ans+=Math.floor(v/2): ans;
   } 
   //count map values where v>1 ans+=Math.floor(v:2)
    console.log(`ans=${ans}`) ;
    return ans; 
    }

    function duplicates1(array){
          if (newArray.length <= 1) return 0;
          const newArray = array.sort((a,b) => a-b);
          let count = 0;
          for (let i = 0; i < newArray.length ; i++) {
            if (newArray[i] == newArray[i+1]) {
              count++;
              i++;
            }
          }
          return count;
        }
    let a =[1, 2, 5, 6, 5, 2] ; //exp 2
    duplicates(a);
    duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]); //exp 4
    duplicates([0, 0, 0, 0, 0, 0, 0]); //exp 3 

