/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
https://www.hackerrank.com/challenges/js10-regexp-1/topics/javascript-regex


const re = /ab+c/
-  matches the character a, followed by one or more instances of the character b, 
followed by the character c.

*/

var strStr = function(haystack, needle) {
    const regex=new RegExp(needle);
    let result =haystack.search(regex);
    return result;
};

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re =/\d+/g; // \d" means a digit , and "\d+" means one or more digits. 
    //'g' means to match all the occurrences, if it's not there it only matches the first occurence, 

let re1=new RegExp('\\d+', 'g');//diff way to declare 

    return re;
}

function test(){
    let s ="abcabc"
   // let m=s.slice(0,5); //abcab endIndex BEFORE which to end extraction 
   let m=s.slice(0,6);
    console.log(m)
}

test();