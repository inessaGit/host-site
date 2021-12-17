

function findFirstUnique(arr){
    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
    return result;
    }

let a= [9,2,3,2,6,6];
let b=[4,5,1,2,0,4]; 
//findFirstUnique(a); 

console.log(a.length)

delete a[2];
console.log(a)
console.log(a.length)

let binarySearch = function(a, key) {
    let low =0;
    let high = a.length-1; 
  
    while(low<=high){
      let mid = Math.floor(low +(high-low)/2); 
      if (key===a[mid]) return mid;
      else if (key<a[mid]) high =mid-1; //search in the first half high =mid-1; 
      else if (key>a[mid]) low= mid+1; //search in the second half from mid+1 -till high 
      else return -1; 
    }
  };
  binarySearch([1,2,4,7,8,12],44);

