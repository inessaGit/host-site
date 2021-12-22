let test =[2,3,6,6,5]; 

let set2=new Set(test);
console.log(set2); 

//convert set to array using spread operator 
let arr = [...set2];

let s1 = new Set([1,"string1"]); //
s1.add([2,"string 2"]); 
let size = s1.size; 
console.log(`s1.size ${size}`); //3 because now set has {1,"string 1", Array(2)} ;

let word ="we love javascript"
let set3=new Set(word);
word =Array.from(set3).join("");