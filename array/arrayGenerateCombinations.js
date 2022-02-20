/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

//Arrow function
flatMap((currentValue) => {  } )
flatMap((currentValue, index) => { } )
flatMap((currentValue, index, array) => { } )

//Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

//Inline callback function
flatMap(function(currentValue) { // })
flatMap(function(currentValue, index) { // })
flatMap(function(currentValue, index, array){ // })
flatMap(function(currentValue, index, array) { // }, thisArg)
*/

//generate combinations of array element; v=value ,i=index
function test1(){
var array = ["apple", "banana", "lemon", "mango"];
var result = array.flatMap(
    (v, i) => array.slice(i+1).map( w => v + ' ' + w )
);
console.log(result);
}

test1();

//To generate combinations  of 2 arrays:
function test(){
    let a =["a","b","c"];
    let b = ["d","e","f"];
    //create combinations 
    console.log(a.flatMap(el => b.map(el2 => el + el2)))
}
test();


