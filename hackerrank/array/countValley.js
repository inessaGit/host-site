/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem?isFullScreen=true

*/

function countingValleys(steps, path) {
    // after each DU check if sum == 0 ; after each U check if sum ==0 
   let count =0; 
   let sum =0; 
    for (let ch of path){
        if (ch=='D') sum+=-1; 
        else{
            sum+=1; 
            sum==0 ? count++ : count; 
        }
    }
    console.log(count);
    return count; 

}