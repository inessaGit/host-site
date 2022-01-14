/*
https://www.educative.io/courses/visual-introduction-to-algorithms/kMABY
Analysis:
For example, if we're inserting 0 into the subarray [2, 3, 5, 7, 11], 
then every element in the subarray has to slide over one position to the right. 
So, in general, if we're inserting into a subarray with k elements,
 all k might have to slide over by one position

 Worst case: Θ(n2).
 Best case: O(n) example insert value= 11, rightIndex=4 into [2, 3, 5, 7, 11],
 Almost sorted case: O(n)
*/

var insert = function(array, rightIndex, value) {
    //Write this method
    for (var i = 0; i < array.length; i++){
       if (array[i] == value)
           array.splice(i, 1);
    }
    
    console.log(array); //[2, 3, 5, 7, 11, 13, 6] | value=9 deleted 
    for (var i = 0; i < rightIndex; i++){
        if (value<array[i]){
          array.splice(i, 0, value); //insert at i index value, remove 0 
          break;      
        }
     }
  };

let array = [2, 3, 5, 7, 11, 13, 9, 6]
let rightIndex = 5
let value = 9

console.log(insert(array,rightIndex,value))//exp [2, 3, 5, 7, 9, 11, 13, 6]

let m =[1,2,3,4];
m.splice(1,0,5); //splice is destructive; modifies array in place ; 
console.log(m)// [1,5,2,3,4]