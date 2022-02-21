/*
https://leetcode.com/problems/matrix-diagonal-sum/submissions/


*/

var diagonalSum = function(mat) {
    let lr =0; //left to right 
    let rl =0; //right to left 
    let n =mat.length;
    
    for (let i=0;i<n;i++){
        lr += mat[i][i];
        if (i!=n-1-i){
         rl +=mat[i][n-i-1];
        }
    }
    sum=lr+rl;
    return sum;
};