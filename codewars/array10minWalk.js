/*
https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

The walk has to be for 10 minutes.
You need to return to the starting point
Every list item (each letter) or single block represents one minute

Approach
if we move in n direction then ns += 1
if we move in s direction (coming back) then ns -= 1
if we move in e direction then ew += 1
if we move in w direction (coming back) then ew -= 1

if ns == 0 and ew == 0 //True
else //False
*/

//walk array of strings e.g ["s", "w", "e"]
function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
      for (let i of walk) { 
        if (i == 'n') ns += 1; 
        if (i == 's') ns -= 1; 
        if (i == 'e') ew += 1; 
        if (i == 'w') ew -= 1; 
      } 
    }
    else
      return false
      return ns === 0 && ew === 0; 

}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //false 