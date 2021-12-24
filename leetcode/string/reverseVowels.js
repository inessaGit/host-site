/*
https://leetcode.com/problems/reverse-vowels-of-a-string/
 Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

var reverseVowels=function(s){
    let chars =s.split("")// transform string into array 
    let vowels = "aeiouAEIOU";
    let low =0, high =s.length-1;
    let temp="";

    while(low<high){
        if(!vowels.includes(chars[low])) low++;
        else if (!vowels.includes(chars[high])) high--
        else{
            temp=chars[high];
            chars[high]=chars[low];
            chars[low]=temp;
            low++; 
            high--;
        }
    }
    return chars.join("");
}
/*two pointer approach with while loop and two nested while loops
Use 2 while loops: 
- first while loop will start from beginning and stop at first vowel; 
- second while loop will start from end and stop at first vowel from end.
Swap the start and end indexes (vowels)
*/
var reverseVowels1 = function(s) {
    if(s === null || s.length === 0) {
        return s;
    }
    var chars = s.split(''); //new array
    var low = 0;
    var high = s.length - 1;
    var vowels = "aeiouAEIOU";
    var tmp;
    while(low < high) {
        while(low < high && vowels.indexOf(chars[low]) === -1) {
            console.log(`chars[low]=${chars[low]}`)
            low++;
        }
        
        while(low < high && vowels.indexOf(chars[high]) === -1) {
           // console.log(`chars[high]=${chars[high]}`)
            high--;
        }
        
        tmp = chars[high];
        chars[high] = chars[low];
        chars[low] = tmp;
        //console.log(`chars[high]=${chars[high]} chars[low]=${chars[low]}`)
        low++;
        high--;
    }
    
    return chars.join('');
};

var reverseVowels2 = function(s) {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
};

let s=  "hello"
let m="leetcode"
//reverseVowels1(s);
console.log(reverseVowels(m));