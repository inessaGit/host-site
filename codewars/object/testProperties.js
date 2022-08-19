
/*
Using in operator 
in can distinguish between
properties that do not exist and properties that exist but have been set to undefined
*/
let obj = {x:1,y:2};
//console.log(x in obj); //x is not defined
console.log("x" in obj); //true 
console.log("z" in obj) //false 

// cound use !== to make sure it is not undefined instead of in operator 
console.log(obj.x!==undefined) //true 
console.log(obj.z!==undefined) //false  does not have z 

//Loop over obj properties 
let obj1={x:1,y:undefined,z:"hello"}
for(let k in obj1){
  console.log(k)
}

//Loop over obj properties values 
for(let v of Object.values(obj1)){
    console.log(v)
}

//looping over both keys and values 
for(let [k,v]of Object.entries(obj1)){
    console.log(`key=${k} value=${v}`)
}