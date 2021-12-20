/*
Because Map is an object  could use 
Object.keys(map) gets keys
Object.entries(map) gets both key and value 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


*/


let a =[10,20,30];
let b= [1,1,2,2,2,2,3,3,3,4,,5]; 

//count num of pairs 
function countPairs(n){
    let pairs =Math.floor(n/2); 
    return pairs; 
}

//count num of occurences 
let map = new Map(); 
a.forEach((el)=>{
   if (map.has(el)==false){
       map.set(el,1)
   }
   else{
       map.set(el,map.get(el)+1);
   }
}); 

 console.log(map)
  
 let pairs=[]; 
 // count pairs for each value of map 
 map.forEach((el)=>{
     pairs.push(countPairs(el))
 });
 console.log(pairs);

 //fitler out allPairs to remove non paired el 
 pairs=pairs.filter((el)=>{
    return el>1
 });
 console.log(pairs);

 //run array.reduce to sum all of the pairs 
 let sum=pairs.reduce((prevValue, curValue)=>{
    prevValue+curValue;
 },0);

 console.log(sum);

 let sum2=[0,0,0].reduce((prevValue,curValue)=>{
   return  prevValue+curValue;
 });

console.log(sum2)