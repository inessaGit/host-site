function isSubset(array1, array2) {
    // returns true if array2 is a subset of array1
  
    return array2.every(function (element) {
      return array1.includes(element);
    });
  }
  
  //console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  //console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])); // true

