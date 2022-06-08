
//Note: Return value= The value that results from running the "reducer" callback function to completion over the entire array.
//return the longest word 
let words=["zone", "abigail", "theta", "form", "libe", "zas"]; 

let res = words.reduce((pv,cv)=>pv.length>cv.length ? pv : cv);
console.log(res);
console.log(typeof res) //string 