/*
https://leetcode.com/problems/length-of-last-word/
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

var lengthOfLastWord = function(s) {
    if(s==null||s.length==0)return -1; 

    let regexp=/\s+/g; //global search for any whitespace
    s=s.trim().replace(regexp," ");
    //console.log(s)
    let arr=s.split(" ");
    let word = arr[arr.length-1].length;
    return word; 
};

let s = "   fly me   to   the moon  ";
let m="luffy is still joyboy"; //6 
console.log(lengthOfLastWord(m));