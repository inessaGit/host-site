

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

function test(){

  let i =0;
  let j=0;
  let k=0;

  while(i<4){
    i++; 
    while(i<3&&j<3){
      j++;
      console.log(`First NESTED while loop i=${i} j=${j}`)
    }
    while(i<3&&k<2){
      j++;
      k++;
      console.log(`SECOND NESTED while loop i=${i} j=${j} k=${k}`)
    }
    console.log(`OUTTER while loop i=${i}`)
     console.log("belowe nested while loops : STILL INSIDE outter while loop")
  }
}

test();
//outter while loop will run 4 times 
// first inner while loop will run 3 times till j <3 
//second inner while loop will run 2 times till k<2

//even odd

