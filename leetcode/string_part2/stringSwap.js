/*

https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

aaa aac should be false ; yf and yy should be false 
Rule 1: 
- strings must have the same characters 
 == IF char different then return false 

Rule 2: 
- string must have no more than 2 position mismatch 
=== IF position mismatch more than 2 return false 


Array.sort() 
- sort() Specifies a function that defines the sort order. 
If omitted, the array elements are converted to strings, then sorted according to each character's 
Unicode code point value.
 */

  
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    let posMismatch =0;
    let letterMismatch =0; 
    
    let n =s1.length; 
    for (let i=0;i<n;i++){
        s1[i]!=s2[i] ? posMismatch++ : posMismatch;
        if(posMismatch>2 ) {
            console.log(`posMismatch=${posMismatch}`)
            return false;
    }
}
   
    let arr1= s1.split('').sort();
    let arr2= s2.split('').sort();
    console.log(arr1)
    console.log(arr2)
    for (let i=0;i<arr1.length;i++){
        arr1[i]!=arr2[i] ? letterMismatch++ :letterMismatch;
        if (letterMismatch>0) {
            console.log(`letterMismatch=${letterMismatch}`)
            return false;
    }
}
    return true; 
};

//Count diff positions ; only IF diff pos ==2 then try to swap ; return arr.join('')==s2 after swap 
var areAlmostEqual1 = function(s1, s2) {
  if (s1==s2) return true;
  let diffPositions = []; 
  let n = s1.length; 

  for (let i=0;i<n;i++){
      s1[i]!=s2[i] ? diffPositions.push(i) :diffPositions;
      if(diffPositions.length>2 ) return false;
  }
  //swap but first split string into array 
  let arr= s1.split('');
  if ( diffPositions.length==2){
   
    [arr[diffPositions[0]],arr[diffPositions[1]] ] = [arr[diffPositions[1]],arr[diffPositions[0]]];
  }
  console.log(diffPositions)
  console.log(s1)
  console.log(arr);
   return arr.join('')==s2; 
}
let s= "aa";
let s2="ac";
let s3 ="bank";
let s4="kanb";
//console.log(areAlmostEqual(s,s2))
//console.log(areAlmostEqual(s3,s4))
console.log(areAlmostEqual1(s3,s4))

let str ="hello";
[str[0],str[1]]=[str[1],str[0]];
console.log(str); //hello because strings are immutable 

str=str.split('');//turn string into array 
[str[0],str[1]]=[str[1],str[0]]; //swap 
console.log(str.join('')); //ehllo 
    
