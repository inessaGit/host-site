/*
https://leetcode.com/problems/determine-if-two-strings-are-close/

 We can rearange characters and their frequencies 
 So, we need to check that;
Both string have the same set of charracters.
Both string have the same frequency of charracters.
E.g string "abbccddd" has [1, 2, 2, 3] char frequency, and so does "bddccaaa".
*/

function test(s){
    let res = '';
 for (let ch of s){
     if (ch!='h' && ch!='e'){
         res+=ch;
     }
 }
 console.log(res);
}
let s="hello"; 
test(s)