/*
https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

Given two non-negative integers low and high. 
Return the count of odd numbers between low and high (inclusive).

Example1: 
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

It is an interesting logical puzzle; 
There are two cases: 
1) lowNum is odd ; means we can include it in the total count
2) lowNum is even ; means we cannot include it in the total count 

To come up with the formula think about basic range e.g [1,2] 
- 1 is odd ; so we can include it 
- the total number of numbers =2 ; so we divided totalNum by 2 to get the 
count of odd numbers 
*/


var countOdds = function(low, high) {
	const c = Math.round((high-low) / 2);//

    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;
}