
// Array to string using join(separator) if separator omitted, the array elements are separated with a comma (","). 
//Array to string using toString() For Array objects, 
//the toString method joins the array and returns one string containing each array element separated by commas.


let s= "Hello Hello hello";
console.log(s.split('').join()); //H,e,l,l,o, ,H,e,l,l,o, ,h,e,l,l,o

let n =[1,2,3,54];
console.log(n.join('')); //12354 string 
console.log(n.join()); //1,2,3,54 string 
console.log(n.toString()); //1,2,3,54 string 

const a = ['Wind', 'Water', 'Fire'];
console.log(a.join());      // 'Wind,Water,Fire'
console.log(a.join(', '));  // 'Wind, Water, Fire'
console.log(a.join(' + ')); // 'Wind + Water + Fire'
console.log(a.join(''));   // 'WindWaterFire'