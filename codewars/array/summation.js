/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

Approach: 
- use math formula summation= n(n+1)/2 is getting the sum of 1 to n numbers.
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }

  const summation = n => n * (n + 1) / 2;
