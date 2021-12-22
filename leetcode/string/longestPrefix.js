/*
https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1162/

Write a function to find the longest common prefix string 
amongst an array of strings.
If there is no common prefix, return an empty string "".
Input: strs = ["flower","flow","flight"]
Output: "fl"

https://leetcode.com/problems/longest-common-prefix/solution/

Case 1:str[i].length=0 
Case 2: str[i].length >0
 -- find the shortest 
*/
var longestCommonPrefix1 = function(strs) {
    let result="empty";
    let min=0;
 if (strs===undefined||strs.lenght===0) return result;
 
 let prefix =strs.reduce((prev,next)=>{
    let i=0;
    while(prev[i]&&next[i]&&next[i]===next[i])i++;
    return prev.slice(0,i);
 });
    console.log(prefix);

}

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };

  let b=[1,2,4];
  console.log(Math.min(b)); //NaN
  console.log(Math.min(...b)) //Need to SPREAD array first 

let strs = ["dog","racecar","car"]
let a =["cat","dog","cat","c"]
let ans =a.map((el)=>{
   return el.length;
});

console.log(ans);
longestCommonPrefix(strs);

