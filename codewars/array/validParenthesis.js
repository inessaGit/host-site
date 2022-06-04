/*

map would not work because 
"())(" expected: false
Note: the opening parenthesis is special char in regex so we need to escape it with backslash
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

- regex.test(str) returns true or false 
Use test() whenever you want to know whether a pattern is found in a string. 
test() returns a boolean, unlike the String.prototype.search() 
method (which returns the index of a match, or -1 if not found).
*/

//using regex
function validParentheses(parens){
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
  }

  function validParentheses1(parens){
    var result = 0;
    
    for (var i = 0 ; i < parens.length && result>= 0; i++) {
      result+= (parens[i] == '(') ? 1 : -1;    
    }
    
    return (result == 0);
  }

  validParentheses('()');
  validParentheses('((');