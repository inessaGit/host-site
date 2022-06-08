/*https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
    const isSubset = (array1, array2) => array2.every
    (element => array1.includes(element));
    - do not use includes for this kata because it will return true even if a= [0,1,2] b=[0,4,4]
*/

function comp(array1, array2){
    //el in array1 are equal to el squard in arr2
    if (!array1 || !array2) return false; 
    array1.sort((a,b)=>a-b);
    array2.sort((a,b)=>a-b);
    
    let res = array2.every((el,i)=>{
      return array1[i]==(Math.sqrt(el));
    })
    return res;
  
  }