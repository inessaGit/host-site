
/*
https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
*/

function diagonalDifference(arr) {
    let lr = 0; //left to right
    let rl = 0; //right to left 
    let n =arr.length; 
    
    for (let i=0;i <n;i++){
        lr+=arr[i][i];
        rl +=arr[i][n-i-1];
    }
    let sum = Math.abs(lr-rl);
    return sum; 
}