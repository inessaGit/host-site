/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-two-arrays/problem?isFullScreen=true

*/

function twoArrays(k, A, B) {
    A.sort((a,b) => a - b), 
    B.sort((a,b) => b - a);
    for(let i=0;i<A.length;i++) {
    if(A[i] + B[i] < k) return "NO";
    }
        return "YES";

}

let A =[1,2,2,1];
let B =[3,3,3,4]; //exp NO

let A1=[1,2,3];
let B1=[9,8,7]; //exp YES

twoArrays(5,A,B);
twoArrays(10,A,B);