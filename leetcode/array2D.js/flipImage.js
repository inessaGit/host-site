/*
https://leetcode.com/problems/flipping-an-image/
To flip an image horizontally means that each row of the image is reversed.
For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
*/

var flipAndInvertImage = function(image) {
    let row = image.length;
    let col=image[0].length;

    for (let el of image){
         el.reverse();
    }
   console.log(image); //[ [ 0, 1, 1 ], [ 1, 0, 1 ], [ 0, 0, 0 ] ]
     for (let el of image){
       for (let j=0;j<col;j++){
         if (el[j]==0) el[j]=1;
         else el[j]=0;
       }
     }
     console.log(image);

    };
let image = [[1,1,0],[1,0,1],[0,0,0]]; 
let exp =[[1,0,0],[0,1,0],[1,1,1]];

let image2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
let exp2=[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]];

flipAndInvertImage(image);