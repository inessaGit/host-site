/*
https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
Use this. In the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
If the method is on an object's prototype chain, this refers to the object the method was called on
in this case, the string itself

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
    let s = this.split(' ').map((el)=>el.replace(el[0],el[0].toUpperCase())).join(' ');
    console.log(s);
    return s; 
  };

  String.prototype.toJadenCase1 = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  String.prototype.toJadenCase2 = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };
  