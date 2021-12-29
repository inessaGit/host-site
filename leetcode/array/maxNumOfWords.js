/*
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

*/

var mostWordsFound = function(sentences) {
    let counter=0;
    for (let sentence of sentences){
        length=sentence.split(" ").length;
        //console.log(sentence)
        length>=counter?counter=length:counter=counter;
        
        
    }
    return counter;
};

let sentences1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
let sentences = ["please wait", "continue to fight", "continue to win"];
console.log(mostWordsFound(sentences1));