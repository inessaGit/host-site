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
 - handle edge cases length must be same, length must be more than 1
 - split s into an array ; loop over s and store index of each mismatch into an array 
  -- if mismatch >2 returna false 
  --- if mismatch ==2 then try to swap using array(splitted string) ; after swapping check if equal 

 
1.If both strings are of unequal length, no amounts of swapping will make them equal. Hence, return false.
2. If both strings are equal, check to see if there is a duplication in one of the letters.
 If so, you can swap them together as swapping two characters within the string is a must.
  And in doing so, will still yield the same string and return true. 
3. Store mismatches into an array 
--- if mismatches.length >2 return false 
--- if mismatches.lenght ==2 then try swap 
-- default case return false ;
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
    //default case to handle diff letters e.g s=abac goal= abad 
    return false;
};

//TC 3: "ab" "ab" //exp false because after swap ba!=ab  but TC2:  s = "aa", goal = "aa" exp true because these are SAME Letters  

let s ="ab";
let goal ='ab';//false 

let s1="abcaa";
let goal1="abcbb"; //exp false 

let s2=   "aaaaaaabc" ;
let goal2="aaaaaaacb" ; //exp true

let s3="abac";
let goal3= "abad"; //exp false 

//console.log(buddyStrings(s,goal)); 
//console.log(buddyStrings(s1,goal1)); 
console.log(buddyStrings(s2,goal2)); 
console.log(buddyStrings(s3,goal3)); 