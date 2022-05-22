/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true

Given a positive integer n and the task is to round the number to the next whole number having divisible by 5.
Approach 1:
-Take the number in a variable.
- Divide it by 5 and get the decimal value.
- Take the ceil value of the decimal value by using math.ceil().
- Multiply it by 5 to get the result.

46=>50 21=>25 30=>30

Math.ceil(x / 5) * 5

*/

function gradingStudents(grades) {
    let res =[];
    for (let j=0;j<grades.length;j++){
      if (grades[j]>=38){
      let num=Math.ceil(grades[j]/5)*5; 
      console.log(`num=${num}`);
      let diff = num-grades[j];
      diff <3 ? res.push(num) : res.push(grades[j]);
      }
      else {
          res.push(grades[j]);
      }
    }
    console.log(res);
    return res; 
}