/*
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

range  [1, n]
can have dups 
cyclic sort to put el at the right index e.g 1 at 0index, 2 at 1index etc
how to handle dups?? 

*/

var findDisappearedNumbers = function(nums) {
  let start =0; 
  let n =nums.length ; 
  let res =[];
  while (start<n){
      let j =nums[start]-1 ; //index 0 based that s why -1 
      if (nums[start]!=nums[j]){
          //means el is not at the correct index need to swap 
          [nums[start],nums[j]]=[nums[j],nums[start]] ;
      }
      else {
          //el at the right index  move interation to the next el 
          start++; 
      }
  }

  let missing =[];
      console.log (nums);
      for (let i=0;i<n;i++){
          if (nums[i]!=i+1){
              res.push(nums[i]); //dup numbers
              missing.push(i+1);
          }
      }
      console.log(`dups `+ res);//found all dups 
      console.log(`missing `+missing);//found all dups 


}

let nums = [1,1];
let nums2 =[4,3,2,7,8,2,3,1]; //[ 1, 2, 3, 4, 3, 2, 7, 8]

//console.log(findDisappearedNumbers(nums));
console.log(findDisappearedNumbers(nums2));

let s = "hello";
let set = new Set([1,2,3]);
set.add(5);
console.log(set); //Set(4) { 1, 2, 3, 5 }

set.delete(3); //Set(4) { 1, 2, 5 }
console.log(set); //Set(4) { 1, 2, 3, 5 }


var set1 = new Set(['apple', 'banana', 'orange']);
var result = set1.delete('cherry');
console.log(set1);
console.log(result); //false delete returns false if el does not exist

set1.delete("apple");
console.log(set1); //Set(2) { 'banana', 'orange' }
