/*
https://leetcode.com/problems/isomorphic-strings/submissions/

Approach: 
- Create an empty hashmap/hashtable. Let's name it map. 
- It will store mappings of the characters from str1 to those of str
- Create a set/list. Let's name it set. 
It will be used to keep track of already mapped characters.  

Note:
- if need is to see if two arrays have the same items and they are in the same order, try this:
a.toStrin()==b.toString() 
- using map would not work for case 
let s= "bbbaaaba"; //3 3 1 1 
let t="aaabbbba"; //3 4 1
 */

var isIsomorphic = function(s, t) {
  //part of the constraints  if (s.length != t.length) return false
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i])){
            m.set(s[i], t[i]);
          //  console.log(m);
        }
         else { //a charachter could only be mapped to ONE ANOTHER CHAR
                if (m.get(s[i]) != t[i]) {
                  //  console.log(`s[i] =${s[i]}  t[i]=${t[i]}`);
                    //console.log(m);
                    return false;
                }
            }
    }
    let res = new Set([...m.values()]).size == m.size;
    console.log( `res=${res}`);
    return res;
};

let s= "bbbaaaba"; //3 3 1 1 
let t="aaabbbba"; //3 4 1
let s2='foo';
let t2='bar'

isIsomorphic(s,t); //exp false
isIsomorphic(s2,t2); //exp false