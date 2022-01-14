/*
https://www.educative.io/courses/visual-introduction-to-algorithms/kMRrJ
*/

var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    // 5 2 3 4 startIndex =1 from [2 3 4 ] find smallest and return its index
    var minValue = array[startIndex];
    var minIndex = startIndex;
     let n =array.length-1; 
     
    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    while(minIndex<=n){
       if (minValue>array[minIndex]){
         minValue=array[minIndex];
         console.log(minValue);
       }
                minIndex++; 

    }

  
    return array.indexOf(minValue);
};

// [66, 44,9,22,14,5]
console.log(indexOfMinimum( [18,6,66,44,9,22,14,5] ,2)); //exp 7
//exp 5 
console.log(indexOfMinimum( [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,13,59,61,67,71,73,79,83,89,97] ,5))