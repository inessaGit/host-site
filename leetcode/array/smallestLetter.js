/*
https://leetcode.com/problems/find-smallest-letter-greater-than-target/

*/

var nextGreatestLetter = function(letters, target) {
    let n = letters.length; 
    let s=letters.join('');
    let t = target.charCodeAt(0)-97;
    
    if(t <s.charCodeAt(0)-97 || t>=s.charCodeAt(n-1)-97) return letters[0];
    // console.log(s.charCodeAt(0)-97);

    for (let i=0;i<n;i++){
        if (s.charCodeAt(i)-97>t){
            console.log(`>t ${s[i]}`);
            return letters[i];
        }
        //works for start and middle ; letters = ["c","f","j"], target = "c" exp:f
        //does not work for repeated chars or end 
        else if (s.charCodeAt(i)-97==t){
            return letters[i+1];
        }
        
    }
    
};

let t=["c","f","j"];
let x="j"; //exp c

 let t2=["e","e","e","e","n","n"];
let x2="e";   // exp n

console.log(nextGreatestLetter(t,x));
console.log(nextGreatestLetter(t2,x2));
