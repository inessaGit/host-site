
let duplicate =function(arr){
   arr=[...arr,...arr];
   return arr; 
}
console.log(duplicate([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]

