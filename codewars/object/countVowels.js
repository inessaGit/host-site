
let obj = {};
let vowels={};
let regexpVowels = /[AEIOUYaeiouy]/g;

//Use obj to store letter freq
let str = "united airlines";
for(let el of str){
    if(obj[el]) obj[el]++;
    else obj[el]=1;
}
console.log(obj);

//Count vowels
let numVowels=str.match(regexpVowels).length; 
let numCons=str.length -numVowels;
console.log(`numVowels=${numVowels} numCons=${numCons}`)