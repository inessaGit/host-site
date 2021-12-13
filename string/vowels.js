'use strict';

/*
https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 * duplicate letters? 
 * string vowels ; The 5 vowels include a, e, i, o and u, y
 * string consonants; 
 * B, C, D, F, G, J, K, L, M, N, P, Q, S, T, V, X, Z and often H, R, W, 
 * - loop over given string and comare it to the vowels ;
 *   -- if found match store it in array arrVowels;
 *      else (store it in arrayConsonants )
 * 
 *  function print (array)
 * - loop over array and print each char in new line ; 
 */
function vowelsAndConsonants(s) {
    const vowels ='aeiouy';
    const consonants='bcdfgjklmnpqstvxzhrw'; 
    
    let arrayVowels=[];
    let arrayConsonants=[] ;
    s=s.toLowerCase();
    
    for (let char  of s){
        if (vowels.includes(char)){
            arrayVowels.push(char)
        }
        else {
            arrayConsonants.push(char); //add 
        }
    }
    
    function print(array){
        for (let char of array){
            console.log(char);
        }
    }

    print(arrayVowels);
    print (arrayConsonants);
}

vowelsAndConsonants('javascriptloops');