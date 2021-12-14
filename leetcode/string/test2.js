

let arr =[8,1,2,6,-1,0];
arr.sort((a,b)=>a-b);

console.log(arr)


let arr1 =[1,2,3,4]; 
let product =arr1[0];
    let sum =0; 

for (let i=0; i<arr1.length; i++){
    product*=arr1[i]; 
    sum +=arr1[i]; 
}
console.log(sum); 
console.log(product); 
