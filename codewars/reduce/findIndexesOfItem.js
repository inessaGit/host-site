
/*

The function is called with the following arguments:
previousValue: the value resulting from the previous call to callbackFn. 
On first call, initialValue if specified, otherwise the value of array[0].

currentValue: the value of the current element. 
On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

*/
let arr =["Nano","Volvo","BMW","Nano","VW","Nano"];
let res =[];
arr.reduce(function(arr, e, i) {
    if (e === 'Nano') res.push(i);
    return res;
},0);

console.log(res);

let arr2=
["Nano","Volvo","BMW","Nano","VW","Nano"];
arr2.reduce(function(a, e, i) {
    if (e === 'Nano') a.push(i);
    return a;
}, []);  

let n=[1,2,3]; 
let sum = n.reduce((pv,cv)=>{
    return pv+cv
},5);

console.log(sum) //pv =5 , cv= 1 sum =6; pv =6 cv =2 sum=8; pv =8 cv =3 sum =11; 