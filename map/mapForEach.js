let map =new Map();
map.set('a',1)

/*
Map.forEach should be used only for iterating over a map that has values!!

The forEach() method executes a provided function once 
per each key/value pair in the Map object, in insertion order.
So when map is empty ther is no key/value-> so it does not execute.

*/
map.forEach((v,k,map)=>{
   map.set('b',2)
});

console.log(map)