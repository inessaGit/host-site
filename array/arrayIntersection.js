

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