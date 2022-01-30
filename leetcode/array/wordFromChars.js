/*

https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return the sum of lengths of all good strings in words.

Approach: 
- store chars in map with frequence e.g a- 2 , b = 1
- loop over words and for each word check if map has word[i] 

*/
var countCharacters = function(words, chars) {
    
   
};

let words = ["cat","bt","hat","tree"], chars = "atach" //exp 6
console.log(countCharacters(words,chars));

