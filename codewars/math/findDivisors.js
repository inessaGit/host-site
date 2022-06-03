/*
https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#)
 (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

 To find the divisors of a number, you need to:

write 1 as the first divisor;
Decompose the original number into prime factors and write out of the resulting prime factors that are divisors of the original number (if a factor repeats, then write it out only once);
find all possible products of obtained prime factors among themselves. The resulting answers will be the remaining divisors of the original number.
Example 2. Find the divisors of number 6

Write one as the first divisor of number 6:
Now decompose the number 6 into prime factors:
6 2 
3 3
1  
1,2,3,6 
*/

function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  }


function divisors1(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"