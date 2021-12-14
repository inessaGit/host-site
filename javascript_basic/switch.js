
/*
Hackerrank problem 
https://www.hackerrank.com/challenges/js10-switch/problem
*/
'use strict';

/*
// make upper case ; compare ; 
*/
function getLetter(s) {
    let letter;
    
    let setA='aeiou';
    let setB ='bcdfg';
    let setC='hjklm';
    let setD='npqrstvwxyz';
    
    s=s.toLowerCase(); 
    // Write your code here
    switch(true){
        case setA.includes(s.charAt(0)): //s[0]
        letter='A';
        break;
        
        case setB.includes(s.charAt(0)): //s[0]
        letter ='B'
        break;
        
        case setC.includes(s.charAt(0)): //s[0]
        letter='C'
        break;
        
        case setD.includes(s.charAt(0)): //s[0]
        letter='D'
        break;
    }
    return letter;
}

