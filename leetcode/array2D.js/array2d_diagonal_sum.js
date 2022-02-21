
/*
Condition for Principal Diagonal: The row-column condition is row = column. 
Condition for Secondary Diagonal: 
The row-column condition is row = numberOfRows – column -1.

*/
function printDiagonalSums2(mat, n)
{
    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Condition for principal diagonal
            if (i == j)
                principal += mat[i][j];
            // Condition for secondary diagonal
            if ((i + j) == (n - 1))
                secondary += mat[i][j];
        }
    }
    console.log(`DOUBLE  LOOP principal diagonal sum=${principal}`);
    console.log(`DOUBLE LOOP secondary diagonal sum=${secondary}`);
}

function  printDiagonalSums(mat,n)
    {
        let principal = 0, secondary = 0;
        for (let i = 0; i < n; i++) {
            principal += mat[i][i];
            secondary += mat[i][n - i - 1];
        }
     console.log(`principal diagonal sum=${principal}`);
     console.log(`secondary diagonal sum=${secondary}`);

       }
     

function leftDiagonalSum(matrix){
    let n=matrix.length;

        let sum=0;
        let i=0,j=0;
        while(i<n)
        {
            sum+=matrix[i][j];
            i++;
            j++;
        }
        
        return sum;
}


let matrix1 = 
[[1,1,1,1],
[1,1,1,1],
[1,1,1,1],
[1,1,1,1]] ;

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [2, 8, 9]
  ];
console.log(leftDiagonalSum(matrix));
printDiagonalSums(matrix,3)