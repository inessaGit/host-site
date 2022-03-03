

let arr=[1,2,4,6];
let spliced =arr.splice(arr.length-1)
console.log(spliced)

let word ="helllo2"
word =word.slice(word.length-1)
console.log(word)

let arr1 = ["hello", "iness","anna", "anders"];
arr1.splice(1,0,"annabel"); 

console.log(arr1) // exp : insert at position 1 "annabel" => ["hello", "annabel", "iness","anna", "anders"];

let arr2 =[1,0,2,3,0,4];
let n =arr2.length;

for (let i=0;i<n;i++){
   if (arr2[i]==0){
       arr2.splice(i,0,0) ; //insert at index i , delete zero elements, insert 0
       console.log(arr2);
       i+=1; 
       arr2.pop();
   }
   
}

console.log(arr2); //exp [1,0,0,2,3,0]