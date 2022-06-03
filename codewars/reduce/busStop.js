/*
https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript
*/
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
const number1 = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)
