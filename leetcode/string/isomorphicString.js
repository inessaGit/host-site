/*
https://leetcode.com/problems/isomorphic-strings/
- same length
- same repeat chars 

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

*/

var isIsomorphic = function(s, t) {
    
    if (s.length != t.length) return false
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i])){
            m.set(s[i], t[i]);
            console.log(m);
        }
         else {
                if (m.get(s[i]) != t[i]) {
                    console.log(`s[i] =${s[i]}  t[i]=${t[i]}`);
                    console.log(m);
                    return false;
                }
            }
       
    }
    return new Set([...m.values()]).size == m.size
};

let a= "egg";
let b = "add"; //true 

let a2="foo";
let b2= "bar"; //false

let a3="paper";
let b3="title";

//console.log(isIsomorphic(a,b));
console.log(isIsomorphic(a2,b2));
//console.log(isIsomorphic(a3,b3));