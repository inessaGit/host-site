/*
https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1183/
*/

var reverseString = function(s) {
    s=Array.from(s).reverse().join("");

    console.log(s);
};

reverseString("hello");