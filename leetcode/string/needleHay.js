/*
https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1161/

Implement strStr().
Return the index of the first occurrence of needle in haystack, 
Return -1 if needle is not part of haystack
Return 0 if string empty

Clarification:
For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().

Input: haystack = "hello", needle = "ll"
Output: 2
 
*/

var strStr = function(haystack, needle) {
    const regex=new RegExp(needle);
    let result =haystack.search(regex);
    return result;
};