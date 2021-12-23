/*
https://leetcode.com/problems/jewels-and-stones/
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

//Stupid brutforce solution nested loop 
var numJewelsInStones = function(jewels, stones) {
   // if (stones.includes(jewels)==false) return 0;

     let result =0;
     for (let i=0;i<stones.length;i++){

        for(let j=0;j<jewels.length;j++){
            if(jewels[j]==stones[i]){
                result++;
            }
        }
     }
     return result; 
};

const numJewelsInStones1 = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};

const numJewelsInStones2 =function(jewels, stones) {
    let result =0;
    for (let char of stones){
        if(jewels.indexOf(c)!=-1){
            result++; 
        }
    }
};


let j="aA";
let s ="aAAbbbb";  //exp 3 
console.log(numJewelsInStones(j,s));