/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

var lengthOfLongestSubstring = function(s) {
    let chars =s.split('');
    let n =chars.length;
    let windowStart =0; 
    let set = new Set(); //to store desired substr; 
    
    let curr_count=0;
    let max_count=0; 
    //windowEnd keeps moving with the loop
    for (let windowEnd=0; windowEnd<n; windowEnd++){
        if (!set.has(chars[windowEnd])){
            set.add(chars[windowEnd]);
            curr_count++;
            //find max 
            max_count=Math.max(curr_count,max_count);
           // console.log(`curr_count ${curr_count}`)
        }
        else {
            //find max 
            max_count=Math.max(curr_count,max_count);
            //found dup move window start to the position of first found dup
            windowStart=windowEnd; 
            set.clear(); 
            set.add(chars[windowEnd]);
            curr_count=1; //Important! reset cur_count to 1  

        }
    }
    console.log (`max_count ${max_count}`)
    return max_count; 
};


let s = " ";
console.log(lengthOfLongestSubstring(s));