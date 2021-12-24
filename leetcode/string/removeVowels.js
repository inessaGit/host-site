/*
remove vowels from a string 
*/

var removeVowels= function(s){
let vowels='aeiouAEIOU';
 let chars =s.split("");

   for (let i=0;i<chars.length;i++){
      if(vowels.includes(chars[i])===true){
        chars.splice(i,1,"")
      }
       }
 return chars.join("")
}

let s="leetcode"; 
console.log(removeVowels(s));

