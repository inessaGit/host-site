
/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/m274vRXDnMp


*/

function findFirstUnique(arr) {
    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
    
    console.log(result);

    }

    let a= [9,2,3,2,6,6] ;
    findFirstUnique(a);