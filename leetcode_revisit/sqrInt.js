/*

/*
Programming Challenge Description:
Write a program that squares an integer and prints the result.
Input:
Your program should read lines from standard input. Each line will contain a positive integer.
Output:
For each line of input, print to standard output the square of the number. Print out each result on a new line.
*/


let squareInt=function (n){

    let res= Math.pow(n,2);
    console.log(res)
    return res;
}

squareInt (4)