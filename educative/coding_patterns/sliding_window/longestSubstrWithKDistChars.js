/*
https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
Given a string, find the length of the longest substring in it with 
no more than K distinct characters.

- use a HashMap to remember the frequency of each character we have processed.
 - These characters will constitute our sliding window. 
 We are asked to find the longest such window having no more than K distinct characters. 
 - We will remember the length of this window as the longest window so far.
- In each step, we will try to shrink the window from the beginning 
if the count of distinct characters in the HashMap is larger than K. 
We will shrink the window until we have no more than K distinct characters in the HashMap. 
This is needed as we intend to find the longest window.

- While shrinking, we’ll decrement the character’s frequency going out of the window 
and remove it from the HashMap if its frequency becomes zero
- At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.

*/

function longest_substring_with_k_distinct(str, k) {
    //Step 1: store frequency of each letter in a string 
    let n = str.length; 
    let maxLen =0; 
    let frequency={};
    let j =0; //windowStart pointer 
    //i acts as windowEnd pointer 
    for(let i=0;i<n;i++){
       let char= str[i];
       if(!(char in frequency)){
           frequency[char] =0; //store key val in object
       }
       frequency[char]+=1; 
      // console.log(frequency)

       //shrink sliding window 
       while(Object.keys(frequency).length>k){
           let leftChar = str[j];
           frequency[leftChar]-=1;
           if(frequency[leftChar]==0){
               delete frequency[leftChar]; 
           }
           j++; //slide /shrink window 
       }
       console.log(`i=${i} j=${j}`);
       maxLen =Math.max(maxLen, i-j+1 );
    }
    return maxLen; 
  }
  
  
  console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
  //console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
  //console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);