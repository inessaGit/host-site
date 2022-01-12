/*
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

*/

var countGoodSubstrings = function(s) {
    let chars=[];
    let substr=[];
     let counter=0;
    //windowStart
    let j=0;
    
    for (let i=0;i<s.length;i++){
    chars.push(s[i]);
    if(i>=2 ){
    //console.log(chars)
    //check if chars has dup
    let res=chars.filter((el,index)=>chars.indexOf(el)===index);
     res.length===3 ? counter++ : counter=counter;
    //console.log(res);
    chars.shift(); //del winStart el
    j++; //slide window
    }
    
   }

return counter;
}

let s1="xyzzaz";
let s ="aababcabc"; //aab aba bab abc1 bca2 cab3 abc4
console.log(countGoodSubstrings(s)) //exp 4
console.log(countGoodSubstrings(s1)) //exp 1 xyz