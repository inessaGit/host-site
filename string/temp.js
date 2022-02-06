
//remove all dups from array 
//remove vowels from string 

let temp =Array(10).fill(0);
console.log(temp);


let array = [1,2,2,1]; 
//console.log (array.slice(1)); //[ 2, 2, 1 ]
let a = array.slice(2);
// console.log (a); //[2,1] 

let array2 = [1,2,2,1]; 
var result2= array2.flatMap(
    (val, i) => array2.slice(i+1).map( el => val + ' ' + el )
);

var result = array2.flatMap(
    (val, i) => array2.slice(i+1).map( el => Math.abs(val-el) )
);
console.log(result.filter((el)=>el==1)); 
