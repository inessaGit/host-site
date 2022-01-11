/*
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

*/

var countGoodSubstrings = function(s) {
    let set= new Set();
    let substr=[];
     let counter=0;
    //windowStart
    let j=0;
    
    for (let i=0;i<s.length;i++){
    set.add(s[i]);
    if(i>=2){
if (set.size===3){
   counter++;}

   set.delete(s[j]);
    j++; //slide window
}

}
     
return counter;
};

let s ="aababcabc";
console.log(countGoodSubstrings(s))