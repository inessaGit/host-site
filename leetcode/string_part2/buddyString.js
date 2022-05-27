/*
https://leetcode.com/problems/buddy-strings/
Given two strings s and goal, 
return true if you can swap two letters in s so the result is equal to goal, 
otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) 
such that i != j and swapping the characters at s[i] and s[j].

Similar to https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
=============
 Approach: 
 - length must be same 
 - count mismatch of letters e.g a vs c 
 1. sort both strings ; if they are not equal return false ;

- count mismatch of positions e.g letter s[0]=a, goal[0]=b, s[1]=b, goal[1]=
-- if it is more than 2 then return false ; 
---if it is equal to 0 that means strings are equal : 
-------- A. s=abc goal =abc return false ; B. s=aaa goal =aaa return true 
----if it is equal to 1 return true e.g s=abc goal =bac 
--- if it is equal to 2 

1.  If both strings are of unequal length, no amounts of swapping will make them equal. Hence, return false.
2. If both strings are equal, check to see if there is a duplication in one of the letters.
 If so, you can swap them together as swapping two characters within the string is a must.
  And in doing so, will still yield the same string and return true. 
  I used a set to keep track of unique characters.

3. If both strings are unequal to each other, loop through them and find character pairs 
from A and B that are not the same and add them to an array. 
The strings are only “buddy strings” and true 
if there are exactly 4 characters in the array 
and the concatenation of the third and first character(from A) 
is the same as the concatenation of the second and last character(from B). 
This simulates the swap of just 2 characters in A.

 */

var buddyStrings = function(s, goal) {
    let n = s.length;
    let posDifferent =[];
    let arr=s.split('');
    let res = false; 
    if (s.length==1 || goal.length==1 || s.length!=goal.length) return res;

    for (let i=0;i<n;i++){
        s[i]!=goal[i] ? posDifferent.push(i) : posDifferent; 
        if (posDifferent.length>2) {
            console.log(`posDiffrent>2 `+ posDifferent)
            return res;
        }
    }
      //IF posDiff ==2 then check if equal after swap using destr assignment
    if (posDifferent.length==2){
        console.log( `posDiff==2`);
        [arr[posDifferent[0]],arr[posDifferent[1]]]= [arr[posDifferent[1]],arr[posDifferent[0]]]; 
         res=(arr.join('')==goal);
         console.log(arr.join(''));
        return res;
    }
    //IF strings are equal then check if they have dup chars 
    if (s==goal){
        console.log(`s==goal`)
        let set = new Set(s);
        res = set.size<s.length; 
        return res; 
    }
};

//TC 3: "ab" "ab" //exp false because after swap ba!=ab  but TC2:  s = "aa", goal = "aa" exp true because these are SAME Letters  

let s ="ab";
let goal ='ab';//false 

let s1="abcaa";
let goal1="abcbb"; //exp false 

let s2=   "aaaaaaabc" ;
let goal2="aaaaaaacb" ; //exp true
//console.log(buddyStrings(s,goal)); 
//console.log(buddyStrings(s1,goal1)); 
console.log(buddyStrings(s2,goal2)); 