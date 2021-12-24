/*
https://leetcode.com/problems/shuffle-string/
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

*/

var restoreString = function(s, indices) {
    let index=0;
    let chars =s.split("");

    for (let i=0;i<s.length;i++){
      index=indices[i]; 
      chars[index]=s.charAt(i);
    }
    return chars.join("");
};

let s="codeleet";
let indices=[4,5,6,7,0,2,1,3];
console.log(restoreString(s,indices))