/*
https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


Increment the large integer by one and return the resulting array of digits.
Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

parseInt()
The parseInt() function parses a STRING argument and returns an integer of the specified radix (the base in mathematical numeral systems).


*/

var plusOne = function(digits) {
    
    digits =digits.join(""); //123 string 
    //convert to int because if string +int = concat not arithmetic
   // digits=parseInt(digits)+1; // 124
    
    digits =BigInt(digits)+BigInt(1) ; //convert string into bigInt; need to do EXPLICIT CAST TO big int for int 1 
    //convert BigInt into array 
    let ar = Array.from(digits.toString());
    return ar; 
    
    
};
plusOne([1,2,3]);


function test(){
let digits =[1,2,3]; //array 
//array to int ;
console.log(Array.from([1, 2, 3], x => x + x));

}