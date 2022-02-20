
/*
https://leetcode.com/problems/word-pattern/submissions/

public boolean wordPattern(String pattern, String str) {
    String[] words = str.split(" ");
    if (words.length != pattern.length())
        return false;
    Map index = new HashMap();
    for (Integer i=0; i<words.length; ++i)
        if (index.put(pattern.charAt(i), i) != index.put(words[i], i))
            return false;
    return true;
}
*/

//02/02 wrong solution -> change 
var wordPattern = function(pattern, s) {
    let arr =s.split(' ');
    let map = new Map(); 
    let n =arr.length; 
    if (pattern.length !=s.length) return false; 

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