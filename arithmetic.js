
let num=Math.pow(2,3) //8
console.log(num);
num +=0.6;
num = Math.ceil(num);

console.log(num);

num +=0.6;
num = Math.floor(num);
console.log(num);

let num2= Math.abs(-5);
console.log (num2);

let max =Math.max (10,22,2,5555555);
let min =Math.min (10,22,2.5,0.6,1,5555555);
console.log (max,min);

let random = Math.random();
let isNaN= Number.isNaN(random);
let isNumber = Number.isNumber;
let isInteger= Number.isInteger(random);
console.log(`random: ${random}, isNan: ${isNaN}, isNumber::${isNumber}, isInteger:${isInteger}`); 