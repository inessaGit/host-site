
//Create 2d array literal notation 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  //Create 2d array that has 3 rows and 2 cols 
  let arr4 = new Array();
  //row 1 
  arr4.push(new Array(2).fill(0));
  //row 2 
  arr4.push(new Array(2).fill(0))
  //row 3 
  arr4.push(new Array(2).fill(0))

  //console.log(arr4)

let row=3, col=2; 
//Create 2d array with empty slots 
let arr2= Array.from(Array(row),()=>new Array(col));  //
console.log (arr2); //[ [ <2 empty items> ], [ <2 empty items> ], [ <2 empty items> ] ]

  //create 2d array which has m rows and n cols filled with 0 
  let arr5 = new Array(row).fill(0).map(()=>new Array(col).fill(0));
  console.log(arr5); //[ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
