/*

https://leetcode.com/problems/maximum-number-of-words-you-can-type/

- break string into array of words store length of it 
- go over array if brokenLetters.includes any letter from word deduct 
from stored length and move to next word

Constraints say that text has only lower case letters 
*/

var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(' '); //arrays of words
    let broken = brokenLetters.split(''); //array of distint chars 
    let count = words.length ; 


    for (let word of words){
       for (let ch of broken){
           if (word.includes(ch)){
               count--; //deduct count 
               break; //move out of the loop for broken 
           }
       }
    }
    console.log(count); 
    return count ;
};


let text = "leet code";
let brokenLetters = "lt"; //exp 1  We cannot type "leet" because the 'l' and 't' keys are broken.
canBeTypedWords(text,brokenLetters);