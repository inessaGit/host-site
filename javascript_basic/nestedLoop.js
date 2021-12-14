
function  nestedLoop(){
    console.log(`Case 1 of nested loop`);

    for (let i=0;i<5;i++){
        console.log(`i=${i}`);
    
        for(let j=i;j<5;j++){
            console.log(`j=${j}`);
            
        }
        console.log("=========")
    }
}

//function expression 
let case2=function(){
    // i=0 : j=0 j=1 j=2 j=3 j=4
//brute force to compare an element in array X with all other elements in array Y
console.log(`Case 2 of nested loop`);
for (let i=0;i<4;i++){

    console.log(`i=${i}`);
    for (let j=0;j<4;j++){
        console.log(`j=${j}`);
    }
    console.log("=========")

}
}

//case2();

nestedLoop();
// i=0: j=0, j=1, j=2,j=3,j=4
// i=1: j=1, j=2, j=3,j=4
// i= 2: j=2, j=3, j=4