
/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
https://www.educative.io/courses/grokking-the-coding-interview/mEEA22L5mNA

Important: 
- array sorted 
Approach: 
- two pointers ;shift elements left when we find duplicate 
One pointer for iterating the array and 2nd pointer for placing the next non-duplicate number;
- iterate the array and whenever we see a non-duplicate number 
we move it next to the last non-duplicate number we’ve seen

Time Complexity - O(N)
Space Complexity - O(1)
*/

function removeDupInPlace(ar){
    //left pointer and right pointer ; left pointer is index of the NON DUP number
    let left =0;
    let n = ar.length;
    for(let right=1;right<n;right++){
        if(ar[left]!=ar[right]){
            //left is index of non dup; everything to the right of it (left++) is dups 
            left++; //increment index to write over the dup number 
            ar[left]=ar[right];//write over the dup num 
        }
        console.log(`${right} run: `+ar);
    }
    return left+1; 
}

let ar=[1,1,2,3,4,5,5];
let ar2=[2,3,3,3,6,9,9]; //exp 4 [2,3,6,9]
/*
1 run: 2,3,3,3,6,9,9  | right=1, left =0 2!=3 then increment left pointer now right=1, left=1  pointers equal so write happens but no changes 
2 run: 2,3,3,3,6,9,9  | right =2 left =1 3==3 so do nothing
3 run: 2,3,3,3,6,9,9  | right =3 left =1 3==3 so do nothing 
4 run: 2,3,==6==,3,==6==,9,9  | right =4 left =1 3!=6 then increment left pointer now right=4 left=2 ; write happens 
5 run: 2,3,6,==9==,6,==9==,9  | right =5 left =2  6!=9 ; increment left pointer (slide right) now right=5, left =3; write happens
6 run: 2,3,6,9,6,9,9    | right =6 left =3 9==9 so do nothing 

Now left pointer =3; which means that element at the indexes from 0-3 are non dups ;
 which means that it is 4 elements (left+1);
*/
//removeDupInPlace(ar);
removeDupInPlace(ar2);

function remove_element(arr, key) {
    let nextElement = 0; // index of the next element which is not 'key'
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== key) {
        arr[nextElement] = arr[i];
        nextElement += 1;
      }
    }
    return nextElement;
  }
  //console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
  //console.log(`Array new length: ${remove_element([1, 11, 2, 2, 1], 2)}`);
