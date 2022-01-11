
/*
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u'
# from it, and return the new string.
#
# Example 1:
# Input: s = "leetcodeisacommunityforcoders"
# Output: "ltcdscmmntyfrcdrs"
#
# Example 2:
# Input: s = "aeiou"
# Output: ""
*/

//#1 brute force
function removeVowels(s){
  let vowels='aeiou';
  let ans=[];
 
  for (let i=0;i<s.length;i++){
     if (vowels.indexOf(s[i])===-1){
         //consonant 
         ans.push(s[i]);
     }
  }
   // console.log(ans.join(''));
    return ans.join('');
}

let s= "leetcodeisacommunityforcoders"
let exp="ltcdscmmntyfrcdrs";
removeVowels(s);

//approach #2 regex
function removeVowels2(s){
// [] A character class. Matches any one of the enclosed characters
//let re = new RegExp('[aeiou]','ig') //i flag means case insensitive
//let re = new RegExp(/[aeiouy]/,'ig') //i flag means case insensitive
let regexpVowels = /[aeiouy]/g; //
let regexpNotVowels = /[^aeiouy]/g; //

let ans =s.replace(regexpVowels,"");
console.log(ans);
}

let s1="abbcdeiouy";
removeVowels2(s1);
let string ="hello I am here"
//Using regex and array.map function 
string = string.split("").map(x=>x. replace( /[aeiou]/ig, '' )).join('');
console.log(string);
