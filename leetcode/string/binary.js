/*
Given two binary strings a and b, return their sum as a binary string.
https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1160/
Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"
-- convert binary string into int 
 - do sum 
  - convert result into binary string using toString(2)
*/

var addBinary=function(a,b){

 let num1= BigInt(a); //cast string to bigInnt that holds binary format
 let num2 = BigInt(b); 

 console.log(`num1=${num1} num2=${num2}`)

 //transform bigInt binary to bigInt decimal 
 num1=BigInt(num1.toString(10));
 num2=BigInt(num2.toString(10));
 console.log(num1,num2);

 sum = num1+num2; //sum stored as big int 
  sum=sum.toString(2); //cast sum to binary string
  console.log(`sum=${sum}`);
    
}
let c="10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let d=
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
let exp ="110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"; 
let a ="1010"; 
let b ="1011"; 

addBinary(a,b); 

/*
Input: a = "1010", b = "1011"
Output: "10101"
*/

let test=function(){

    let num =22;
    console.log(parseInt(num,2)); //prints NaN digits other that 0/1 are invalid for binary 
    console.log(parseInt("123",2));//prints 1 
    console.log(parseInt('546', 2))    // Digits other than 0 or 1 are invalid for binary radix


    console.log(parseInt(1010,2));//10 
    console.log (parseInt(1011,2));//11
    console.log(parseInt(10101,2));//21

    let x =6; 
    console.log(x.toString(2));//110

    let word ='hello'; 
    console.log(word.toString(2)); //word 
    let str = '100010'
    console.log(str.toString(10));
let number1 =1001; 
console.log(number1.toString(10));

}

//test();