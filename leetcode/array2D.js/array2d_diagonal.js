/*
diagonal traverse of 2d array 
https://leetcode.com/problems/diagonal-traverse/solution/
https://leetcode.com/problems/diagonal-traverse/discuss/203060/Java-Solution-with-Clear-Explanation



*/

var findDiagonalOrder = function (matrix){

    //check for empty matrix 
    if(matrix ==null || matrix.length==0){return 0;}

    //vars to track size of matrix 
    const ROW = matrix.length ; //rows N
    const COL = matrix[0].length; //cols  M

     let result = []; //result array 
     let k =0; 
     let intermidiate = new Array(); 

     //1. Go over all the el in the first row and the last col to cover all possible diagonals 

     for (let d=0;d<ROW+COL-1; d++){
         //clear intermidiate array when we start to process another diagonal 
         intermidiate = []; // in Java that would be intermidiate.clear() ; 

         //Figure out the head of this diagonal 
         //The elements in teh first row and last col are the respective heads 
         let r=d<COL ? 0: d-COL +1; 
         let c = d< COL ? d: COL-1 ; 


     }

}