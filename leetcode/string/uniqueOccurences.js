
/*
https://leetcode.com/problems/unique-number-of-occurrences/submissions/
*/

var uniqueOccurrences = function(arr) {
    let map = new Map(); 
    let n =arr.length; 
    
    for (let i=0;i<n;i++){
        if (!map.has(arr[i])){
            map.set(arr[i],1);
        }
        else {
             map.set(arr[i],map.get(arr[i])+1);
        }
    }
    
    //let res2=Array.from(map.values()).forEach(x=>{console.log(x)});
    let res =Array.from(map.values()).every((el,i, arr)=>{
        return arr.indexOf(el)==arr.lastIndexOf(el) ;
    });

   // console.log(map);
    return res;
};

var uniqueOccurrences2 = function(arr) {
    let map = {};
    
    for(let i of arr) {
//if obj has property map[i] then increment its value by 1 ; otherwise set property and its value =1
        map[i] ? map[i]++ : map[i] = 1
        console.log(map)
    }
    
    let values = Object.values(map);
    let uniqueValues = [... new Set(values)];
    return values.length === uniqueValues.length;
};

let arr =[-3,0,1,-3,1,1,1,-3,10,0]; //exp true 
console.log(uniqueOccurrences(arr)); 
uniqueOccurrences2(arr);