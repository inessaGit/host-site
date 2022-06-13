/*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

. - a "dot" indicates any character
* - means "0 or more instances of the preceding regex token"

Approach: 
- using String.split
- using positive lookahead (?=[pattern]) to detect capital letters but exclude the letter from capture group
For example, /\w+(?=\t)/ matches a word followed by a tab, without including the tab in $&.
- in this kata 
let regex = (/(?=[A-Z])/)
would match capital letter but will exclude it from the capturing group 

Approach 2: 
- using String.replace 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  if(!string) return "";
  let res = string.split(/(?=[A-Z])/).join(" ");
  console.log(res)
  
}
//Where n is a positive integer less than 100, inserts the nth parenthesized submatch string,
function solution1(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
//$& means Inserts the matched substring
const solution2 = string => string.replace(/[A-Z]/g, ' $&');

let s ="camelCasing";
solution(s);