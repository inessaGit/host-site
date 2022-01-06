/*
https://leetcode.com/problems/merge-strings-alternately/submissions/
*/
var mergeAlternately = function(word1, word2) {
    let w1=word1.split("");
    let w2=word2.split("");
    let merged=[];
    let index=0;
    let n=w1.length; //eg 2
    let m= w2.length; //4
    
    while(n>0 || m>0){
        merged.push(w1[index]);
        merged.push(w2[index]);
        index++;
        n--; //1  
        m--; //3 
    }
   // console.log(merged)
    return merged.join("")
};
let w1='ab',w2='pqrs';
console.log(mergeAlternately(w1,w2)) //exp "apbqrs"


let k=2,l=4;
while(k>0 && l>0){ //runs only 2 times stops when k==0 ;because loop needs both conditions true
    k--;
    l--;
    console.log(`while loop ${k} ${l}`);

}

let s="hello";
console.log(s.replaceAll('h',"")); //ello
console.log(s);//hello

