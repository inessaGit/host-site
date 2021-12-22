/*
https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
Example 1: 
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example2: 
Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

Constraints:
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3

Q: is -10 double of 5? No .

*/
//Case 1: linear search 
var checkIfExist = function(arr) {  
    if (arr==null|arr.length==0){
        return false;
    }
    let set =new Set();
    for (let i=0;i<arr.length;i++){
       if(set.has(arr[i])==true){ //FIRST check then add 
           console.log(`Found ${arr[i]}`)
           return true; 
       }
       set.add(arr[i]*2);
       set.add(arr[i]/2)
       console.log(set)

    }

    return false
};

let  a= [10,2,5,3];
let b =[3,1,7,11];
let c=[-2,0,10,-19,4,6,-8];

checkIfExist(c); 