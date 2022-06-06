/*
https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

*/

function expandedForm1(num) {
    // Your code here
  }

  console.log(Math.pow(10,2))
  const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map( (a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ");

