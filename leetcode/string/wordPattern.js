
/*
https://leetcode.com/problems/word-pattern/submissions/
*/

var wordPattern = function(pattern, s) {
    let arr =s.split(' ');
    let map = new Map(); 
    let n =arr.length; 
    
    for (let i=0;i <n;i++){
        if(!map.has(pattern[i])){
            map.set(pattern[i],arr[i]);
        }
        else if (map.get(pattern[i])!=arr[i]){
            console.log(`pattern[i]=${pattern[i]} arr[i]=${arr[i]}`)
            return false ;
        }
    }
    console.log(map);
    return map.size==arr.length;
};

let p= "abba";
let s="dog cat cat fish";

let s2="dog dog dog dog"
console.log(wordPattern(p,s));
console.log(wordPattern(p,s2));