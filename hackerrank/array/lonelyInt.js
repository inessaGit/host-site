/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true
*/

function lonelyinteger(a) {
    let map = new Map();
    for (let num of a){
        if (map.has(num)){
            map.set(num,map.get(num)+1);       }
        else {
            map.set(num,1)
        }
    }
    //filter out map entries find key with value =1
    for (let [k,v] of map.entries()){
        if (v==1)
        return k;
    }
 }

 function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

 function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }
 let n= [1,2,3,4,3,2,1];
 console.log(lonelyinteger(n));