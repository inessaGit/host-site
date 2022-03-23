/*
https://leetcode.com/problems/counting-words-with-a-given-prefix/

ou are given an array of strings words and a string pref.
Return the number of strings in words that contain pref as a prefix.
A prefix of a string s is any leading contiguous substring of s.


*/

var prefixCount = function(words, pref) {
    let count = 0 ; 
    for (let word of words){
        if (word.startsWith(pref)){
            count++; 
        }
    }
    return count; 
};

const prefixCount2= (words, pref) => words.filter(word => word.startsWith(pref)).length;

let words = ["pay","attention","practice","attend"];
let pref = "at" ;
prefixCount(words,pref) ; //exp 2 