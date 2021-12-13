/*
https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. 
If no exception was thrown, then this should be the reversed string; 
if an exception was thrown, this should be the original string.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
try {
    nonExistingFunction();
  } catch(error){
      console.log(error.name + ":" + error.message);
  }

throw expression;
You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
*/

function reverseString(s) {
    try{
      let reversed =s.split('').reverse().join('');
       // throw 'Error !!';
    }
    catch(ex){
        //console.error(ex);
        console.log(ex.message);//console.log(ex) prints whole stack trace err mess
    }
    finally{
        //do something always executed ; 
    }
}

let num =new Number(2334);
reverseString(num);

