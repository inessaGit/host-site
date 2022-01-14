/*
https://leetcode.com/problems/longest-nice-substring/

*/

var longestNiceSubstring = function(s) {
    let n= s.length;
    if (s.length<2) return "";
    let chars=s.split(''); 
    let set = new Set(s); //remove dups from string 
    
    for (let i=0;i<n;i++){
        let ch=chars[i];
        if (set.has(ch.toLowerCase) && set.has(ch.toUpperCase)) continue; 
        
     let sub1 = longestNiceSubstring(s.substring(0,i));
     let sub2 = longestNiceSubstring(s.substring(i+1));
        return sub1.length>=sub2.length ? sub1: sub2; 
    }
   return s;     
    
};

let s="YazaAay"; //exp aAa 
console.log(longestNiceSubstring(s));