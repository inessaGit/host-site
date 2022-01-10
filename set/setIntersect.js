
let words1=["leetcode","is","amazing","as","is"];
let words2=["amazing","leetcode","is"];

let mySet1= new Set(words1);
let mySet2=new Set(words2);
// intersect can be simulated via (items in both sets)
const intersection = new Set([...mySet1].filter(x => mySet2.has(x))); 
console.log(intersection); 

// difference can be simulated via(items only in first set)
const difference = new Set([...mySet1].filter(x => !mySet2.has(x))); 
console.log(difference); 