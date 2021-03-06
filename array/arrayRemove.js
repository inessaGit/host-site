/*
Modify array:
- delete elements with modifying array.length
- delete elements with splice(index,delCount, insertEl)
- delete el with pop() from end; with shift from beginning;
*/


const removeFromArray = function(arr,...targets) {
    let res =arr.filter((el)=> !targets.includes(el));
    return res;
};


var array = [1,2,3,4];
var anotherOne = [2,4];
var filteredArray = array.filter(myCallBack);

function myCallBack(el){
  return anotherOne.indexOf(el) < 0;
}


var arr1 = [1,2,3,4],
arr2 = [2,4],
res = arr1.filter(item => !arr2.includes(item));


console.log(removeFromArray([1,2,3,4],3,4));

//Decreasing the length property does, however, delete elements.
let arr=[1,2,3,4,6];
arr.length=4; //[1234]
console.log(arr)
arr.shift();
console.log(arr) //[234]
