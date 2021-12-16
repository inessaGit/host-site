

function findFirstUnique(arr){
    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
    return result;
    }

let a= [9,2,3,2,6,6];
let b=[4,5,1,2,0,4]; 
//findFirstUnique(a); 

console.log(a.length)

delete a[2];
console.log(a)
console.log(a.length)