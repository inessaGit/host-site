/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-caesar-cipher-1/problem?isFullScreen=true

 Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Returns; string: the encrypted string

Constraints: n= length of string; s =string ; k= numof letters to rotate by 
1<=n<=100
1<=k<=100 
si a valid ASCII string without spaces ;could have hypens; 

Things to remember: 
- handle lower and UPPER CASES
- total num of letters 26 but array index 0 based so runs from 0-25 where  ar[0]=a ar[25] =z ;

*/

var assert = require('assert');

function caesarCipher(s, k) {
    let alphabetStr ='abcdefghijklmnopqrstuvwxyz';
    let alphabet = alphabetStr.split(''); 
    
    let ciphed = "";
    let arr =s.split('');
    for (let ch of arr){
        let isUpper =(ch==ch.toUpperCase()); 
        isUpper ==true ? ch=ch.toLowerCase() : ch;
        let index = alphabet.indexOf(ch);

        let target =index+ k; 
        if(index>-1){ //means it is a letter not symbol and it is found
          if (target<=25){
            //a-z check if it is upper case 
            isUpper ==true ? ciphed+=alphabet[target].toUpperCase() : ciphed+=alphabet[target];
          }
          else if (target>25){
              //>25  start from the start of alphabet
              isUpper ==true ? ciphed+=alphabet[target%26].toUpperCase() : ciphed+=alphabet[target%26];
          }
          console.log(`ch=${ch} target =${target} ciphed_ch=${ciphed} ciphed_length=${ciphed.length}`)
          }
        else {// means it is symbol e.g dash or aphostrophe just append it as is without changing
            ciphed+=ch;
        }
    }
    console.log(ciphed)
    return ciphed ; 

}


let s='middle-Outz';
let k=2 //okffng-Qwvb

let alphabet="abcdefghijklmnopqrstuvwxyz";//Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

let actual=caesarCipher(s,k) ;
console.log(actual) //exp okffng-Qwvb
let exp ="okffng-Qwvb";
assert(actual==exp) ;


let actual1=caesarCipher(alphabet,2); 
console.log(`actual1=${actual1}`); //exp cdefghijklmnopqrstuvwxyzab
let exp1 = "cdefghijklmnopqrstuvwxyzab"; //cdefghijklmnopqrstuvwxyzundefinedb
assert (actual1==exp1) ; 

let actual2=caesarCipher(alphabet,3);
console.log(actual2) //exp  defghijklmnopqrstuvwxyzabc
let exp2="defghijklmnopqrstuvwxyzabc"
assert(actual2==exp2); 

let s3="www.abc.xy" ;
console.log(caesarCipher(s3,87)) //exp fff.jkl.gh

