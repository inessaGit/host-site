
/*
left to right diagonal = principal diagonal
right to left diagonal = secondary diagonal

To fill principal diagonal: [0,0], [1,1], [2,2]etc
- if (rows ==cols ) then matrix[i][j]='some value

To fill secondary diagonal : [0,3][1,2][2,1][3,0]
- if (i+j)==rows-1 then matrix[i][j]='some val'
*/

function fill2DArrayDiagonals(){

    //declare 2 d array
    let rows = 4;
    let cols =4; 
    let matrix = new Array(rows).fill(0).map(()=> new Array(cols).fill(0));

    for (let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(i==j){
               matrix[i][j]=1;
            }
            else if ((i+j)==rows-1){
                matrix[i][j]=6;
            }
        }
    }
    console.table(matrix);
}

fill2DArrayDiagonals(); 