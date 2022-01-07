/*
https://leetcode.com/problems/increasing-decreasing-string/
https://leetcode.com/problems/increasing-decreasing-string/discuss/947063/JavaScript-Solution
Using counting sort ; 

 at index 0 store freq of a
 at index 1 store freq of b 
*/

var sortString = function(s) {
    //Step 1: Count the frequency of each character.
    let temp = new Array(26).fill(0);
    let res='';

    for (let ch of s) { //abc
        const index=ch.charCodeAt(0) -97;
        temp[index] ++;
    }
    //console.log(temp)
   //Step 2: A. Loop over Keep repeating until the frequency of all characters is zero.
   while(s.length!=res.length){

      //B. Loop over all character from 'a' to 'z' and append the character if it exists 
      //and decrease frequency by 1
      for(let i=0;i<26;i++){
         if(temp[i]>0)
         res+=String.fromCharCode(i+97);
         temp[i]-- ; //! Important decrement frequency
      }  
      //C. Do the same from z to a  
        for (let j=25;j>=0;j--){
           if(temp[j]>0){
              res+=String.fromCharCode(j+97);
              temp[j]-- //! Important decrement frequency
           }
        }
     }
   console.log(res)

};

let s="aaaabbbbcccc"; 
sortString(s);

let str='abcdefghijklmnopqrstuvwxyz';

for (let ch of str){
   let index=  ch.charCodeAt(0)-97; 
   console.log(`${ch} - ${index} `);
}