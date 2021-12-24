/*
https://leetcode.com/problems/split-a-string-in-balanced-strings/

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", 
each substring contains same number of 'L' and 'R'.

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", 
each substring contains same number of 'L' and 'R'.

Input: s = "LLLLRRRRRL"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Return the maximum amount of split balanced strings.
*/

var balancedStringSplit = function(s) {
    
   //let left,right,score=0; //this assigns 0 only to score ; left right stay undefined 
   let left =0;  right =0;   score =0;
    for (let i=0;i<s.length;i++){
        let char =s.charAt(i); 
        if (char==='L')left++;
        else if(char==='R') right++;
        if (left==right) score++;
    } 
    return score; 
};

let s = "LLLLRRRRRL";
console.log(balancedStringSplit(s));
