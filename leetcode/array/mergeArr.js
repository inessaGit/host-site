
let mergeArrays=function(arr1,arr2){

    let merged =[...arr1,...arr2];
   // return merged.sort((a,b)=>{return a-b});
//because the body of arrow function is only one return statement can ommit word return 

   return merged.sort((a,b)=>a-b);
}