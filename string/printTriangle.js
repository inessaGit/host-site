/*
Write a program to print following pattern
        1    
	  1 2 1
    1 2 3 2 1 
  1 2 3 4 3 2 1

  outter loop 1-5 
  inner loop 1-4


for (let i=1;i<5;i++){
    console.log(`s1=${i}`);
    for(let j=1;j<4;j++){ //1 2 3
     console.log(`s2=${j}`)
    }
}
*/
function generatePyramid() {
    var rows = 5;
    var output = '';
    for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i ; j++) { //
          //  output += j + '  '; //1 2 3 4 5
            console.log(`inner loop ${j}`);//5 times outter loop
        }
        console.log(`outter loop`);//5 times outter loop

        //console.log(output);//5 times outter loop
        output = ''; //reset to empty string 
    }
}

generatePyramid();