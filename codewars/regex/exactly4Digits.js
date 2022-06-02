/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

RegEx.test(string) returns true or false 
-  executes a search for a match between a regular expression and a specified string
*/

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin) ; //
  }

function validatePIN (pin) {
    //return true or false
   if(pin.length!=6 && pin.length!=4) return false; 
   //extra dash to match negative numbers e.g -1
   if (pin.search(/[a-zA-Z-]/gi)!=-1) return false ;
    let res = [] ;
    for (let el of pin){
        res=pin.match(/[0-9]/g);
    }
  
    //console.log(res);
   return (res.length==4 || res.length==6) ? true :false ;
  }

  console.log(validatePIN("1234")) //true

  let m ="12345";
  let result=true;
  if (m.length!=6 && m.length!=4)  result =false;
  console.log(`result=${result}`)