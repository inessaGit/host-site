let a= [1,2,3,4];

let ans=a.copyWithin(1);
let b =[...a,...a];
let c =[[...a],[...a]]
console.log(ans);
console.log(a);
console.log(b);
console.log(c);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
//This method does not change the existing arrays, but instead returns a new array.
const array3 = array1.concat(array2);
console.log(array3);

let ar4=array1.concat('d');
console.log(ar4)
let ar5=[...array1,'d'];
console.log(ar5)