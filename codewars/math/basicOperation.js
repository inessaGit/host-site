/*
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Approach 1 : 
- use switch 
Approach 2: 
- use eval ( string)
*/

function basicOp1(o, a, b) {
    return eval(a+o+b);
  }

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp2(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } else if(operation === '-') {
      return value1 - value2;
    }  else if(operation === '*') {
      return value1 * value2;
    } else if(operation === '/'){
      return value1/value2;
    }
  }

basicOp('+', 4, 7) //11
basicOp('-', 15, 18);// -3;
basicOp('*', 5, 5)//25
basicOp('/', 49, 7); //7

let m =`5+5`;
console.log(`m=${m}`)