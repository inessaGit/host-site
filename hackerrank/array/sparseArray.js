/*
https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    let n = strings.length;
    let m = queries.length; 
    let map =new Map();
    let res =[];

    //count occurences of strings and store in the map
    for (let i=0;i<n;i++){
        map.has(strings[i]) ? map.set(strings[i],map.get(strings[i])+1) : map.set(strings[i],1) ;
    }
   //go over map and push to res array 
    for (let j=0;j<m;j++){
      map.has(queries[j]) ? res.push( map.get(queries[j])) : res.push(0);
    }
     console.log(map);
     console.log(res)
     return res; 
}

function matchingStrings1(strings,queries){
let counter = 0;
let output = [];

for (let i=0; i < queries.length; i++){
    for (let j=0; j < strings.length; j++){
        if (queries[i] == strings[j]){
            counter = counter + 1;
        }
    }
    output.push(counter);
    counter = 0;
}

return output;
}

let s=['aba','baba','aba','xzxb'];
let q=['aba','xzxb','ab']; //exp [2,1,0]
matchingStrings(s,q);