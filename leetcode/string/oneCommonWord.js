/*
https://leetcode.com/problems/count-common-words-with-one-occurrence/submissions/

*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 
 Approach : 
 - filter both arrays and store only unique els
 - loop over array1 and increment counter if indexOf el >=0
 */
 var countWords = function(words1, words2) {
    let arr = words1.filter((el)=>{
        return words1.indexOf(el)==words1.lastIndexOf(el); //only unique el
    });
    
       let arr2 = words2.filter((el)=>{
        return words2.indexOf(el)==words2.lastIndexOf(el); //only unique el
    });
    
     console.log (`arr= ${arr}`);
    console.log (arr2); 
    let n = arr.length;
    let counter =0;
    
    for (let el of arr){
        if (arr2.indexOf(el)>=0){
            counter++;
        }
    }
    return counter; 
};

var countWords2 = function(words1, words2) {
    const map1 = new Map();
    const map2 = new Map();
    let count = 0;
    
    for (const word of words1) {
        map1.set(word, map1.get(word) + 1 || 1);
    }
    for (const word of words2) {
        map2.set(word, map2.get(word) + 1 || 1);
    }
    for (const word of words1) {
        if (map1.get(word) === 1 && map2.get(word) === 1) count++;
    }
    
    return count;
};

let w= ["leetcode","is","amazing","as","is"] ;
let w2= ["amazing","leetcode","is"] ;

countWords(w,w2) ;