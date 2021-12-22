let a=[];
for (let i=0;i<4;i++){
    a.push(i)
}
console.log(a); //[ 0, 1, 2, 3 ]
console.log("=============")


//Case1: insert element at the beginning of array using index
/*
To insert an element at the start of an Array, we'll need to shift all other elements 
in the Array to the RIGHT by one index to create space for the new element. 
This is a very costly operation, since each of the existing elements 
has to be shifted one step to the right. 
In terms of time complexity: O(N)O(N), where NN is the length of the Array.
-- // We need to go backwards to avoid overwriting any elements.
*/
let b =[10,20,30]; 
for (let i=b.length-1;i>=0;i--) //2,1,0
{
    b[i+1]=b[i];
    console.log(b);
    
}
console.log("=============")

//Case 2: using splice 
a.splice(0,0,10);
console.log(a)

//Case 3: using unshift 
a.unshift(90);
console.log(a)
