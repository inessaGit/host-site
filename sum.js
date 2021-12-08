//sum of a range
//Step 1: transform range into an array of elements filling ommitted elements; 
//return that array 
function range(start,end,step=start<end?1:-1){
    let array=[];
    if(step>0){
        for (let i=start;i<=end;i+=step) array.push(i);
    }else {
        for (let i=start;i>=end;i+=step)array.push(i);
    }
    return array; 
}

function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }

  console.log(range(1, 10));
let arr =range(1,4);
console.log(sum(arr)); //let arr = [1, 4];
// output: 1 + 2 + 3 + 4 = 10

let arr2 = range(1,1);
console.log (sum(arr2));