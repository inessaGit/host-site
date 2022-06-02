/*
https://leetcode.com/problems/valid-palindrome-ii/submissions/
Approach: 
- use two pointers  left and right 

eedede 

there is only one pair of i, j such that s.charAt(i) != s.charAt(j)
after the different pair hit, we try removing i or j, the characters in middle should be a palindrome.
*/


var validPalindrome = function(s) {
    let left =0;
    let right = s.length-1; 
    let mismatch=0;

    while(left<right){
       // console.log(s[left]==s[right]) //exp false
        s[left]==s[right] ?mismatch: mismatch++;
        if(mismatch>1) return false;
        left++;
        right--; 
    }
    console.log(`${s} mismatch=${mismatch}`)
    //handle case when mismatch =0 or mismatch=1
    if(mismatch==1 && s.length<4) {
        console.log("s.length<4 mismatch=1")
        return false;
    }
    return true;
};

//console.log(validPalindrome("abc")); //exp false 
console.log(validPalindrome("eedede")); //exp true
//console.log(validPalindrome("aba")); //exp true