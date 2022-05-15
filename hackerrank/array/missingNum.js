/*

https://www.hackerrank.com/challenges/three-month-preparation-kit-missing-numbers/problem?isFullScreen=true
Given two arrays of integers, find which elements in the second array are missing from the first array.

Notes: 
IF a number occurs multiple times in the lists, 
you must ensure that the frequency of that number in both lists is the same. 
If that is not the case, then it is also a missing number.

Return the missing numbers sorted ascending.
Only include a missing number once, even if it is missing multiple times.
The difference between the maximum and minimum numbers in the original list is less than or equal to .

let arr1= [7,2,5,3,5,3]
let brr1=[7,2,5,4,6,3,5,3] //exp 4,6

Approach: 
1. create two maps to store frequency 
2. filter out brr array to account elements that diff 
3. go over map and if map1.value != map2.value then push it to the diff array 
4. sort diff array
5. return diff array 
*/

function missingNumbers(arr, brr) {
    let map = new Map();
    let map2= new Map(); 

     brr.forEach(el =>  map.set(el, map.has(el) ? map.get(el) + 1 : 1));
     arr.forEach(el=>map2.set(el,map2.has(el)? map2.get(el)+1:1)); 
     
     console.log(map);
     console.log(map2);
     //1. store elements that diff 
     let diff =[];
     diff = brr.filter(el=>!arr.includes(el));
     //[...map.keys()].filter(el=>![...map2.keys()].includes(el));

     console.log(diff); 
     //2. store element that have diff frequency
     for (const [k,v] of map.entries()){
         if (map2.has(k)){
             //check if v same 
             map2.get(k)==v? diff : diff.push(k);
         }
     }
     diff.sort((a,b)=>{return a-b}); 
     console.log(`ans=${diff}`)
     return diff;
     
 }


let arr=[203,204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr=[203,204,204, 205, 206, 207, 205,208, 203, 206, 205, 206,204]; 
//204 205 206 because freq is diff

let arr1= [7,2,5,3,5,3]
let brr1=[7,2,5,4,6,3,5,3] //exp 4,6

let arr2=[1,1,2,2,2]
let brr2=[1,1,2,3]
missingNumbers(arr,brr);
missingNumbers(arr1,brr1);
