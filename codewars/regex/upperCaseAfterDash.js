/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript

String.replace(regexp, replacerFunction)
replacerFunction (replacement)
A function to be invoked to create the new substring to be used to replace the matches 
to the given regexp or substr. 

You can specify a function as the second parameter. 
In this case, the function will be invoked after the match has been performed. 
The function's result (return value) will be used as the replacement string.
*/

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
  }



function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

  function toCamelCase(str){
    return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
  }
  
  function camelize(previous, current, index){
    return previous + current.capitalizeFirstLetter();
  }
  
  String.prototype.capitalizeFirstLetter = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }