/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
The flatMap() method returns a new array formed by applying a given 
callback function to each element of the array, 
and then flattening the result by one level. 
It is identical to a map() followed by a flat() of depth 1, 
but slightly more efficient than calling those two methods separately.


To generate combinations  of 2 arrays:
*/

function test(){
    let a =["a","b","c"];
    let b = ["d","e","f"];
    //create combinations 
    console.log(a.flatMap(el => b.map(el2 => el + el2)))
}

function test2(){
    var arr = [1, 2, 3, 4];
let res = arr.flatMap(x => [x, x * 2]); 
console.log(res); // [1, 2, 2, 4, 3, 6, 4, 8 ]
let res2=arr.map(x=>[x,x*2]); 
console.log(res2); //[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]

}

    //flatMap((currentValue) => { /* ... */ } )
function generateWordsFromSentence(sentence){
   return sentence.flatMap((cv)=>{return cv.split(' ')});
}
let s = ["This is a sentence;","this is another one."]
let s2 = s.map((el)=>{
   return el.split(" ");
});
console.log(s2);

let ar1 =generateWordsFromSentence(s);
console.log(ar1);

test();
//test2();