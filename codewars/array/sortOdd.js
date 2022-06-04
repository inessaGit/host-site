/*
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Approach: 
1. store odd array with sorted odd nums (using filter)
2. map each val in original array using map: if even leave if odd insert from odd array using shift 

Array.prototype.map()
The map() method creates a new array populated with the results of calling a provided function 
Array.prototype.shift()
Removes the first element and RETURNS it; 
*/

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    //console.log(`odd=${odd}`);
    //odd.shift removes firt el from the odd array and returns it! it is returned and mapped to the array 
    let res= array.map((x) => x % 2 ? odd.shift() : x);//[1,2,8,9,7]   1,2,8,7,9
    console.log(`res=${res}`)
    return res; 
  }

  function sortArray1(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }

  let a=[1,2,8,9,7] //[1,3,2]
  let b= [7,1] //exp [1,7]
  sortArray(a);
  //sortArray(b);