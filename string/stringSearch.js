/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
*/

var strStr = function(haystack, needle) {
    const regex=new RegExp(needle);
    let result =haystack.search(regex);
    return result;
};