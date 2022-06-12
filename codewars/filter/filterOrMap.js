


let str = "hello cat"
let arr = str.split('').map((el)=>{
   el!=" " ;
})

let arr2 =str.split("").filter((el)=>{
    return el!=" ";
}).map((el2)=>{
    return el2.toUpperCase();
})

console.log(arr); //[H,E,L,L,O,,C,A,T]
console.log(arr2) //['H', 'E', 'L','L', 'O', 'C','A', 'T'] 


// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]


let w = "dentist"
console.log(w.slice(0,1)) //d 
console.log(w.slice(1,3))// en 1,2 index