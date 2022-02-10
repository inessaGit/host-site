

function sumOfDifferences(arr) {
    let res =0;
    let n = arr.length; 
    if (n==0 || n==1) return res;
    arr.sort((a,b)=>{return b-a});

    for (let i=1;i<n;i++){
      res+=arr[i-1]-arr[i];
      console.log(res);
    }
    
    return res;
  }

  //using Math.max and spread
  function sumOfDifferences1(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
//using array.map() and reduce()
const sumOfDifferences2 = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

  //Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
let s = [1,2,10]; //[10,2,1]
console.log(sumOfDifferences(s));