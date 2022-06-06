

/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
*/
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

let str = "cattt";
let obj ={}; 

for (let ch of str){
    ch in obj ? obj[ch]=obj[ch]+1 : obj[ch]=1; 
    }
console.log(obj)