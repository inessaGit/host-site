/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-strong-password/problem?isFullScreen=true

he website considers a password to be strong if it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: 
!@#$%^&*()-+

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
*/

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let result = 0;
    result += /[0-9]/.test(password) ? 0 : 1;
    result += /[a-z]/.test(password) ? 0 : 1;
    result += /[A-Z]/.test(password) ? 0 : 1;
    result += /[!@#$%^&*()+-]/.test(password) ? 0 : 1;
    if(n + result < 6) {
        result = 6 - n;
    }
    return result;


}

let p = '2bbbb'; //exp 2 5 characters long and is missing an uppercase and a special character. 
//The minimum number of characters to add is 2


