/*
Reverse Words in a Sentence
https://www.educative.io/module/lesson/data-structures-in-javascript/3YmYvqV7VNO

*/

let reverseWords = function(sentence) {     // sentence here is an array of characters
     
    let n=Array.from(sentence).reverse().join("");
    console.log(n)
    return sentence;
  };

   let s="We love Javascript";
   let m ="Hello World"
  reverseWords(s)	;