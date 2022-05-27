/*
Counting sort:
- Not in place (uses temp array)
- Counting sort hashes the value in a temporary count array and uses them for sorting.
- While sorting negative integers we face certain road blocks
 with counting sort because there are no negative array indices. 
 So what we do is, we find the minimum element and we will store 
 count of that minimum element at zero index


Steps: 
- Create temp array and fill it with 0
- Store the frequency of each element in the array at that element’s index in the temporary array
--- if the count of element 1 is 3 then, 3 is stored in the 1st position of the temporary array
- Store the cumulative sum of the elements of the temporary array. It helps in placing the elements into the correct index of the sorted array.

*/

function countingSort(arr) {
    // count store from 0-9 
    let n = arr.length; 
    let index;
    let temp =Array(10).fill(0);
    for (let el of arr){
      index= el//index should be eq to value
       temp[index]++;
    }
    console.log(temp);
    //Update the count based on the previous index (cumilative sum)
    for (let i=1;i<temp.length;i++){
      temp[i] = temp[i] + temp[i - 1];  

    }
    console.log('after cum sum')
    console.log(temp);

  //Output arr
  const outputArr = new Array(n).fill(0);
  for(let i = n - 1; i >= 0; i--) {
    // Add elements of array A to array B
    index = arr[i]; //[1,1,3,2,1];
    outputArr[temp[index] - 1] = index;  
        
    // Decrement the count value by 1
    temp[index] = temp[index] - 1;		
   }

  return outputArr; 
}

let s = [1,1,3,2,1]; //exp [ 1, 1, 1, 2, 3 ]
console.log(countingSort(s));

const arr = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort(arr)); //exp [1, 1, 1, 2, 2, 3, 5, 5, 7, 8]