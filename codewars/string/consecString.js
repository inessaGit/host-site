/*
https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

Approach : 
1. create pairs using for loop
2. 
*/
function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
       let longStr = '';
    let newStr = '';
    for (let i = 0; i < strarr.length; i++){
       newStr = strarr.slice(i, i+k);
       if (newStr.join('').length > longStr.length ){
          longStr = newStr.join('');
       }
    }
    return longStr;
 }


 function longestConsec1(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return "";
    }
    
    return strarr
    .map((value, index) => (
      strarr.slice(index, index+k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
    
}

  let nums = [1,2,3,4,5,6] 
  console.log(nums.slice(0,3))
  longestConsec(nums,3); ////[1,2,3  3,4,5  5,6]

  //longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // "abigailtheta")