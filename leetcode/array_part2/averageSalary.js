/*
https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

*/


var average = function(salary) {
    salary.sort((a,b)=>{return a-b});
    salary.pop();//removes first el and returns it
    salary.shift();//removes last el and returns it 
    let n = salary.length; 
    let sum =0; 
     for (let el of salary){
         sum+=el; 
     }
     return (sum/n).toFixed(5); 
}

let salary =[48000,59000,99000,13000,78000,45000,31000,17000,39000,37000,93000,77000,33000,28000,4000,54000,67000,6000,1000,11000];
console.log(average(salary)); 