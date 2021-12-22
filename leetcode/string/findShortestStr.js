

let a=["cat","cataca","ca"];
let min=a.reduce((prevValue,curValue)=>{
    return curValue.length<prevValue.length ?curValue:prevValue
}); 

console.log(min)