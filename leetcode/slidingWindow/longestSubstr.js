/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

[d,v,d,f] exp 3; 
abcabcbb  exp 3
'bbb' exp 1
'pwwkew' exp 3 
*/

var lengthOfLongestSubstring = function(s) {
    let chars =s.split('');
    let n =chars.length;
    let windowStart =0; 
    let set = new Set(); //to store desired substr; 
    
    let max_count=0; 
    //windowEnd keeps moving with the loop
    for (let windowEnd=0; windowEnd<n; windowEnd++){
        if (!set.has(chars[windowEnd])){
            set.add(chars[windowEnd]);
            //find max 
            max_count=Math.max(set.size,max_count);
        }
        else {
            set.delete(chars[windowStart]);
            set.add(chars[windowEnd]);
            if (set.size<max_count) {
                //reset set 
                set.clear();
                set.add(chars[windowEnd]);
                windowStart=windowEnd;
            }
            else {
              windowStart++; 

            }
        }
    }
    //console.log (`max_count ${max_count}`)
    return max_count; 
};


let s = " "; //exp 1
let s1="dvdf" //3
let s2="abcabcbb" //3
let s3='bbb' //exp 1
let s4 ="pwwkew"//exp 3
let s5="qrsvbspk"; //exp 5
let s6= "ohvhjdml" //exp 6 
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
console.log(lengthOfLongestSubstring(s5));
console.log(lengthOfLongestSubstring(s6));

