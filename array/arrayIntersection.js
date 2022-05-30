

var arr1 = ["sue", "tom", "kathy", "henry"]; //arr1.length = 4
var arr2 = [ "henry", "holly", "jennifer", "kathy", "alex"]; //arr2.length = 5

var arr3 = ['sue', 'sue', 'kathy'],
    arr4 = ['kathy', 'kathy', 'sue'];

//filter () -> The above would now give ["sue", "sue", "kathy"]
//fitler().filter() -> [sue,kathy]
let res=arr3.filter(el=>arr4.includes(el)).filter((el,index,arr)=>{
   return arr.indexOf(el)===index;
});

console.log (res);

let array1=[1,2,3];
let array2=[1,2,3,4,5]
const filteredArray = array1.filter(value => array2.includes(value));
let difference = array2.filter(x => !array1.includes(x));

console.log(filteredArray) //[1,2,3]
console.log(difference) //[4,5]


function arrayDiff(a, b) {
    let res =a.filter((el)=>  !b.includes(el));
    
    console.log(res);
    return res;
  }
  arrayDiff([1,2],[1]);