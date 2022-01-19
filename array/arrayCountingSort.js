function countingSort(arr) {
    // Write your code here
    let temp =Array(100).fill(0);
    
    for (let el of arr){
       let index= el//index should be eq to value
       temp[index]++;
    }
  return temp; 
}

let s = [1,1,3,2,1];
console.log(countingSort(s));
