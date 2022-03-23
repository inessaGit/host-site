/*
https://leetcode.com/problems/goat-latin/
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.

- string to array of words 
- iterate over array ; 
- letters could be upper or lowercase! to avoid double for loop better to 
use vowels.includes (word[0]) rather than loop through all vowels 
*/

const assert = require("assert");

var toGoatLatin = function(sentence) {
    let vowels =['a','e','i','o','u', 'A','E','I', 'O','U'];
    const MA = "ma";
    let words = sentence.split(" ");
    let translated = "";
    let index= 1; 
    for (let word of words){
            if (vowels.includes(word[0])){
                word+=MA;
            }
            else {
                let char = word[0]+MA;
                word = word.substring(1);
                word+=char;
            }        
           
        word+=("a").repeat(index);
        index++; 
       // console.log(word);
        translated+=word+" ";
    }
    
    translated=translated.trim();
    console.log(translated);
    return translated;
};

let s = "I speak Goat Latin";
let exp = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"; 

let s2="The quick brown fox jumped over the lazy dog" ;
let exp2="heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa";
toGoatLatin(s2); 
console.log(`expected length =${exp2.length}`);

let s3 ="Over";
toGoatLatin(s3) ;

