/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem?isFullScreen=tru

Given an array of bird sightings where every element represents a bird type id, 
determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, 
return the smallest of their ids.

Example
There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

*/

function migratoryBirds(arr) {
    // sort array ; store in map each type with occurence; filter out map by val=1
 arr.sort((a,b)=>{return a-b});
let map = new Map();
 for (let type of arr){
     map.has(type) ? map.set(type,map.get(type)+1) :map.set(type,1);
 }
 console.log(map); 

 let sorted =Array.from(map.entries());
 console.log(sorted); // [ [ 1, 2 ], [ 2, 2 ], [ 3, 1 ] ]

 sorted.sort((a,b)=>{return b[1]-a[1]});
console.log(sorted); 
 //sorted[0] = [ [ 1, 2 ], [ 2, 2 ], [ 3, 1 ] ]
 return sorted[0][0];
}

function migratoryBirds1(arr) {
    let counts = [0,0,0,0,0]; 
    //It is guaranteed that each type is 1,2,3,4,5
    //indexes of counts array represent number 1-5
    //value of counts [index] represents num of occurences 

    arr.forEach(id => counts[id-1]++);
    console.log(counts) ; //[ 2, 2, 1, 0, 0 ] using array index+1 to store the actual number 1-5
    
    let max = counts[0];
    let id = 1;
    
    counts.forEach((count,i) => {
        if(count > max){
            max = count;
            id = i + 1;
        }
    })
    
    return id;
    
}
let arr =[1,1,2,2,3]
//console.log(migratoryBirds(arr));  //exp 1
console.log(migratoryBirds1(arr));  //exp 1