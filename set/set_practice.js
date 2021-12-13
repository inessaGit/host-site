
//let prim = new Set(1); //TypeError: number 1 is not iterable 
let iter=new Set("hello"); //String is iterable so it should store UNIQUE el
console.log(`iter.size ${iter.size}`); //4 helo


let s = new Set();
console.log(`s.size ${s.size}`); //0 

let s1 = new Set([1,'string1']); //only stores first array?
//s1.add([2,"string 2"]); 
let size = s1.size; 
console.log(`s1.size ${size}`); //2 why ? ? 

s1.forEach(function(el){
    console.log(`s1 set contains  `+el)
});


let copy= new Set(s1); //create a copy for set 
console.log(`copy.size ${copy.size}`); //0 


let unique =new Set('Missisipi'); // 4 elements: "M", "i", "s", and "p"
console.log(`unique.size ${unique.size}`); //0 

let merged = new Set(s1,unique); 
console.log(`merged.size ${merged.size}`); //2 ? why? 


copy.forEach(function(el){
    console.log(`copy set contains ` +el);

});

unique.forEach(function(el){
    console.log(el)
});