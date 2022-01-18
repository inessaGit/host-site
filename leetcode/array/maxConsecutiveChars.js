/*
https://leetcode.com/problems/consecutive-characters/
consecutive characters:
The power of the string is the maximum length of a non-empty 
substring that contains only one unique character.
Given a string s, return the power of s.

-sliding window pattern 

*/
var maxPower = function(s) {
    // Taking max & count as 1 since minimum length of substring can be 1
    let counter =1;
    let max=1;
    let n=s.length;
     
    for (let i=0;i<n-1;i++){
        if(s[i]==s[i+1]){
          counter++;
        }
        else {
            counter=1;
        }
        max=Math.max(max,counter);
    }
    //// in case the maxLength is at the end , like "aa"
    return Math.max(max,counter); 
};

let s = "eea"; //exp 2 
let s2  = "abbcccddddeeeeedcba"; //exp5 
console.log(maxPower(s));
console.log(maxPower(s2));