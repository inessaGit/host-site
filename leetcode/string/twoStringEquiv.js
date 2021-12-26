/*
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

*/

var arrayStringsAreEqual = function(word1, word2) {
    if(word1.join("")===word2.join(""))
    return true;

    return false; 
    
};

let word1 = ["ab", "c"], word2 = ["a", "bc"]
let word3= ["abc", "d", "defg"], word4=["abcddefg"];
//console.log(String(word1)) //ab,c
console.log(word1.join(""))//abc

console.log(arrayStringsAreEqual(word3,word4))

