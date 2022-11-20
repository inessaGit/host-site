/*
https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
Use this. In the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
If the method is on an object's prototype chain, this refers to the object the method was called on
in this case, the string itself
*/


String.prototype.toAlternatingCase1 = function () {
     let s = this.split('');
     for (let i=0;i<s.length;i++){

        if(s[i]==s[i].toUpperCase()){
            //it is capital letter put it to lower case; or it is number stays same
            s[i]=s[i].toLowerCase();
        }
        else {
            s[i]=s[i].toUpperCase();
        }
     }
     s=s.join('');
    console.log(s);
     return s; 
  }

  String.prototype.toAlternatingCase = function () {
    return this.split('').map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}
  "hello world".toAlternatingCase();