/*
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

var firstPalindrome = function(words) {
    for (let word of words){
       let reverse=word.split("").reverse().join("");
       console.log(reverse)
       if (reverse===word){
          return word;
       }
    }
    return "";
};

let words = ["abc","car","ada","racecar","cool"]
console.log(firstPalindrome(words));

let s="hello"
let m ="hello"
//console.log(s===m)