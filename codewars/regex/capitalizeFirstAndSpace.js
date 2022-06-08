/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
Specifying a function as a parameter
You can specify a function as the second parameter. 
In this case, the function will be invoked after the match has been performed. 
The function's result (return value) will be used as the replacement string.

String.replace(regex, function(mathch))
*/

let n = "hello cat world";
let regex= /\w/g; 
let res = n.replace(regex,"1"); // 11111 111 11111
//console.log(res)

let res2= "";
let regex2=/\s/g;
n.replace(regex,function(string,match){
res2= string.replace(match,"|")
})

console.log(res2)

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
let last ="";
  name.replace(regex,function(match){
  last= match.charAt(1).toUpperCase(); 
     });

*/