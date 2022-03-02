/*
https://leetcode.com/problems/rings-and-rods/

Idea: 
- 3 arrays : red, green, blue ; Length 10 filled with boolean false 
- go over rings string ;i+=2 and store color in the appropriate array; 
rod number will be stored as index in the color array 
- go over colors arrays and count when it is true for all 3 colors 
- return counter 
*/

var countPoints = function(rings) {
  let red = new Array(10).fill(false);
  let green = new Array(10).fill(false);
  let blue = new Array(10).fill(false);
   let n = rings.length;
   let res =0;

  for (let i =0;i <n;i+=2){
     let color = rings[i];
    // console.log(`color=${color}`)
     let num = rings[i+1];
     if (color =='R'){
         red[num]=true;
     }
     else if(color=='G'){
         green[num]=true;
     }
     else {
         blue[num]=true;
     }
  }


   for (let i=0;i <10;i++){
    if(red[i]==true && green[i]==true && blue[i]==true){
        res++;
    }
   }
   return res; 
};

let r ="B0B6G0R6R0R6G9";
console.log(countPoints(r)); //exp 1 = the num of rods with all 3 colors 

