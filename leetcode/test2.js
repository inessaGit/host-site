

function findFirstUnique(arr){
    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
    return result;
    }

let a= [9,2,3,2,6,6];
let b=[4,5,1,2,0,4]; 
//findFirstUnique(a); 

 
for (let i=0;i<4;i++){
  let x=1;
  x++;
 while(x<4){
  console.log(`i=${i} x=${x}`);
  x++;
  }

}
/*
i=0 x=2
i=0 x=3

i=1 x=2
i=1 x=3

i=2 x=2
i=2 x=3

i=3 x=2
i=3 x=3
*/

// for each iteration of OUTTER loop inner loop will run x num of times 
for (let i=0;i<5;i++){
  console.log(`OUTTER loop ${i}`); //runs 5 times 

  for (let j=i;j<5;j++){
      console.log(`--inner loop ${j}`); //runs 25 times 

  }
}