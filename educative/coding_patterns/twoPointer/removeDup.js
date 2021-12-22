/*
https://www.educative.io/courses/grokking-the-coding-interview/xlK78P3Xl7E
Two Pointer technique

Complexity: O(N), where ‘N’ is the total number of elements in the given array.
Given that the input array is SORTED, 
Return: the length of the subarray that has no duplicate in it.
Constraints:
- we need to remove the duplicates in-place 
such that the resultant length of the array remains sorted. 

As the input array is sorted, therefore, one way to do this is 
to shift the elements left whenever we encounter duplicates. 

 we will keep one pointer for iterating the array 
 and one pointer for placing the next non-duplicate number. 
 --iterate the array and whenever we see a non-duplicate number 
 we move it next to the last non-duplicate number we’ve seen.


*/
function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1;
    let i = 1;

    let result =[];
    while (i < arr.length) {
      if (arr[nextNonDuplicate - 1] !== arr[i]) {
        arr[nextNonDuplicate] = arr[i]; //to shift the element to the  left 
        nextNonDuplicate += 1;   //only move pointer to the right IF adj elements non dup
      }
      i += 1; //increment i to avoid inf loop 
    }
     
    result =[...arr.splice(0,nextNonDuplicate)];
    console.log(result);
    return nextNonDuplicate;//it is acting as a pointer holding index of next non dup; 
    //it is acting as counter ;incremented only when non dup found;
  }
  
  
  console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
  console.log(remove_duplicates([2, 2, 2, 11]));