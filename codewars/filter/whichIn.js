/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

*/


function inArray(array1,array2){
    let res =  array1.filter((el)=>{
           return array2.find((el2)=>el2.includes(el))
    }).sort(); 
    console.log(res)
    return res;
  }

  function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }