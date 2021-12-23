/*
https://leetcode.com/problems/valid-palindrome/

Constraints : only printable ASCII characters
Printable characters include 
letters, digits, and special punctuation such as commas, brackets, and question marks

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet


*/

var isPalindrome = function(s) {
    
    if(s==null ||s.length==0)return false;
    if (s==" ")return true;
    const regexp=/^[a-z0-9]/g;
    s=s.replace(regexp,"");
    console.log(s)
    const arr=[...s].reverse().join("");
    if(s===arr) return true;
    return false;
   
};
let word ="hekllo %%%% + 5 6333_"
let m="."
let s="A man, a plan, a canal: Panama";
console.log(isPalindrome(m))



//console.log(word.replace(/[^a-z0-9]/g,""));