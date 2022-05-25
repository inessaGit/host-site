

/*
https://leetcode.com/problems/find-the-difference/submissions/
*/

var findTheDifference = function(s, t) {
    let map = new Map();
    for (let ch of t){
        map.set(ch,map.has(ch)? map.get(ch)+1 :1);
    }
    for (let ch of s){
        map.set(ch, map.has(ch)? map.get(ch)-1 :1);
        map.get(ch)==0 ? map.delete(ch) : map;
    }
    console.log(map);
    return Array.from(map.keys())[0]
};
//split strings into array and store sum of ch ; return sum2-sum1 as str
var findTheDifference1 = function(s, t) {
    let sum1 = s.split('').map((ch,index)=>{return s.charCodeAt(index)}) ;
    let sum2= t.split('').map((ch,index)=>{return t.charCodeAt(index)});
    console.log(sum1);
    console.log(sum2);
    sum1= sum1.reduce((pv,cv)=>{return pv+cv},0);
    sum2 = sum2.reduce((pv,cv)=>{return pv+cv},0);

    console.log(sum1)
    console.log(sum2);

    let diff = String.fromCharCode(sum2-sum1);
    console.log(diff)
    return diff;
}

let s= "ab";
let t= "abc";
findTheDifference1 (s,t);