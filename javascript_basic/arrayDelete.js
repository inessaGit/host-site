let a =[];
for (let i=0;i<4;i++){
    a.push(i)
}
console.log(a); //[ 0, 1, 2, 3 ]
console.log("===========")

//Delete item at the beginning of array by index ; all other items should shift LEFT

for (let i=1;i<=a.length-1;i++){
    a[i-1]=a[i] 
}
/*
a[0]=a[1]  [1,1,2,3]
a[1]=a[2]  [1,2,2,3]
a[2]=a[3]   [1,2,3,3]

*/
//reduce array length by 1 element ;
//a.pop();
console.log(a); //[1,2,3,3]
console.log("===========")

//Case 2: using splice
let b=[10,20,30,40]
b.splice(0,1);
console.log(b) //[20,30,40]

