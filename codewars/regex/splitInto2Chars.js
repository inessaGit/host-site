/*https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

String.match(regex) 
- returns array or null ;
 it is similar to String.split(separator) because it allows to break string into array but
 - String.split always returns an array 
 -If separator is omitted or does not occur in str, the returned array contains one element- entire string.

 Approach2: 
to know the length of the string before using split (2 different regex is used for each of the case: 
    odd-length and even-length
- even length string regex: str.split(/(?=(?:..)*$)/)
- odd length string regex str.split(/(?=(?:..)*.$)/)

?= is a positive lookahead
 What it's saying is that the captured match must be followed 
 by whatever is within the parentheses but that part isn't captured.

 For example, /\w+(?=\t)/ matches a word followed by a tab, without including the tab in $&.

*/
function solution(s){
    let res= (s+"_").match(/.{2}/g)||[]; 
    console.log(res);
    return res; 
 }

 const solution3 = str => ((str+"_").match(/../g)||[]);

 function solutio2(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}

function solution1(str){
    if (!str) return [];
     let n = str.length;
     let odd =/(?=(?:..)*.$)/g
     let even =/(?=(?:..)*$)/g
     let res = [];
     n%2==0 ? res=str.split(even) : res=str.split(odd);
    // let regex =/.{2}/
   //if odd add _ to the last el 
     console.log(res);
   if (n%2!=0 ){
    let temp= res[res.length-1]+"_";
    res.splice((res.length-1),1,temp)
    }
   return res;
   }

solution("abcdef") // ["ab", "cd", "ef"]);
solution("abcdefg") //["ab", "cd", "ef", "g_"]);
solution(""); //[]