/*
https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

- similar to sliding window  i and i+1 
- caveat is the case when s =[1] should return true
- also starting counters at 1! 
*/

var checkZeroOnes = function(s) {
    let countZero=1;
    let countOne=1; 
    let max1 =0;
    let max2=0; 
    let n=s.length; 
    
    if (n<2){
        return s[0]==1 ? true: false;
    }
    for (let i=0;i<n;i++){
        if(s[i]==s[i+1]){
            s[i]==0 ? countZero++ : countOne++;
        }
        else {
            countZero=1;
            countOne=1; 
        }   
        max1=Math.max(max1,countZero);
        max2=Math.max(max2,countOne);
    }
    
    return max2>max1; 
};

let s = "111000"; //false 
let s2="1" //exp true
console.log(checkZeroOnes(s));
console.log(checkZeroOnes(s2));