/*
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
Write a function that accepts a string, and returns the same string 
with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. 
The indexing is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
*/

function toWeirdCase(string){
    let res = string.split(' ')
    .map((w)=>w.split(''));
    let ans =[];
    for(let el of res){
      //for each array of chars(word) of res 
        let word= el.map((ch,i)=>{
        return i%2==0 ? ch=ch.toUpperCase(): ch=ch.toLowerCase();
      }).join('');
      ans.push(word);
    }
    console.log(ans);
    return ans.join(' ');
  }