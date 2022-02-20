
let map = new Map();
map.set (3,1).set(2,1).set(0,2);
let counter = 3;
/*
Map.get(key)
Returns: the element associated with the specified key, or undefined if the key can't be found.

Logical || operator
expr1 || expr2

If expr1 can be converted to true, returns expr1; else, returns expr2.
Because undefined gets auto converted to FAlSE it returns expr2 which is 0. 
*/
counter+=map.get(6) || 0;
console.log(counter);// 3 because doing 3+0=3

counter+= map.get(6); 
console.log(counter);// NaN because doing 3+ undefined = NaN
