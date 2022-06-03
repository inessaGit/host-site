
/*https://www.codewars.com/kata/5839edaa6754d6fec10000a2/solutions/javascript

*/


function findMissingLetter(array)
{
   var i=array[0].charCodeAt(); //when charCodeAt() blank it defaults to 0 ;so i = charcode of the first letter 
   array.map(x=>  x.charCodeAt()==i?i++:i); //for each letter of array map it to char code and check if char code ==i 
   return String.fromCharCode(i);
}
let s = ["a","b","c","d","f"]// "e"
let m=["O","Q","R","S"] //"P"
findMissingLetter(s);
findMissingLetter(m);