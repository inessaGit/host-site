


function reducer(pv, cv, index, array) {
    const returns = pv+ cv;
    console.log(`previous: ${pv}, current: ${cv}, index: ${index}, returns: ${returns}`);
    return returns; //it is returned AND it is saved in pv ; but need to return and reset pv 
  };
 
  let arr =['hello','cat','hi'];
// Callback function
//reduce(callbackFn) reduce(callbackFn, initialValue)
let res = arr.reduce(reducer); 
 /*Res=
previous: hello, current: cat, index: 1, returns: hellocat
previous: hellocat, current: hi, index: 2, returns: hellocathi
  */

let res2 = arr.reduce(reducer,"me"); 
/*
previous: me, current: hello, index: 0, returns: mehello
previous: mehello, current: cat, index: 1, returns: mehellocat
previous: mehellocat, current: hi, index: 2, returns: mehellocathi
*/
 let res3= arr.reduce((pv,cv)=>{
     
  },0);
