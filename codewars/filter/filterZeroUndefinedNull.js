
//filter null, undefined and ZERO (note it is not always needed to filter out zero)
var arr3 = [1,2,,3,,-3,null,,0,,undefined,4,,4,,5,,6,,,,];
let filtered = arr3.filter(n => n)// [1, 2, 3, -3, 4, 4, 5, 6]
console.log(filtered);

filtered=arr3.filter(Number) // [1, 2, 3, -3, 4, 4, 5, 6]
console.log(filtered);

 filtered =arr3.filter(Boolean) // [1, 2, 3, -3, 4, 4, 5, 6]
 console.log(filtered);

 //if it is text or mixed items in array  filter null, undefined and sparse items
 var arr4 = [1,2,null, undefined,3,,3,,,0,,,[],,{},,5,,6,,,,],
len = arr4.length, i;
for(i = 0; i < len; i++ )
    arr4[i] && arr4.push(arr4[i]);  // copy non-empty values to the end of the array

let res =arr4.splice(0 , len);  // cut the array and leave only the non-empty values
// [1,2,3,3,[],Object{},5,6]
console.log(arr4); 
