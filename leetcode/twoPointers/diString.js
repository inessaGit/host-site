/*

https://leetcode.com/problems/di-string-match/
*/

var diStringMatch = function(s) {
    let res =[];
    let left =0;
    let n= s.length; 
    let right =n;
    
    for (let i=0;i<n;i++){
        res[i]=s.charAt(i)=='I' ? left++ :right--;
        res[n]=left; 
        console.log(res); 
    }
    return res;
};

let s= "IDID"; //Output: [0,4,1,3,2]
let s2= "III"; // Output: [0,1,2,3]
let s3="DDI" ; //Output: [3,2,0,1]
diStringMatch(s); 